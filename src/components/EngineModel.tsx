import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import type { Group } from 'three'

const MODEL_URL = '/models/engine.glb'

// Model EXT_meshopt_compression ile paketlendi. drei'nin useGLTF'i meshopt'u
// varsayılan destekler; decoder'ı yine de açıkça tanıtarak her ortamda garanti
// altına alıyoruz (ikinci arg=useDraco:false, üçüncü=useMeshopt:true).
type MeshoptCapableLoader = { setMeshoptDecoder: (decoder: unknown) => void }
const withMeshopt = (loader: MeshoptCapableLoader) => loader.setMeshoptDecoder(MeshoptDecoder)

// Hero'da anında görünsün diye modeli önden yükle.
useGLTF.preload(MODEL_URL, false, true, withMeshopt)

export default function EngineModel() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(MODEL_URL, false, true, withMeshopt)

  // Yavaş, sürekli Y-ekseni dönüşü (scroll'dan bağımsız).
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.12
  })

  // bbox ≈ 0.61 × 0.95 × 1.0; origin tabanda-ortada olduğundan dikeyde
  // merkeze çekip sahneyi dolduracak şekilde ölçekliyoruz.
  return (
    <group ref={groupRef} scale={1.6} position={[0, -0.78, 0]}>
      <primitive object={scene} />
    </group>
  )
}
