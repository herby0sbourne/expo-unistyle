import { ScrollView } from "react-native";
import { ThemeText } from "@/components/ThemeText";
import { StyleSheet } from "react-native-unistyles";

const SettingsAccentScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemeText type="title">Change accent</ThemeText>
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

export default SettingsAccentScreen;
