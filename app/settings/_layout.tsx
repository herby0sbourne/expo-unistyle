import { Stack } from "expo-router";
import { useUnistyles } from "react-native-unistyles";

const SettingsLayout = () => {
  const { theme } = useUnistyles();
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="settings-theme"
        options={{
          title: "Change Theme",
          presentation: "modal",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="settings-accent"
        options={{
          title: "Change Accent",
          presentation: "modal",
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
