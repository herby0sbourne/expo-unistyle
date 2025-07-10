import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { StyleSheet, UnistylesRuntime, withUnistyles } from "react-native-unistyles";

import { ThemeText } from "@/components/ThemeText";
import { SettingTile } from "@/components/SettingTile";

const StyledScrollView = withUnistyles(ScrollView);

const SettingsScreen = () => {
  const systemTheme = UnistylesRuntime.hasAdaptiveThemes;

  return (
    <StyledScrollView contentContainerStyle={styles.scrollView}>
      <ThemeText type="title">Appearance</ThemeText>
      <View style={styles.settingContainer}>
        <SettingTile
          settingName="Theme"
          settingValue="Light"
          description={systemTheme ? "System" : "User"}
          onPress={() => router.push("/(tabs)/settings/settings-theme")}
        />
        <SettingTile
          settingName="App accent"
          settingValue="Default"
          description={"Primary app color"}
          onPress={() => router.push("/(tabs)/settings/settings-accent")}
        />
      </View>
    </StyledScrollView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  scrollView: {
    flex: 1,
    marginTop: rt.insets.top + theme.gap(3),
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.gap(2),
  },
  settingContainer: {
    marginTop: theme.gap(4),
    gap: theme.gap(4),
  },
}));

export default SettingsScreen;
