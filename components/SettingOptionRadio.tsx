import { FC } from "react";
import { Pressable, PressableStateCallbackType, Text, View } from "react-native";
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";
import { ThemeText } from "./ThemeText";

interface SettingOptionRadioProps extends UnistylesVariants<typeof styles> {
  label: string;
  onPess(): void;
}

const SettingOptionRadio: FC<SettingOptionRadioProps> = ({
  label,
  isSelected,
  onPess,
}) => {
  styles.useVariants({ isSelected });

  return (
    <Pressable onPress={onPess} style={styles.container}>
      <ThemeText type="subtitle">{label}</ThemeText>
      <View style={styles.radio}>
        {isSelected && <View style={styles.radioInner}></View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: (state: PressableStateCallbackType) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    borderRadius: theme.gap(1),
    padding: theme.gap(2),
    borderWidth: 1,
    borderColor: theme.colors.dimmed,
    opacity: state.pressed ? 0.75 : 1,
  }),
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    variants: {
      isSelected: {
        true: {
          borderColor: theme.colors.tint,
        },
        false: {
          borderColor: theme.colors.dimmed,
        },
      },
    },
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.tint,
  },
}));
export default SettingOptionRadio;
