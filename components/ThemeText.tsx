import { Text, TextProps } from "react-native";
import React from "react";
import { StyleSheet } from "react-native-unistyles";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export default function ThemeText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...props
}: ThemedTextProps) {
  styles.useVariants({ type });
  return (
    <Text style={[styles.textColor(lightColor, darkColor), styles.textType]} {...props} />
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  textType: {
    variants: {
      type: {
        default: {
          fontSize: 16,
          lineHeight: 24,
        },
        defaultSemiBold: {
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "600",
        },
        title: {
          fontSize: 32,
          fontWeight: "bold",
          lineHeight: 32,
        },
        subtitle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        link: {
          lineHeight: 30,
          fontSize: 16,
          color: "#0a7ea4",
        },
      },
    },
  },
  textColor: (lightColor?: string, darkColor?: string) => ({
    color: rt.colorScheme === "dark" ? darkColor : lightColor,
  }),
}));
