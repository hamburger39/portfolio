'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 2000

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#0ea5e9" />
    </points>
  )
}

function Scene() {
  return (
    <>
      <Stars radius={300} depth={60} count={20000} factor={7} fade speed={1} />
      <Particles />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#0ea5e9" intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
      <div className="relative z-10 text-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in drop-shadow-2xl">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-delay drop-shadow-lg">
          Frontend Developer
        </p>
      </div>
    </section>
  )
}

