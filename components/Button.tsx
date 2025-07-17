import { FC } from "react";
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";
import { useAnimatedVariantColor } from "react-native-unistyles/reanimated";
import { ThemeText } from "./ThemeText";
import { useStore } from "@/store";

interface ButtonProps extends UnistylesVariants<typeof styles> {
  label: string;

  onPress(): void;
}

const Button: FC<ButtonProps> = ({ label, onPress, accent }) => {
  const { preferredAccent } = useStore();
  styles.useVariants({ accent: accent ?? preferredAccent });

  const color = useAnimatedVariantColor(styles.buttonColor, "backgroundColor");
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(color.value, { duration: 500 }),
    };
  });

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Animated.View style={[animatedStyle, styles.button]}>
        <ThemeText bold>{label}</ThemeText>
      </Animated.View>
    </Pressable>
  );
};

export default Button;
const styles = StyleSheet.create((theme) => ({
  button: {
    width: "100%",
    padding: theme.gap(2),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.gap(1),
  },
  buttonColor: {
    variants: {
      accent: {
        banana: {
          backgroundColor: theme.colors.accents.banana,
        },
        pumpkin: {
          backgroundColor: theme.colors.accents.pumpkin,
        },
        apple: {
          backgroundColor: theme.colors.accents.apple,
        },
        grass: {
          backgroundColor: theme.colors.accents.grass,
        },
        storm: {
          backgroundColor: theme.colors.accents.storm,
        },
        default: {
          backgroundColor: theme.colors.accents.banana,
        },
      },
    },
  },
}));
