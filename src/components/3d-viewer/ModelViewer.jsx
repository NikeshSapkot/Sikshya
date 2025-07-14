import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function ModelViewer({ children }) {
  return (
    <div className="model-viewer h-96 w-full bg-gray-100 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {children}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}