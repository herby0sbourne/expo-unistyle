import { Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ThemeText } from "@/components/ThemeText";
import { router, useLocalSearchParams } from "expo-router";

import Button from "@/components/Button";
import ThemeView from "@/components/ThemeView";
import PlayerControls from "@/components/PlayerControls";

import { playlist } from "@/mocks";

const PlayerScreen = () => {
  const { songId } = useLocalSearchParams();

  const song = playlist.find((song) => song.id === +songId);

  if (!songId || !song) {
    return (
      <ThemeView>
        <ThemeText type={"title"}>Look for Inspiration?</ThemeText>
        <ThemeText type={"title"}>Pick a song from the list</ThemeText>
        <Button
          label={"Pick a song"}
          accent={"banana"}
          onPress={() => router.replace("/")}
        />
      </ThemeView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: song.imageUrl }} style={styles.image} />
      <ThemeText type="title">{song.title}</ThemeText>
      <ThemeText dimmed type={"subtitle"}>
        {song.genre}
      </ThemeText>
      <ThemeText>{song.duration}</ThemeText>
      <PlayerControls />
    </ScrollView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    gap: theme.gap(2),
    alignItems: "center",
    marginTop: rt.insets.top + theme.gap(3),
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: theme.gap(2),
  },
}));

export default PlayerScreen;
