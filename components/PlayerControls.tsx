import { Pressable, View } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { useStore } from "@/store";

type IconProps = {
  name: React.ComponentProps<typeof FontAwesome6>;
  color?: string;
  size?: number;
};

function Icon(props: IconProps) {
  return <FontAwesome6 {...props} />;
}

export default function PlayerControls() {
  const { preferredAccent } = useStore();
  const { theme } = useUnistyles();

  const accent = theme.colors.accents[preferredAccent];

  return (
    <View style={styles.actions}>
      <Pressable>
        <Icon name={"backward-fast"} size={40} color={accent} />
      </Pressable>
      <Pressable>
        <Icon name={"backward"} size={50} color={accent} />
      </Pressable>
      <Pressable>
        <Icon name={"circle-play"} size={100} color={accent} />
      </Pressable>
      <Pressable>
        <Icon name={"forward"} size={50} color={accent} />
      </Pressable>
      <Pressable>
        <Icon name={"forward-fast"} size={40} color={accent} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.gap(2),
    gap: theme.gap(2),
  },
}));
