import { useState } from 'react';

export const useFilters = <T extends Record<string, unknown>>(
  initialFilters: T,
) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilter = <K extends string, V>(key: K, value: V) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
