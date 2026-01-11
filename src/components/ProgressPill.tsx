import { Text, View } from "react-native";

type ProgressPillProps = {
  progress: number;
};

export const ProgressPill = ({ progress }: ProgressPillProps) => {
  const progressLabel = progress > 0 ? `${progress}% complete` : "Start course";
  const barWidth = `${Math.min(progress, 100)}%`;

  return (
    <View className="rounded-full bg-slate-100 px-3 py-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-xs font-semibold text-slate-700">{progressLabel}</Text>
        <Text className="text-xs font-semibold text-slate-500">{progress}%</Text>
      </View>
      <View className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <View className="h-full rounded-full bg-brand-500" style={{ width: barWidth }} />
      </View>
    </View>
  );
};
