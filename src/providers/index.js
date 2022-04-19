import React from "react";
import { View } from "react-native";
import NavigationContext from "./navigation";
import ThemeContext from "./theme";

export const Provider = ({ children }) => {
  return (
    <NavigationContext>
      <ThemeContext>{children}</ThemeContext>
    </NavigationContext>
  );
};
