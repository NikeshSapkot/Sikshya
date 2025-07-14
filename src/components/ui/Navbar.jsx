import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      className="bg-white shadow-md p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">Sikhyā</Link>
        <div className="flex gap-6">
          <Link to="/courses" className="hover:text-indigo-600 transition">Courses</Link>
          <Link to="/playground" className="hover:text-indigo-600 transition">Playground</Link>
          <Link to="/models" className="hover:text-indigo-600 transition">3D Models</Link>
        </div>
      </div>
    </motion.nav>
  );
}