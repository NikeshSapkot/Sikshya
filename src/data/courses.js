const courses = [
  {
    id: 'web-dev',
    title: 'Interactive Web Development',
    description: 'Master modern web development with React, Next.js, and Tailwind CSS',
    thumbnail: '🌐',
    duration: '8 weeks',
    level: 'Beginner',
    progress: 0,
    modules: [
      {
        id: 'react-basics',
        title: 'React Fundamentals',
        description: 'Learn components, props, and state management',
        duration: '2 hours',
        completed: false
      },
      {
        id: 'hooks',
        title: 'React Hooks',
        description: 'Master useState, useEffect, and custom hooks',
        duration: '3 hours',
        completed: false
      },
      {
        id: 'nextjs',
        title: 'Next.js Framework',
        description: 'Build server-rendered React applications',
        duration: '4 hours',
        completed: false
      }
    ],
    resources: [
      {
        type: 'video',
        title: 'Introduction to React',
        url: '#'
      },
      {
        type: 'article',
        title: 'React Documentation',
        url: 'https://reactjs.org/docs/getting-started.html'
      }
    ]
  },
  {
    id: '3d-stem',
    title: '3D STEM Visualizations',
    description: 'Learn scientific concepts through interactive 3D models',
    thumbnail: '🔬',
    duration: '6 weeks',
    level: 'Intermediate',
    progress: 0,
    modules: [
      {
        id: 'molecules',
        title: 'Molecular Structures',
        description: 'Explore organic and inorganic compounds',
        duration: '2.5 hours',
        completed: false
      },
      {
        id: 'physics',
        title: 'Physics Simulations',
        description: 'Understand forces and motion in 3D space',
        duration: '3 hours',
        completed: false
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science Fundamentals',
    description: 'Python, Pandas, and data visualization techniques',
    thumbnail: '📊',
    duration: '10 weeks',
    level: 'Beginner',
    progress: 0,
    modules: [
      {
        id: 'python-basics',
        title: 'Python for Data Science',
        description: 'Essential Python programming concepts',
        duration: '4 hours',
        completed: false
      },
      {
        id: 'pandas',
        title: 'Pandas DataFrames',
        description: 'Data manipulation and analysis',
        duration: '5 hours',
        completed: false
      }
    ]
  }
];

export default courses;