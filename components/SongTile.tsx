import React, { FC } from "react";
import { StyleSheet } from "react-native-unistyles";
import { View, Pressable, Image } from "react-native";

import { Song } from "@/types";
import { ThemeText } from "@/components/ThemeText";

type SongProps = {
  song: Song;
  onPress: () => void;
};

const SongTile: FC<SongProps> = ({ song, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: song.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <ThemeText bold>{song.title}</ThemeText>
        <ThemeText dimmed>{song.genre}</ThemeText>
      </View>
      <ThemeText>{song.duration}</ThemeText>
    </Pressable>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    gap: theme.gap(2),
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: theme.gap(2),
  },
  textContainer: {
    flex: 1,
  },
}));
export default SongTile;
