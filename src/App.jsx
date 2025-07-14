// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoursesPage from './pages/Courses';
import CourseDetail from './pages/Courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;