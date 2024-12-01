import type { DependencyList } from "react";
import { useState, useEffect } from "react";

const useAsyncMemo = <T>(
  asyncFn: () => Promise<T>,
  deps: DependencyList,
): T | null => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    asyncFn().then(setValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return value;
};

export { useAsyncMemo };
