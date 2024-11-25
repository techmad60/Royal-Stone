import { create } from 'zustand';

interface UserState {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string }) => void;
  clearUser: () => void;
}

// Create and export the Zustand store
const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
