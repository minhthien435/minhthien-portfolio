import logoImg from '../../assets/minhle-logo.jpg';

export default function BrandLogo({ className = 'w-8 h-8', showText = true }) {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* Basketball + ML Holographic Mark */}
      <div className={`relative ${className} rounded-xl overflow-hidden p-[1.5px] bg-gradient-to-tr from-violet-600 via-cyan-400 to-rose-500 shadow-[0_0_15px_rgba(6,182,212,0.35)] group-hover:scale-105 transition-transform duration-300`}>
        <img
          src={logoImg}
          alt="Minh Le Basketball Logo"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors font-sans">
              MINH LE
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-stone-400 tracking-wider uppercase -mt-0.5">
            Frontend Dev
          </span>
        </div>
      )}
    </div>
  );
}
