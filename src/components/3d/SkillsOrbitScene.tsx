import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const TechNode = ({
  color,
  radius,
  speed,
  offset,
  size = 0.28,
}: {
  color: string;
  radius: number;
  speed: number;
  offset: number;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed + offset;
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(time) * radius;
      meshRef.current.position.z = Math.sin(time) * radius;
      meshRef.current.position.y = Math.sin(time * 2) * 0.45;
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.4}
        metalness={0.8}
        roughness={0.2}
        wireframe={false}
      />
    </mesh>
  );
};

const SkillsCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.2;
      coreRef.current.rotation.y += delta * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.25;
      ringRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
      <group>
        {/* Central Polyhedron */}
        <mesh ref={coreRef}>
          <dodecahedronGeometry args={[0.9, 0]} />
          <meshPhysicalMaterial
            color="#2e1065"
            emissive="#a855f7"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.85}
            transmission={0.3}
            wireframe
          />
        </mesh>

        {/* Orbit Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[1.9, 0.015, 16, 60]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
        </mesh>

        {/* Orbiting Tech Nodes */}
        <TechNode color="#00f0ff" radius={1.9} speed={0.8} offset={0} size={0.25} />
        <TechNode color="#a855f7" radius={1.9} speed={0.8} offset={Math.PI * 0.4} size={0.22} />
        <TechNode color="#38bdf8" radius={1.9} speed={0.8} offset={Math.PI * 0.8} size={0.26} />
        <TechNode color="#34d399" radius={1.9} speed={0.8} offset={Math.PI * 1.2} size={0.24} />
        <TechNode color="#fbbf24" radius={1.9} speed={0.8} offset={Math.PI * 1.6} size={0.2} />
      </group>
    </Float>
  );
};

export const SkillsOrbitScene = () => {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl glass-panel border border-purple-500/25 overflow-hidden flex items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute w-48 h-48 rounded-full bg-purple-600/20 blur-[60px] pointer-events-none" />
      <div className="absolute w-40 h-40 rounded-full bg-cyan-500/15 blur-[50px] pointer-events-none translate-x-8" />

      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} color="#0c0728" />
        <pointLight position={[4, 4, 3]} intensity={2.5} color="#a855f7" />
        <pointLight position={[-4, -3, -2]} intensity={3} color="#00f0ff" />

        <SkillsCore />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* HUD Label */}
      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1 rounded-lg glass-panel border border-purple-500/20 text-[10px] font-mono text-cyan-300">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>MERN Tech Orbit Core</span>
      </div>
    </div>
  );
};
