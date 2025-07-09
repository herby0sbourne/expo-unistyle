import { ScrollView } from "react-native";
import { ThemeText } from "@/components/ThemeText";
import { StyleSheet } from "react-native-unistyles";

const SettingThemeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemeText type="title">SettingThemeScreen</ThemeText>
    </ScrollView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    marginTop: rt.insets.top,
    paddingHorizontal: theme.gap(2),
  },
}));

export default SettingThemeScreen;
