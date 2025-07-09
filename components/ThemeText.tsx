import { Text, TextProps } from "react-native";
import React from "react";
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";

export type ThemedTextProps = TextProps & UnistylesVariants<typeof styles>;

export default function ThemeText({
  style,

  type,
  ...props
}: ThemedTextProps) {
  styles.useVariants({ type });
  return <Text style={[styles.textColor, styles.textType]} {...props} />;
}

const styles = StyleSheet.create((theme) => ({
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
          color: theme.colors.link,
        },
      },
    },
  },
  textColor: {
    color: theme.colors.typography,
  },

  // textColor: (lightColor?: string, darkColor?: string) => ({
  //   color: rt.colorScheme === "dark" ? darkColor : lightColor,
  // }),
}));
