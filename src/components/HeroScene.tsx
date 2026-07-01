import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, OrbitControls } from '@react-three/drei'
import EngineModel from './EngineModel'

function SceneLoader() {
  return (
    <Html center>
      <span className="whitespace-nowrap text-[11px] font-mono uppercase tracking-[0.2em] text-mute">
        Motor yükleniyor…
      </span>
    </Html>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 35, position: [2, 1, 3] }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      {/* Aksan mavisi dolgu ışığı — markanın accent rengi (#003A87) */}
      <directionalLight position={[-3, 2, -3]} intensity={0.6} color="#003A87" />

      <Suspense fallback={<SceneLoader />}>
        <EngineModel />
        {/* Metalik yüzeyde yansıma için studio HDRI. drei'nin preset="studio"
            kaynağının aynısı, fakat üçüncü-parti CDN yerine kendi domain'imizden
            servis ediliyor (güvenilirlik + hız + gizlilik). */}
        <Environment files="/hdri/studio_small_03_1k.hdr" />
      </Suspense>

      {/* Kullanıcı fareyle döndürebilir; zoom/pan kapalı, yavaş oto-dönüş açık */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
