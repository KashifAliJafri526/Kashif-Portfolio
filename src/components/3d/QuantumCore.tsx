import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface QuantumCoreProps {
  isWireframe?: boolean;
}

export const QuantumCore = ({ isWireframe = false }: QuantumCoreProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const middleRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const satellitesGroupRef = useRef<THREE.Group>(null);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Satellites representing MERN stack components
  const satelliteColors = ['#00f0ff', '#a855f7', '#38bdf8', '#34d399'];

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const speedMultiplier = hovered ? 1.8 : 1.0;

    // Smooth mouse parallax on the main group
    if (groupRef.current) {
      const targetRotationY = state.pointer.x * 0.45;
      const targetRotationX = -state.pointer.y * 0.45;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
    }

    // Core pulsing & rotation
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.25 * speedMultiplier;
      coreRef.current.rotation.y += delta * 0.35 * speedMultiplier;
      
      // Gentle breathing scale
      const pulse = 1 + Math.sin(time * 2.2) * 0.04;
      const clickBoost = clicked ? 1.15 : 1;
      coreRef.current.scale.setScalar(pulse * clickBoost);
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x -= delta * 0.4 * speedMultiplier;
      innerCoreRef.current.rotation.z += delta * 0.3 * speedMultiplier;
    }

    // Gyro Rings differential rotations
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = time * 0.4 * speedMultiplier;
      outerRingRef.current.rotation.y = time * 0.25 * speedMultiplier;
    }

    if (middleRingRef.current) {
      middleRingRef.current.rotation.y = -time * 0.35 * speedMultiplier;
      middleRingRef.current.rotation.z = time * 0.3 * speedMultiplier;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = -time * 0.5 * speedMultiplier;
      innerRingRef.current.rotation.z = -time * 0.45 * speedMultiplier;
    }

    // Orbiting Satellites
    if (satellitesGroupRef.current) {
      satellitesGroupRef.current.rotation.y = time * 0.5 * speedMultiplier;
      satellitesGroupRef.current.rotation.z = Math.sin(time * 0.3) * 0.2;
    }

    // Reset click scale transition smoothly
    if (clicked) {
      setTimeout(() => setClicked(false), 200);
    }
  });

  return (
    <Float
      speed={2.2}
      rotationIntensity={0.6}
      floatIntensity={0.8}
      floatingRange={[-0.15, 0.15]}
    >
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(true)}
        scale={1.3}
      >
        {/* Central Core: Holographic Polyhedron */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshPhysicalMaterial
            roughness={0.12}
            metalness={0.88}
            transmission={0.4}
            thickness={1.2}
            color="#2e1065"
            emissive="#7c3aed"
            emissiveIntensity={hovered ? 0.9 : 0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            wireframe={isWireframe}
          />
        </mesh>

        {/* Inner Glowing Wireframe Matrix */}
        <mesh ref={innerCoreRef} scale={0.72}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            wireframe
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={1.2}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Innermost Light Source Node */}
        <mesh scale={0.25}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Gyro Ring 1 - Large Outer Ring (Electric Cyan) */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[2.0, 0.02, 16, 80]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={hovered ? 1.0 : 0.6}
            metalness={0.9}
            roughness={0.1}
            wireframe={isWireframe}
          />
        </mesh>

        {/* Gyro Ring 2 - Middle Ring (Electric Purple) */}
        <mesh ref={middleRingRef} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.65, 0.025, 16, 70]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#a855f7"
            emissiveIntensity={hovered ? 1.2 : 0.7}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* Gyro Ring 3 - Inner Ring (Deep Violet with dashed/segmented wireframe feel) */}
        <mesh ref={innerRingRef} rotation={[0, Math.PI / 3, Math.PI / 6]}>
          <torusGeometry args={[1.35, 0.018, 16, 60]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.2}
            wireframe
          />
        </mesh>

        {/* Orbiting MERN Satellites */}
        <group ref={satellitesGroupRef}>
          {satelliteColors.map((color, index) => {
            const angle = (index / satelliteColors.length) * Math.PI * 2;
            const distance = 2.45;
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            const y = Math.sin(angle * 2) * 0.4;

            return (
              <group key={index} position={[x, y, z]}>
                <mesh scale={0.09}>
                  <sphereGeometry args={[1, 16, 16]} />
                  <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={1.8}
                  />
                </mesh>
                {/* Orbiting mini-ring */}
                <mesh scale={0.18} rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[1, 0.05, 8, 24]} />
                  <meshBasicMaterial color={color} transparent opacity={0.6} />
                </mesh>
              </group>
            );
          })}
        </group>
      </group>
    </Float>
  );
};
