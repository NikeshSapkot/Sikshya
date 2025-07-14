import { motion } from 'framer-motion';

export default function AnimatedButton({ children, onClick }) {
  return (
    <motion.button
      className="btn btn-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}