import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ users: await response.json() });
  },
  clear: () => set({ users: [] }),
}));
