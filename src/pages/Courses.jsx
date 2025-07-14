import { motion } from 'framer-motion';
import CourseCard from '../components/course/CourseCard';
import { fadeIn } from '../lib/animationUtils';

const courses = [
  { id: 1, title: 'React Fundamentals', progress: 35 },
  { id: 2, title: '3D Web Development', progress: 70 },
  { id: 3, title: 'Interactive Animations', progress: 15 }
];

export default function Courses() {
  return (
    <motion.div 
      className="container mx-auto p-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h1 className="text-3xl font-bold mb-8">Your Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </motion.div>
  );
}