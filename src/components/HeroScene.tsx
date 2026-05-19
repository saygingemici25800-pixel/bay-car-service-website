import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group, MeshStandardMaterial } from 'three';

function Turbocharger() {
  const groupRef = useRef<Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? scrollY / height : 0;
      
      // Scroll-driven Y rotation with a subtle continuous idle spin
      groupRef.current.rotation.y = progress * Math.PI * 4 + scrollY * 0.002;
      groupRef.current.rotation.x = Math.sin(progress * Math.PI) * 0.2;
      groupRef.current.rotation.z = Math.cos(progress * Math.PI) * 0.1;
    }
  });

  const material = new MeshStandardMaterial({
    color: '#1A1D21',
    metalness: 0.85,
    roughness: 0.25
  });

  return (
    <group ref={groupRef}>
      {/* Merkez: CylinderGeometry (kompresör housing) */}
      <mesh material={material} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.5, 32]} />
      </mesh>
      
      {/* Yan: TorusGeometry (inlet/outlet flanges) */}
      <mesh material={material} position={[0, 0, 0.25]}>
        <torusGeometry args={[0.8, 0.15, 16, 32]} />
      </mesh>
      <mesh material={material} position={[0, 0, -0.25]}>
        <torusGeometry args={[0.8, 0.15, 16, 32]} />
      </mesh>
      
      {/* Üst: BoxGeometry (mount bracket) */}
      <mesh material={material} position={[0, 1.1, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.8]} />
      </mesh>

      {/* Ek parça */}
      <mesh material={material} position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
         <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] h-[70vh] z-0 hidden md:block" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        dpr={[1, 2]}
        shadows={false}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#003A87" />
        <directionalLight position={[-3, 2, -3]} intensity={0.6} color="#C97A2B" />
        
        <Turbocharger />
      </Canvas>
    </div>
  );
}
