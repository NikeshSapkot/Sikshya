import { createContext, useState } from 'react';

export const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({
    courses: {},
    achievements: []
  });

  const updateProgress = (courseId, value) => {
    setProgress(prev => ({
      ...prev,
      courses: {
        ...prev.courses,
        [courseId]: value
      }
    }));
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}