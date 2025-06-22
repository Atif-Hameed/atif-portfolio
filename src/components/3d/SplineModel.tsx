"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame,
  //  extend 
  } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";

// Extend Three.js with postprocessing
// extend({ EffectComposer, Bloom, Noise });

interface HeroModelProps {
  isBackground?: boolean;
}

function FloatingModel({ isBackground }: { isBackground?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);
  const [hovered, setHover] = useState(false);

  const particles = new Float32Array(500 * 3);
  for (let i = 0; i < particles.length; i += 3) {
    particles[i] = (Math.random() - 0.5) * 10;
    particles[i + 1] = (Math.random() - 0.5) * 10;
    particles[i + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!isBackground && meshRef.current) {
      meshRef.current.rotation.x = time * 0.15;
      meshRef.current.rotation.y = time * 0.1;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }

    if (!isBackground && torusRef.current) {
      torusRef.current.rotation.x = time * 0.1;
      torusRef.current.rotation.y = time * 0.15;
      torusRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.1);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.x = time * 0.05;
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  const position: [number, number, number] = isBackground ? [2, 0, 0] : [0, 0, 0];

  return (
    <group position={position}>
      {/* Only render the Sphere and Torus if it's NOT background mode */}
      {!isBackground && (
        <>
          {/* Main glowing sphere */}
          <Sphere
            args={[1, 64, 64]}
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
          >
            <MeshDistortMaterial
              color={hovered ? "#7c3aed" : "#4f46e5"}
              attach="material"
              distort={0.5}
              speed={3}
              roughness={0.1}
              metalness={0.8}
              clearcoat={1}
              clearcoatRoughness={0.2}
              emissive="#4f46e5"
              emissiveIntensity={hovered ? 0.5 : 0.2}
            />
          </Sphere>

          {/* Decorative torus knot */}
          <Torus ref={torusRef} args={[1.2, 0.3, 32, 64, Math.PI * 2]}>
            <meshStandardMaterial
              color="#a78bfa"
              transparent
              opacity={0.7}
              roughness={0.1}
              metalness={0.5}
              wireframe
            />
          </Torus>
        </>
      )}

      {/* Always render particles */}
      <Points ref={particlesRef} positions={particles}>
        <PointMaterial
          transparent
          color="#a78bfa"
          size={0.03}
          sizeAttenuation={true}
          fog={false}
        />
      </Points>
    </group>
  );
}


export default function HeroModel({ isBackground = false }: HeroModelProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`w-full h-full ${isBackground ? "absolute inset-0" : ""}`}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={isBackground ? { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } : {}}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a78bfa" />

        <Suspense fallback={null}>
          <FloatingModel isBackground={isBackground} />
        </Suspense>

        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
        </EffectComposer>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </motion.div>
  );
}