import {create} from "zustand";

// Define an interface for the store state
interface NameStore {
    fullName: string;
    setFullName: (name: string) => void;
  }
  
// Create your Zustand store
const useNameStore = create<NameStore>((set) => ({
  fullName: localStorage.getItem("fullName") || "", // Load from localStorage if available
  setFullName: (name) => {
    set({ fullName: name });
    localStorage.setItem("fullName", name); // Save to localStorage when it's updated
  },
}));

export default useNameStore;

