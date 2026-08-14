import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Sparkles, Layers, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CanvasSequenceScrubber({
  title = "Next-Gen System Architecture",
  subtitle = "Interactive 3D Frame Sequence Scrubbing",
  steps = [
    { title: "Core Engine Initialization", desc: "Ultra-low latency reactive pipeline processing real-time telemetry." },
    { title: "Distributed Neural Sharding", desc: "Parallelized async state orchestration across redundant micro-nodes." },
    { title: "Zero-Latency Edge Synthesis", desc: "Sub-millisecond dynamic compute execution at regional edge pops." },
    { title: "Quantum Telemetry & Security", desc: "End-to-end cryptographic integrity with autonomous anomaly failover." }
  ]
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrubProgress, setScrubProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 800);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio || 800;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio || 600;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for procedural 3D sequence
    const particleCount = 140;
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 120 + Math.random() * 80;
      return {
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        baseRadius: radius,
        color: i % 3 === 0 ? '#7C3AED' : i % 3 === 1 ? '#06B6D4' : '#F43F5E',
        size: Math.random() * 2.5 + 1.5,
      };
    });

    let currentProgress = { value: 0 };

    const renderFrame = (prog) => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const rotationY = prog * Math.PI * 4;
      const rotationX = Math.sin(prog * Math.PI * 2) * 0.6;
      const zoom = 1 + Math.sin(prog * Math.PI) * 0.45;

      // Draw futuristic orbital grid rings
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.strokeStyle = r === 1 ? 'rgba(124, 58, 237, 0.25)' : r === 2 ? 'rgba(6, 182, 212, 0.2)' : 'rgba(244, 63, 94, 0.15)';
        ctx.lineWidth = 1.5;
        const ringRadius = (90 * r + prog * 40) * (width / 900);
        ctx.ellipse(cx, cy, ringRadius * zoom, ringRadius * 0.45 * zoom, rotationY * 0.3 * (r % 2 === 0 ? -1 : 1), 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw 3D morphing particle cloud
      const projected = particles.map((p) => {
        // Rotate Y
        let cosY = Math.cos(rotationY);
        let sinY = Math.sin(rotationY);
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;

        // Rotate X
        let cosX = Math.cos(rotationX);
        let sinX = Math.sin(rotationX);
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        const fov = 350;
        const scale = fov / (fov + z2 + 180) * zoom;
        const projX = cx + x1 * scale * (width / 750);
        const projY = cy + y2 * scale * (height / 600);

        return { x: projX, y: projY, scale, z: z2, color: p.color, size: p.size };
      });

      // Sort by depth
      projected.sort((a, b) => a.z - b.z);

      // Draw connecting lines between nearby points
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < Math.min(i + 6, projected.length); j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 75) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - dist / 75) * 0.35})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points with glowing core
      projected.forEach((pt) => {
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, Math.max(0.5, pt.size * pt.scale), 0, Math.PI * 2);
        ctx.fill();
      });

      // Core Holographic Sphere
      const pulse = Math.sin(prog * Math.PI * 8) * 6;
      const gradient = ctx.createRadialGradient(cx, cy, 5, cx, cy, (50 + pulse) * zoom);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.9)');
      gradient.addColorStop(0.4, 'rgba(124, 58, 237, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, (55 + pulse) * zoom, 0, Math.PI * 2);
      ctx.fill();
    };

    // Initial draw
    renderFrame(0);

    // GSAP ScrollTrigger scrubbing
    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=250%',
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress;
        currentProgress.value = p;
        setScrubProgress(p);
        renderFrame(p);

        const stepIdx = Math.min(steps.length - 1, Math.floor(p * steps.length));
        setActiveStep(stepIdx);
      },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      st.kill();
    };
  }, [steps]);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-stone-950 text-white flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Noise & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-950/40 via-stone-950 to-stone-950 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD Badges */}
      <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-20 pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-400">
            PARALLAX SEQUENCE SCRUBBER // 60FPS CANVAS
          </span>
        </div>
        <div className="font-mono text-xs text-cyan-400 px-3 py-1 bg-stone-900/80 border border-cyan-500/30 rounded-full backdrop-blur-md">
          SCRUB: {(scrubProgress * 100).toFixed(0)}%
        </div>
      </div>

      {/* Main Canvas rendering viewport */}
      <div className="relative w-full max-w-5xl h-[65vh] flex items-center justify-center z-10">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain"
        />

        {/* Floating Interactive Story Cards driven by activeStep */}
        <div className="absolute bottom-4 left-6 right-6 md:left-12 md:right-12 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-stone-900/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl transition-all duration-500">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400">
              {activeStep === 0 && <Sparkles className="w-6 h-6 animate-spin-slow" />}
              {activeStep === 1 && <Layers className="w-6 h-6 animate-pulse" />}
              {activeStep === 2 && <Cpu className="w-6 h-6" />}
              {activeStep === 3 && <Play className="w-6 h-6" />}
            </div>
            <div>
              <div className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-1">
                Phase 0{activeStep + 1} / 0{steps.length}
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-stone-300 mt-1 max-w-xl">
                {steps[activeStep].desc}
              </p>
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex items-center gap-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === idx
                    ? 'w-8 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                    : 'w-2 bg-stone-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 text-xs font-mono text-stone-400">
        <span>SCROLL TO SCRUB SEQUENCE</span>
        <div className="w-4 h-6 border border-stone-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
