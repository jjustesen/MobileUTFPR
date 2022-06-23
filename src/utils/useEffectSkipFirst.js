import { useRef, useEffect } from "react";

export function useEffectSkipFirst(fun, inputs = []) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (fun && typeof fun === "function") {
      fun();
    }
  }, inputs);
}
