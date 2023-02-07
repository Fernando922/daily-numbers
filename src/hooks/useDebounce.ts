import { useCallback, useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);

  const handleDebounce = useCallback(() => {
    const handleTimeout = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(handleTimeout);
    };
  }, [value, delay]);

  useEffect(handleDebounce, [value, delay]);

  return debounced;
};

// Usage: const debouncedValue = useDebounce(myState, 500);
