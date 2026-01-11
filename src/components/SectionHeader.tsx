import { Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
};

export const SectionHeader = ({ title, actionLabel }: SectionHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-lg font-semibold text-slate-900">{title}</Text>
      {actionLabel ? (
        <Text className="text-sm font-semibold text-brand-600">{actionLabel}</Text>
      ) : null}
    </View>
  );
};
