import type { DependencyList } from "react";
import { useEffect, useRef } from "react";

const useDebounceEffect = (
  effect: () => void,
  delay: number,
  deps: DependencyList,
) => {
  const handlerRef = useRef<NodeJS.Timeout | null>(null);
  const effectRef = useRef(effect);

  effectRef.current = effect;

  useEffect(() => {
    if (handlerRef.current) {
      clearTimeout(handlerRef.current);
    }

    const handler = setTimeout(() => {
      effectRef.current?.();
    }, delay);

    handlerRef.current = handler;

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export { useDebounceEffect };
