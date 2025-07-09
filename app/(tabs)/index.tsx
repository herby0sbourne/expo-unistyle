import { StyleSheet } from "react-native-unistyles";
import { ScrollView } from "react-native";
import { ThemeText } from "@/components/ThemeText";

export default function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemeText type="title">Playlist</ThemeText>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    marginTop: rt.insets.top,
    paddingHorizontal: theme.gap(2),
  },
}));
