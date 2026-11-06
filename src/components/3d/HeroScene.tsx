import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { QuantumCore } from './QuantumCore';
import { ParticleField } from './ParticleField';
import { SceneLighting } from './SceneLighting';
import { Layers, Rotate3d, Sparkles } from 'lucide-react';

const CanvasLoader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#030014]/60 backdrop-blur-sm z-20">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full border-2 border-t-cyan-400 border-r-purple-500 border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border border-purple-400/40 animate-pulse"></div>
      </div>
      <p className="mt-4 text-xs font-mono tracking-widest text-cyan-400/80 uppercase animate-pulse">
        Initializing 3D Reactor
      </p>
    </div>
  );
};

export const HeroScene = () => {
  const [wireframeMode, setWireframeMode] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[460px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center select-none">
      {/* Background glow behind 3D core */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-purple-600/20 blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-cyan-500/15 blur-[90px] pointer-events-none -z-10 translate-x-12 translate-y-8" />

      {/* 3D Canvas */}
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="cursor-grab active:cursor-grabbing"
          onPointerDown={() => setIsInteracting(true)}
          onPointerUp={() => setIsInteracting(false)}
        >
          <SceneLighting />
          <ParticleField count={600} />
          <QuantumCore isWireframe={wireframeMode} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.7}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.5}
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>

      {/* Floating 3D Control Pill */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-purple-500/30 text-[11px] font-mono text-slate-300 shadow-lg backdrop-blur-md">
        <span className="flex items-center gap-1.5 text-cyan-400">
          <Rotate3d className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Interactive 3D</span>
        </span>
        <span className="text-purple-400/60">•</span>
        <span className="hidden sm:inline text-slate-400">
          {isInteracting ? 'Orbiting reactor' : 'Drag to rotate'}
        </span>
        <span className="text-purple-400/60">•</span>
        <button
          type="button"
          onClick={() => setWireframeMode(!wireframeMode)}
          className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-all ${
            wireframeMode
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
              : 'hover:bg-purple-500/20 text-slate-300'
          }`}
          title="Toggle wireframe mode"
        >
          <Layers className="w-3 h-3" />
          <span>{wireframeMode ? 'Solid' : 'Wireframe'}</span>
        </button>
      </div>

      {/* Floating HUD status indicator in the top right corner */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full glass-panel border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
        <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
        <span>R3F v9 • Three.js 60FPS</span>
      </div>
    </div>
  );
};
