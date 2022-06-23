import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AulaProvider from "./aula";
import AuthProvider from "./auth";
import NavigationContext from "./navigation";
import ThemeContext from "./theme";

const queryClient = new QueryClient();
export const Provider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AulaProvider>
          <NavigationContext>
            <ThemeContext>{children}</ThemeContext>
          </NavigationContext>
        </AulaProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
