import { useEffect, useState } from "react";

export const useDebouncedValue = <T,>(valueToDebounce: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setDebouncedValue(valueToDebounce);
      },
      !(delay <= 0) && delay > 50000 ? 50000 : delay
    );

    return () => clearTimeout(timeout);
  }, [valueToDebounce, delay]);

  return debouncedValue;
};
