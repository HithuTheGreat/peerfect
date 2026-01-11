import { Text, View } from "react-native";
import type { Course } from "../data/courses";
import { ProgressPill } from "./ProgressPill";

type CourseCardProps = {
  course: Course;
  width: number;
  isActive?: boolean;
};

export const CourseCard = ({ course, width, isActive = false }: CourseCardProps) => {
  return (
    <View
      style={{ width }}
      className={`rounded-2xl border px-4 py-4 shadow-sm ${
        isActive ? "border-brand-200 bg-brand-50" : "border-slate-200 bg-white"
      }`}
    >
      <Text className="text-xs font-semibold uppercase tracking-wide text-brand-500">
        {course.theme}
      </Text>
      <Text className="mt-2 text-base font-semibold text-slate-900">
        {course.title}
      </Text>
      <Text className="mt-1 text-sm text-slate-500">
        {course.level} · {course.lessons} lessons
      </Text>
      <View className="mt-4">
        <ProgressPill progress={course.progress} />
      </View>
    </View>
  );
};
