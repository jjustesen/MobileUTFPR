import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function NavigationContext({ children }) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
