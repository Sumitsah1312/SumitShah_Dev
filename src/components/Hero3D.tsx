import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Rotating geometric core representing system architecture
function ArchitectureCore({ mousePos }: { mousePos: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerIcoRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Smooth subtle mouse rotation
      meshRef.current.rotation.y += delta * 0.25 + (mousePos.x * 0.2 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += delta * 0.15 + (-mousePos.y * 0.2 - meshRef.current.rotation.x) * 0.05;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.3;
      outerRingRef.current.rotation.x += delta * 0.1;
    }
    if (innerIcoRef.current) {
      innerIcoRef.current.rotation.y -= delta * 0.4;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Tech Core - Octahedron */}
      <mesh ref={innerIcoRef}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          emissive="#7c3aed"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Glowing Solid Core */}
      <mesh>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Outer Orbit Ring 1 (Microservice Ring) */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>

      {/* Outer Orbit Ring 2 */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#a78bfa" opacity={0.6} transparent />
      </mesh>

      {/* Orbiting Satellite Nodes (APIs / Databases) */}
      {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((angle, i) => (
        <group key={i} rotation={[0, angle, 0]}>
          <mesh position={[2.2, 0, 0]}>
            <boxGeometry args={[0.25, 0.25, 0.25]} />
            <meshStandardMaterial
              color={i === 0 ? '#38bdf8' : i === 1 ? '#c084fc' : '#34d399'}
              emissive={i === 0 ? '#0284c7' : i === 1 ? '#9333ea' : '#059669'}
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Particle field
function DataParticles({ count = 120 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = (Math.random() - 0.5) * 12;
      p[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// WebGL Fallback Component
function FallbackVisual() {
  return (
    <div className="w-full h-full min-h-[320px] flex items-center justify-center relative">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Animated CSS fallback orbital ring */}
        <div className="absolute inset-0 rounded-full border border-violet-500/30 animate-[spin_12s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-cyan-500/40 animate-[spin_8s_linear_infinite_reverse]" />
        <div className="absolute inset-12 rounded-full border border-indigo-500/20 animate-pulse" />
        
        {/* Center Tech Sphere */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] shadow-2xl shadow-violet-500/20 rotate-45 animate-[bounce_4s_easeInOut_infinite]">
          <div className="w-full h-full bg-[#0b0c10] rounded-[14px] flex items-center justify-center">
            <span className="text-2xl font-mono text-cyan-400 font-bold">&lt;.NET/&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple Error Boundary for WebGL canvas failures
class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function Hero3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLowPower, setIsLowPower] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsLowPower(true);
    }

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebGLSupported(!!gl);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  if (webGLSupported === false || isLowPower) {
    return <FallbackVisual />;
  }

  return (
    <div
      className="w-full h-full min-h-[350px] lg:min-h-[480px] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
      onPointerMove={handlePointerMove}
    >
      <WebGLErrorBoundary fallback={<FallbackVisual />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[5, -5, 5]} intensity={0.8} color="#06b6d4" />

          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
            <ArchitectureCore mousePos={mousePos} />
          </Float>

          <DataParticles count={90} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
