import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Database, Server, Terminal, ArrowRight } from 'lucide-react';

const layersData = [
  {
    id: 'frontend',
    title: 'Presentation & UI Layer',
    tech: 'React 19 + GSAP + Tailwind CSS + WebGL',
    desc: 'Ultra-fluid 120 FPS kinetic interface with zero-layout-shift micro-interactions and GPU-accelerated canvas sequences.',
    badge: 'Layer 01 // Client Edge',
    color: 'from-violet-500 to-indigo-500',
    borderColor: 'border-violet-500/40',
    icon: Layers,
    stats: { metric: 'Frame Time', value: '< 8.3ms', label: '120fps smooth' },
  },
  {
    id: 'gateway',
    title: 'Real-Time Telemetry & Gateway',
    tech: 'WebSocket + HLS Engine + Edge Functions',
    desc: 'Low-latency adaptive media streaming and bi-directional state sync distributed across multi-region edge nodes.',
    badge: 'Layer 02 // Edge Mesh',
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/40',
    icon: Zap,
    stats: { metric: 'Global Latency', value: '18ms', label: 'P99 roundtrip' },
  },
  {
    id: 'engine',
    title: 'Core Computing & Neural Pipeline',
    tech: 'Distributed Node.js Microservices + Async Workers',
    desc: 'High-throughput event-driven microservices handling asynchronous task queuing and intelligent payload compression.',
    badge: 'Layer 03 // Compute Core',
    color: 'from-amber-500 to-rose-500',
    borderColor: 'border-amber-500/40',
    icon: Server,
    stats: { metric: 'Throughput', value: '85k req/s', label: 'Zero drop rate' },
  },
  {
    id: 'database',
    title: 'Distributed Persistence & Cache',
    tech: 'PostgreSQL + Redis Sharding + Vector DB',
    desc: 'High-availability partitioned database with sub-millisecond memory caching and automated disaster failover.',
    badge: 'Layer 04 // State Vault',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/40',
    icon: Database,
    stats: { metric: 'Cache Hit Rate', value: '99.4%', label: 'Ultra fast read' },
  },
];

export default function TechLayerBreakdown() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isExploded, setIsExploded] = useState(true);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 backdrop-blur-2xl shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4" />
            <span>Interactive 3D Architectural Decomposition</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Exploded System Architecture
          </h3>
          <p className="text-sm text-stone-400 mt-1 max-w-xl">
            Click each layer or toggle the exploded 3D perspective to inspect individual component pipelines and telemetry metrics.
          </p>
        </div>

        <button
          onClick={() => setIsExploded(!isExploded)}
          className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-all flex items-center gap-2"
        >
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>{isExploded ? 'Collapse 3D Stack' : 'Explode 3D Stack'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
        {/* Left Interactive 3D Stack Visualization */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center min-h-[380px] perspective-[1000px] relative">
          <div className="w-full max-w-sm flex flex-col gap-4 relative py-6">
            {layersData.map((layer, index) => {
              const isSelected = activeLayer === index;
              const Icon = layer.icon;

              return (
                <motion.div
                  key={layer.id}
                  onClick={() => setActiveLayer(index)}
                  initial={false}
                  animate={{
                    transform: isExploded
                      ? `rotateX(40deg) rotateZ(-20deg) translateY(${(index - activeLayer) * 12}px) translateZ(${
                          isSelected ? 50 : 0
                        }px)`
                      : 'rotateX(0deg) rotateZ(0deg) translateY(0px) translateZ(0px)',
                    scale: isSelected ? 1.04 : 0.98,
                    opacity: isSelected ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`p-4 rounded-2xl cursor-pointer border transition-shadow duration-300 ${
                    isSelected
                      ? `bg-stone-800/95 ${layer.borderColor} shadow-[0_0_30px_rgba(124,58,237,0.3)]`
                      : 'bg-stone-950/80 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-xl bg-gradient-to-br ${layer.color} text-white shadow-md`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-stone-400 block">{layer.badge}</span>
                        <h4 className="text-sm font-bold text-white">{layer.title}</h4>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-cyan-400 font-semibold bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">
                      {layer.stats.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Detail Inspection HUD */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 rounded-2xl bg-stone-950/70 border border-stone-800 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${layersData[activeLayer].color}`}
              />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  {layersData[activeLayer].badge}
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  Stack Verified
                </span>
              </div>

              <h4 className="text-2xl font-bold text-white mb-2">
                {layersData[activeLayer].title}
              </h4>

              <div className="inline-block text-xs font-mono text-violet-300 bg-violet-950/50 border border-violet-800/40 px-2.5 py-1 rounded-lg mb-4">
                {layersData[activeLayer].tech}
              </div>

              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                {layersData[activeLayer].desc}
              </p>

              {/* Metric Card */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-stone-900/80 border border-stone-800">
                <div>
                  <div className="text-xs font-mono text-stone-400">
                    {layersData[activeLayer].stats.metric}
                  </div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-300 mt-1">
                    {layersData[activeLayer].stats.value}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400">Benchmark</div>
                  <div className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{layersData[activeLayer].stats.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
