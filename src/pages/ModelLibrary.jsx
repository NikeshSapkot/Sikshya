import { useState } from 'react';
import ModelViewer from '../components/3d-viewer/ModelViewer';
import useModelLoader from '../hooks/useModelLoader';

const models = [
  { id: 1, name: 'DNA Structure', url: '/assets/models/dna.glb' },
  { id: 2, name: 'Human Heart', url: '/assets/models/heart.glb' }
];

export default function ModelLibrary() {
  const [selectedModel, setSelectedModel] = useState(models[0].url);
  const { model, error, progress } = useModelLoader(selectedModel);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">3D Model Library</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model.url)}
              className="w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left"
            >
              {model.name}
            </button>
          ))}
        </div>
        
        <div className="lg:col-span-2">
          {error ? (
            <div className="text-red-500">Error loading model: {error.message}</div>
          ) : progress < 100 ? (
            <div className="h-96 flex items-center justify-center">
              Loading... {Math.round(progress)}%
            </div>
          ) : (
            <ModelViewer>
              <primitive object={model} scale={1} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
            </ModelViewer>
          )}
        </div>
      </div>
    </div>
  );
}