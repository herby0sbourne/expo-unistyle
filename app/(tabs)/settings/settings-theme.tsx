import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import SettingOptionRadio from "@/components/SettingOptionRadio";

const SettingThemeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SettingOptionRadio label="System" isSelected={false} onPess={() => {}} />
      <SettingOptionRadio label="User" isSelected={false} onPess={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    gap: theme.gap(2),
    paddingTop: theme.gap(2),
    paddingHorizontal: theme.gap(2),
  },
}));

export default SettingThemeScreen;
