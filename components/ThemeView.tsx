import React, { View, type ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type ThemedViewProps = ViewProps;

const ThemeView = ({ style, ...props }: ThemedViewProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      ThemeView
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
  },
}));

export default ThemeView;
