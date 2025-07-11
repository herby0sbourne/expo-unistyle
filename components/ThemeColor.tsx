import { FC } from "react";
import { Pressable } from "react-native";
import { ScopedTheme, StyleSheet, UnistylesThemes } from "react-native-unistyles";
import { ThemeText } from "./ThemeText";

type ThemeColorProps = {
  label: keyof UnistylesThemes;
  onPress: VoidFunction;
};

const ThemeColor: FC<ThemeColorProps> = ({ label, onPress }) => {
  return (
    <ScopedTheme name={label}>
      <Pressable onPress={onPress} style={styles.container}>
        <ThemeText>{label}</ThemeText>
      </Pressable>
    </ScopedTheme>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    height: 80,
    borderRadius: theme.gap(2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.dimmed,
    // backgroundColor: rt.themeName,
    backgroundColor: theme.colors.background,
  },
}));
export default ThemeColor;
