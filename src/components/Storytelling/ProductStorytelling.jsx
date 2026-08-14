import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Terminal, Flame, Shield, ArrowUpRight, Cpu, Eye } from 'lucide-react';
import HlsVideoPlayer from '../Media/HlsVideoPlayer';
import TechLayerBreakdown from './TechLayerBreakdown';
import MagneticButton from '../Common/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function ProductStorytelling() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const videoCardRef = useRef(null);
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const videoCard = videoCardRef.current;
    if (!section || !headline || !videoCard) return;

    // Timeline pinned animation for dramatic storytelling reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      headline,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    ).fromTo(
      videoCard,
      { opacity: 0, scale: 0.94, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'expo.out' },
      '-=0.5'
    );

    return () => {
      tl.kill();
    };
  }, []);

  const hotspots = [
    { id: 1, x: '25%', y: '35%', title: 'Adaptive HLS Sharding', desc: 'Dynamically scales resolution from 720p to 4K based on client network bandwidth.' },
    { id: 2, x: '70%', y: '60%', title: 'Zero-Latency GPU Glow', desc: 'Hardware-accelerated ambient light diffusion reflecting video palette in real-time.' },
    { id: 3, x: '50%', y: '80%', title: 'Real-time WebSocket Sync', desc: 'Instant multi-user cursor & state synchronization with <20ms roundtrip.' },
  ];

  return (
    <section
      ref={sectionRef}
      id="case-study"
      className="relative py-28 px-4 md:px-8 bg-stone-950 text-white overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headlineRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/70 border border-violet-700/40 text-violet-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FLAGSHIP PRODUCT STORYTELLING & CASE STUDY</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Engineering High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400">
              Interactive Web Experiences
            </span>
          </h2>

          <p className="text-stone-400 text-base md:text-lg mt-5 leading-relaxed">
            A comprehensive deep-dive into the architectural decisions, low-latency streaming pipeline, and kinetic 3D micro-interactions powering modern digital products.
          </p>
        </div>

        {/* Video Reel Showcase with Interactive Hotspots */}
        <div ref={videoCardRef} className="relative max-w-5xl mx-auto mb-20">
          <HlsVideoPlayer
            src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            fallbackMp4="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            title="Next-Gen Architecture Reel"
            badge="LIVE STREAM DEMO"
            className="w-full aspect-video shadow-[0_20px_80px_rgba(124,58,237,0.25)]"
          />

          {/* Interactive Hotspot Pins */}
          {hotspots.map((hs) => (
            <div
              key={hs.id}
              style={{ left: hs.x, top: hs.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group"
            >
              <button
                onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/90 text-stone-950 font-black text-xs shadow-lg hover:scale-125 transition-transform"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <Eye className="w-4 h-4 text-black relative z-10" />
              </button>

              {/* Tooltip Card */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-10 w-64 p-3.5 rounded-xl bg-stone-900/95 border border-cyan-500/40 backdrop-blur-xl shadow-2xl transition-all duration-300 pointer-events-none ${
                  activeHotspot === hs.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                }`}
              >
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1">{hs.title}</div>
                <div className="text-[11px] text-stone-300 leading-snug">{hs.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Exploded Layer System Breakdown */}
        <TechLayerBreakdown />

        {/* Story Call-to-Action */}
        <div className="mt-16 text-center">
          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-bold text-sm tracking-wide shadow-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all hover:scale-105"
            >
              <span>Explore All Featured Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
