import { Text, TextProps } from "react-native";
import React from "react";
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";

export type ThemedTextProps = TextProps &
  UnistylesVariants<typeof styles> & {
    bold?: boolean;
    dimmed?: boolean;
  };

export function ThemeText({ style, type, bold, dimmed, ...props }: ThemedTextProps) {
  styles.useVariants({ type, bold, dimmed });
  return <Text style={[styles.textColor, styles.textType, style]} {...props} />;
}

const styles = StyleSheet.create((theme) => ({
  textColor: {
    color: theme.colors.typography,
  },
  textType: {
    variants: {
      type: {
        default: {
          fontSize: 16,
          lineHeight: 24,
        },
        title: {
          fontSize: 32,
          fontWeight: "bold",
          lineHeight: 32,
        },
        subtitle: {
          fontSize: 20,
        },
        link: {
          lineHeight: 30,
          fontSize: 16,
          color: "#0a7ea4",
        },
      },
      bold: {
        true: {
          fontWeight: "bold",
        },
      },
      dimmed: {
        true: {
          color: theme.colors.tint,
        },
      },
    },
  },

  // textColor: (lightColor?: string, darkColor?: string) => ({
  //   color: rt.colorScheme === "dark" ? darkColor : lightColor,
  // }),
}));
