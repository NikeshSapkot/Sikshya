import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaCode, 
  FaAtom, 
  FaLaptopCode,
  FaChartLine,
  FaRobot,
  FaBrain,
  FaDatabase,
  FaShapes,
  FaCube,
  FaTrophy
} from 'react-icons/fa';
import { staggerContainer, fadeIn, slideIn, zoomIn } from '../lib/animationUtils';
import ProgressRing from '../components/ui/ProgressRing';

const featuredCourses = [
  {
    id: 1,
    title: "Interactive Web Development",
    description: "Master React, Next.js, and modern web tech",
    progress: 0,
    Icon: FaCode,
    color: "text-indigo-600"
  },
  {
    id: 2,
    title: "3D STEM Visualizations",
    description: "Learn science through interactive 3D models",
    progress: 0,
    Icon: FaAtom,
    color: "text-purple-600"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Build neural networks from scratch",
    progress: 0,
    Icon: FaRobot,
    color: "text-red-500"
  },
  {
    id: 4,
    title: "Data Science",
    description: "Python, Pandas, and data visualization",
    progress: 0,
    Icon: FaChartLine,
    color: "text-blue-500"
  },
  {
    id: 5,
    title: "Computer Science",
    description: "Algorithms and data structures",
    progress: 0,
    Icon: FaBrain,
    color: "text-green-500"
  },
  {
    id: 6,
    title: "Database Systems",
    description: "SQL, NoSQL, and ORMs",
    progress: 0,
    Icon: FaDatabase,
    color: "text-amber-500"
  }
];

const features = [
  {
    icon: <FaCube className="text-5xl" />,
    title: "Immersive Learning",
    description: "3D models and interactive labs",
    bg: "bg-gradient-to-br from-indigo-100 to-purple-100"
  },
  {
    icon: <FaLaptopCode className="text-5xl" />,
    title: "Real Coding",
    description: "Browser-based IDE with live feedback",
    bg: "bg-gradient-to-br from-blue-100 to-cyan-100"
  },
  {
    icon: <FaTrophy className="text-5xl" />,
    title: "Gamification",
    description: "Earn XP and unlock achievements",
    bg: "bg-gradient-to-br from-amber-100 to-yellow-100"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
          <motion.div 
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 20%)'
            }}
          />
        </div>

        <motion.div 
          className="relative z-10 text-center py-28 px-4 sm:px-6 lg:px-8"
          variants={zoomIn}
              >
                   <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            variants={zoomIn}
          >
          Sikshya
          </motion.h1>
          <motion.h1 
            className="text-5xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            variants={zoomIn}
          >
            Learn Without Limits
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            variants={zoomIn}
          >
            Master in-demand skills through interactive courses and hands-on projects
          </motion.p>
          <motion.div variants={zoomIn}>
           <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/courses')}
      className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
    >
      Get Started Free
    </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Courses */}
      <motion.section 
        id="courses"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={fadeIn}
      >
        <motion.div 
          className="text-center mb-16"
          variants={slideIn('up')}
        >
          <h2 className="text-3xl font-bold mb-4">Explore Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interactive learning paths designed by industry experts
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/courses/${course.id}`)}
              className="cursor-pointer group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className={`h-3 ${course.color.replace('text', 'bg')}`}></div>
                <div className="p-6">
                  <div className={`flex justify-center mb-6 ${course.color}`}>
                    <course.Icon className="text-5xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{course.description}</p>
                  <div className="flex justify-center">
                    <ProgressRing progress={course.progress} size={40} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={slideIn('up')}
          >
            <h2 className="text-3xl font-bold mb-4">Why Learn With Sikhyā?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The most engaging way to master new skills
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
              >
                <div className={`h-full ${feature.bg} rounded-2xl p-8 text-center`}>
                  <motion.div 
                    className="flex justify-center mb-6 text-indigo-600"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={slideIn('up')}
          >
            Ready to Transform Your Learning?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            variants={slideIn('up')}
          >
            Join thousands of students mastering new skills with our interactive platform
          </motion.p>
          <motion.div variants={slideIn('up')}>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-bold shadow-lg"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}