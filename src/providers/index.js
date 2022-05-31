import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./auth";
import NavigationContext from "./navigation";
import ThemeContext from "./theme";

const queryClient = new QueryClient();
export const Provider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContext>
          <ThemeContext>{children}</ThemeContext>
        </NavigationContext>
      </AuthProvider>
    </QueryClientProvider>
  );
};
