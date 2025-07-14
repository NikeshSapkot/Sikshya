import { useParams } from 'react-router-dom';
import courses from '../data/courses';
import { motion } from 'framer-motion';
import LoadingSpinner from '../Courses/LoadingSpinner';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">Course not found</h2>
      <p className="text-gray-600 mt-2">The requested course doesn't exist</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-8">
          <div className="text-6xl bg-gray-100 p-6 rounded-lg">
            {course.thumbnail}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-xl text-gray-600 mt-2">{course.description}</p>
            <div className="flex gap-4 mt-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {course.level}
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                {course.duration}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
            <div className="space-y-4">
              {course.modules.map((module, index) => (
                <motion.div 
                  key={module.id}
                  whileHover={{ x: 5 }}
                  className="border-l-4 border-indigo-500 pl-4 py-2"
                >
                  <h3 className="text-lg font-semibold">
                    Module {index + 1}: {module.title}
                  </h3>
                  <p className="text-gray-600">{module.description}</p>
                  <p className="text-sm text-gray-500 mt-1">{module.duration}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Resources</h2>
            {course.resources ? (
              <ul className="space-y-3">
                {course.resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-600 hover:underline"
                    >
                      {resource.type === 'video' ? '▶️' : '📄'}
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No additional resources yet</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}