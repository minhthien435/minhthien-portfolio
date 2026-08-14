import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Activity } from 'lucide-react';

export default function HlsVideoPlayer({
  src = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  fallbackMp4 = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  poster = "",
  title = "Architecture & Demo Reel",
  badge = "HLS 1080P 60FPS",
  className = ""
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [isHlsSupported, setIsHlsSupported] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance = null;

    if (Hls.isSupported() && src.endsWith('.m3u8')) {
      hlsInstance = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hlsInstance.loadSource(src);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsHlsSupported(true);
      });
      hlsInstance.on(Hls.Events.ERROR, (event, data) => {
        console.warn('HLS stream fallback triggering:', data);
        if (data.fatal) {
          video.src = fallbackMp4;
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Apple Safari HLS
      video.src = src;
    } else {
      video.src = fallbackMp4;
    }

    // Viewport IntersectionObserver to auto-play/pause on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.45 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setDuration(video.duration);
      }
      if (video.buffered.length > 0) {
        setBuffered((video.buffered.end(video.buffered.length - 1) / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
      observer.disconnect();
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [src, fallbackMp4]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (video && video.duration) {
      video.currentTime = pos * video.duration;
    }
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      className={`relative group rounded-3xl overflow-hidden bg-stone-950 border border-white/10 shadow-2xl transition-all duration-500 ${className}`}
    >
      {/* Ambient Dynamic Back-Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/30 via-cyan-500/30 to-rose-500/30 rounded-3xl blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Video Element */}
      <video
        ref={videoRef}
        playsInline
        muted={isMuted}
        loop
        poster={poster}
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
      />

      {/* Header Overlay Badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
          <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-wide">{title}</span>
        </div>
        <div className="bg-gradient-to-r from-violet-500/80 to-cyan-500/80 backdrop-blur-md text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
          {badge}
        </div>
      </div>

      {/* Glassmorphic Controls Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col gap-2 transition-all duration-300 z-20 ${
          showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {/* Scrubber Progress Bar */}
        <div
          onClick={handleSeek}
          className="relative w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer transition-all overflow-hidden"
        >
          {/* Buffer track */}
          <div
            className="absolute top-0 left-0 bottom-0 bg-white/30 rounded-full transition-all"
            style={{ width: `${buffered}%` }}
          />
          {/* Played track */}
          <div
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Buttons and Meta */}
        <div className="flex items-center justify-between text-white text-xs pt-1">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
            >
              {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-white" />}
            </button>
            <span className="font-mono text-stone-300 text-[11px]">
              {(progress * (duration / 100) || 0).toFixed(0)}s / {(duration || 0).toFixed(0)}s
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              LIVE HLS STREAM
            </div>
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
            >
              <Maximize className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
