import { ThemeText } from "@/components/ThemeText";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemeText type="title">Settings</ThemeText>
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

export default SettingsScreen;
