import { FC } from "react";
import { View, Pressable, PressableStateCallbackType } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ThemeText } from "./ThemeText";

type SettingTileProps = {
  settingName: string;
  settingValue: string;
  description: string;
  onPress(): void;
  // press: () => void;
};

export const SettingTile: FC<SettingTileProps> = ({
  settingName,
  settingValue,
  description,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <ThemeText bold>{settingName}</ThemeText>
        <ThemeText dimmed>{description}</ThemeText>
      </View>
      <ThemeText>{settingValue}</ThemeText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: (state: PressableStateCallbackType) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: state.pressed ? 0.75 : 1,
  }),
});
