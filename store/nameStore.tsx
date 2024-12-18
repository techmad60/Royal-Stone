"use client";

import { create } from "zustand";
import { useEffect } from "react";

// Define an interface for the store state
interface NameStore {
  fullName: string;
  setFullName: (name: string) => void;
}

// Create your Zustand store
const useNameStore = create<NameStore>((set) => ({
  fullName: "", // Default value, will be updated in useEffect
  setFullName: (name) => {
    set({ fullName: name });
    if (typeof window !== "undefined") {
      localStorage.setItem("fullName", name); // Save to localStorage when it's updated
    }
  },
}));

// Create a hook to load the full name from localStorage
export const useLoadFullName = () => {
  const setFullName = useNameStore((state) => state.setFullName);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("fullName");
      if (storedName) {
        setFullName(storedName);
      }
    }
  }, [setFullName]);
};

export default useNameStore;
