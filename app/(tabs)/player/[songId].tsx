import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ThemeText } from "@/components/ThemeText";

const PlayerScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemeText type="title">Player</ThemeText>
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

export default PlayerScreen;
