import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

export const ParticleField = ({ count = 650 }: ParticleFieldProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate deterministic pseudo-random particle distribution in 3D volume
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const purpleColor = new THREE.Color('#a855f7');
    const cyanColor = new THREE.Color('#00f0ff');
    const blueColor = new THREE.Color('#38bdf8');
    const mixed = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Cylindrical/spherical spread across depth
      const radius = 4 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;

      // Color variation between purple, cyan and sky blue
      const r = Math.random();
      if (r < 0.45) {
        mixed.copy(purpleColor);
      } else if (r < 0.8) {
        mixed.copy(cyanColor);
      } else {
        mixed.copy(blueColor);
      }

      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Gentle cosmic drift
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;

      // Subtle mouse interaction
      const targetX = state.pointer.x * 0.2;
      const targetY = state.pointer.y * 0.2;
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, pointsRef.current.rotation.y + targetX * 0.05, 0.1);
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, pointsRef.current.rotation.x - targetY * 0.05, 0.1);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
