// src/pages/Courses/index.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import coursesData from '../../data/courses'; // Your course data

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <motion.div 
            key={course.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <Link to={`/courses/${course.id}`}>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}