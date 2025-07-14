import { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function useModelLoader(url) {
  const [model, setModel] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loader = new GLTFLoader();
    
    loader.load(
      url,
      (gltf) => setModel(gltf.scene),
      (xhr) => setProgress((xhr.loaded / xhr.total) * 100),
      (err) => setError(err)
    );

    return () => loader.abort();
  }, [url]);

  return { model, error, progress };
}