import { COURSES } from "../../../data/about";
import { motion } from "framer-motion";

export default function CoursesTab() {
  return (
    <div
      id="courses"
      tabIndex={-1}
      style={{ scrollMarginTop: "72px" }}
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {COURSES.map((course) => (
        <motion.a
          key={course.name}
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-lightbg dark:bg-darkbg2 rounded-lg p-3 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-700"
        >
          <img
            src={course.badge}
            alt={`${course.name} badge`}
            className="w-20 h-20 mb-2 shadow-sm"
          />
          <div className="font-semibold text-center text-xs">{course.name}</div>
          <div className="text-[10px] text-gray-600 dark:text-gray-400 text-center">
            {course.platform} {course.year && `• ${course.year}`}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
