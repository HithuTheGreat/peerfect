import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { CourseCard } from "../components/CourseCard";
import { SectionHeader } from "../components/SectionHeader";
import { TaskCard } from "../components/TaskCard";
import { currentCourses, exploreCourses, focusTasks } from "../data/courses";
import { getGridColumns } from "../utils/layout";

export const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const columns = getGridColumns(width);
  const gutter = 16;
  const cardWidth = (width - gutter * (columns + 1)) / columns;

  return (
    <ScrollView className="flex-1 bg-slate-50" contentContainerClassName="pb-10">
      <View className="px-5 pt-6">
        <Text className="text-sm font-semibold uppercase tracking-wider text-brand-500">
          Welcome back
        </Text>
        <Text className="mt-2 text-2xl font-semibold text-slate-900">
          Your learning journey,
        </Text>
        <Text className="text-2xl font-semibold text-slate-900">
          organized for every stage.
        </Text>
        <Text className="mt-3 text-sm text-slate-600">
          Choose a course, track progress, and stay consistent with guided tasks designed for all ages.
        </Text>
      </View>

      <View className="mt-6 gap-4 px-5">
        <SectionHeader title="Current courses" actionLabel="View schedule" />
        <View className="flex-row flex-wrap" style={{ gap: gutter }}>
          {currentCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              width={cardWidth}
              isActive={index === 0}
            />
          ))}
        </View>
      </View>

      <View className="mt-8 gap-4 px-5">
        <SectionHeader title="Explore courses" actionLabel="See all" />
        <View className="flex-row flex-wrap" style={{ gap: gutter }}>
          {exploreCourses.map((course) => (
            <CourseCard key={course.id} course={course} width={cardWidth} />
          ))}
        </View>
      </View>

      <View className="mt-8 gap-4 px-5">
        <SectionHeader title="Focus tasks" actionLabel="Personalize" />
        <View className="gap-4">
          {focusTasks.map((task) => (
            <TaskCard key={task.id} title={task.title} description={task.description} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
