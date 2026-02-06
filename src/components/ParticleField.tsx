import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Gradient from primary (indigo) to accent (cyan)
      const t = Math.random();
      colors[i3] = 0.4 + t * 0.2;     // R
      colors[i3 + 1] = 0.5 + t * 0.5;  // G
      colors[i3 + 2] = 0.9 + t * 0.1;  // B
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
      
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.001;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const ConnectionLines = () => {
  const linesRef = useRef<THREE.LineSegments>(null);
  const count = 100;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 6);
    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      positions[i6] = (Math.random() - 0.5) * 15;
      positions[i6 + 1] = (Math.random() - 0.5) * 15;
      positions[i6 + 2] = (Math.random() - 0.5) * 8;
      positions[i6 + 3] = positions[i6] + (Math.random() - 0.5) * 3;
      positions[i6 + 4] = positions[i6 + 1] + (Math.random() - 0.5) * 3;
      positions[i6 + 5] = positions[i6 + 2] + (Math.random() - 0.5) * 2;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count * 2}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#4f8bff" transparent opacity={0.15} />
    </lineSegments>
  );
};

export const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <ConnectionLines />
      </Canvas>
    </div>
  );
};
