import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Controls({ autoRotate = false }) {
  const { camera, gl } = useThree();
  return (
    <OrbitControls
      autoRotate={autoRotate}
      autoRotateSpeed={1}
      enableZoom={true}
      enablePan={true}
      camera={camera}
      gl={gl}
    />
  );
}