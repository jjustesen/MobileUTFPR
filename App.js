import React from "react";
import Pages from "./src/pages";
import { Provider } from "./src/providers";

export default function App() {
  return (
    <Provider>
      <Pages />
    </Provider>
  );
}
