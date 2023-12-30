import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
import g from '../assets/github_shape.svg'
import { Mesh } from 'three'

function SphereMesh() {
  const texture = useTexture(g)
  const sphereRef = useRef<Mesh | null>(null)

  useFrame(() => {
    if (!sphereRef.current) return

    sphereRef.current.rotation.y += 0.02
  })

  return (
    <mesh rotation={[0, 0, 0]} ref={sphereRef}>
      <sphereGeometry args={[2.5, 64, 32]} />
      <meshStandardMaterial map={texture} roughness={0.5} fog />
    </mesh>
  )
}

function Sphere() {
  return (
    <div className="canvas">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera position={[0, 0, 15]} />
          <OrbitControls
            maxDistance={40}
            minDistance={6}
            enableRotate={false}
          />
          <ambientLight intensity={0.5} />
          <pointLight intensity={5000} position={[100, 100, 100]} />
          <SphereMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Sphere
