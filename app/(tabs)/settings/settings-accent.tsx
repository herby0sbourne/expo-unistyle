import { useState } from "react";
import { router } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

import Button from "@/components/Button";
import { ThemeText } from "@/components/ThemeText";

const SettingsAccentScreen = () => {
  const { theme } = useUnistyles();
  const allAccent = theme.colors.accents;
  type Accent = keyof typeof allAccent;
  const [selectedAccent, setSelectedAccent] = useState<Accent>("banana");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.row}>
          {Object.entries(allAccent).map(([accentName, accentColor]) => {
            return (
              <Pressable
                key={accentName}
                style={styles.item}
                onPress={() => {
                  setSelectedAccent(accentName as keyof typeof allAccent);
                }}
              >
                <View
                  style={styles.box(accentColor, accentName === selectedAccent)}
                ></View>
                <ThemeText bold>{accentName}</ThemeText>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button label="Save" accent={selectedAccent} onPress={() => router.back()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    marginTop: rt.insets.top,
    paddingHorizontal: theme.gap(2),
  },
  scrollView: {
    flex: 1,
    gap: theme.gap(2),
    paddingTop: theme.gap(2),
    paddingHorizontal: theme.gap(2),
  },
  row: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: theme.gap(2),
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.gap(2),
    paddingVertical: theme.gap(2),
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.dimmed,
  },
  box: (accentColor: string, isSelected) => ({
    height: 40,
    width: 40,
    backgroundColor: accentColor,
    borderRadius: 10,
    borderWidth: isSelected ? 2 : 0,
    borderColor: theme.colors.tint,
  }),
  buttonContainer: {
    marginBottom: rt.insets.bottom,
    paddingHorizontal: theme.gap(2),
  },
}));

export default SettingsAccentScreen;
