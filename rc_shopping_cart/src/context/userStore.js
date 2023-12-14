import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    id: "1",
    name: "John Doe",
    role: "user",
  },
  setUser: (newUser) => set({ user: newUser }),
}));

export default useUserStore;
