import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const SceneLighting = () => {
  const pointerLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (pointerLightRef.current) {
      // Lerp point light towards pointer coordinates in 3D space
      const targetX = (state.pointer.x * 5);
      const targetY = (state.pointer.y * 5);
      pointerLightRef.current.position.x = THREE.MathUtils.lerp(pointerLightRef.current.position.x, targetX, 0.1);
      pointerLightRef.current.position.y = THREE.MathUtils.lerp(pointerLightRef.current.position.y, targetY, 0.1);
    }
  });

  return (
    <>
      {/* Ambient Fill */}
      <ambientLight intensity={0.4} color="#0c0728" />

      {/* Primary Key Light - Vibrant Electric Violet */}
      <pointLight
        position={[6, 5, 4]}
        intensity={3.5}
        color="#a855f7"
        distance={20}
        decay={2}
      />

      {/* Secondary Rim Light - Neon Electric Cyan / Blue */}
      <pointLight
        position={[-6, -4, -3]}
        intensity={4}
        color="#00f0ff"
        distance={20}
        decay={2}
      />

      {/* Backlight / Depth Light - Deep Indigo */}
      <pointLight
        position={[0, -5, -6]}
        intensity={2.5}
        color="#6366f1"
        distance={18}
        decay={2}
      />

      {/* Dynamic Cursor-Tracking Light */}
      <pointLight
        ref={pointerLightRef}
        position={[0, 0, 3]}
        intensity={2.2}
        color="#38bdf8"
        distance={12}
        decay={2}
      />

      {/* Directional Accent */}
      <directionalLight position={[0, 8, 5]} intensity={0.8} color="#ffffff" />
    </>
  );
};
