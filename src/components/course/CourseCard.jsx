import ProgressRing from '../ui/ProgressRing'
export default function CourseCard({ title, description, progress, icon }) {
  return (
    <div className="learning-card h-full p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
      <div className="mb-4">
        {icon || <div className="text-4xl text-indigo-600">📚</div>} {/* Fallback emoji */}
      </div>
      <h3 className="font-semibold text-lg mb-1 text-center">{title}</h3>
      <p className="text-gray-600 text-sm mb-3 text-center">{description}</p>
      <div className="mt-auto">
        <ProgressRing progress={progress} size={32} />
      </div>
    </div>
  );
}