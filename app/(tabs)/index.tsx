import { ScrollView, View } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native-unistyles";

import SongTile from "@/components/SongTile";
import { ThemeText } from "@/components/ThemeText";

import { playlist } from "@/mocks";

export default function PlaylistScreen() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.header}>
            <ThemeText type="title">Playlist</ThemeText>
          </View>

          {playlist.map((song) => (
            <SongTile
              key={song.id}
              song={song}
              onPress={() => router.push(`/(tabs)/player/${song.id}`)}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    marginTop: rt.insets.top + theme.gap(3),
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    gap: theme.gap(3),
    paddingHorizontal: theme.gap(2),
    paddingBottom: rt.insets.bottom,
  },
  header: {
    paddingBottom: theme.gap(2),
  },
}));
// <StatusBar backgroundColor="green" />
