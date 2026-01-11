import { Text, View } from "react-native";

type TaskCardProps = {
  title: string;
  description: string;
};

export const TaskCard = ({ title, description }: TaskCardProps) => {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
      <Text className="text-base font-semibold text-slate-900">{title}</Text>
      <Text className="mt-2 text-sm text-slate-600">{description}</Text>
    </View>
  );
};
