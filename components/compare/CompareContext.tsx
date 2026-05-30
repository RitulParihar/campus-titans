"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CompareContextType {
  compareIds: string[];

  addToCompare: (id: string) => void;

  removeFromCompare: (id: string) => void;

  clearCompare: () => void;
}

const CompareContext =
  createContext<CompareContextType | null>(null);

export function CompareProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [compareIds, setCompareIds] = useState<string[]>([]);

  useEffect(() => {

    const stored =
      localStorage.getItem("compare-colleges");

    if (stored) {
      setCompareIds(JSON.parse(stored));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "compare-colleges",
      JSON.stringify(compareIds)
    );

  }, [compareIds]);

  const addToCompare = (id: string) => {

    setCompareIds((prev) => {

      if (prev.includes(id)) {
        return prev;
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [...prev, id];
    });
  };

  const removeFromCompare = (id: string) => {

    setCompareIds((prev) =>
      prev.filter((item) => item !== id)
    );
  };

  const clearCompare = () => {
    setCompareIds([]);
  };

  return (
    <CompareContext.Provider
      value={{
        compareIds,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {

  const context = useContext(CompareContext);

  if (!context) {
    throw new Error(
      "useCompare must be used inside CompareProvider"
    );
  }

  return context;
}