import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import courses from '../../data/courses';

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <Link to={`/courses/${course.id}`} className="block h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">{course.thumbnail}</div>
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{course.duration}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    course.level === 'Beginner' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}