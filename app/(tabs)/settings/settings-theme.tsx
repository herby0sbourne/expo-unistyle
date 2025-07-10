import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import SettingOptionRadio from "@/components/SettingOptionRadio";
import ThemeColor from "@/components/ThemeColor";

const SettingThemeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SettingOptionRadio label="System" isSelected={false} onPess={() => {}} />
      <SettingOptionRadio label="User" isSelected={false} onPess={() => {}} />
      <View style={styles.row}>
        <ThemeColor label="light" onPress={() => {}} />
        <ThemeColor label="dark" onPress={() => {}} />
      </View>
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
  row: {
    justifyContent: "center",
    flexDirection: "row",
    gap: theme.gap(2),
  },
}));

export default SettingThemeScreen;
