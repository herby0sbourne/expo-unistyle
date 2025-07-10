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
  textColor: {
    color: theme.colors.typography,
  },

  // textColor: (lightColor?: string, darkColor?: string) => ({
  //   color: rt.colorScheme === "dark" ? darkColor : lightColor,
  // }),
}));
