import { create } from "zustand";

interface UserStore {
  users: any[];
  fetch: (args?: any, options?: any) => Promise<any>;
  clear: () => any;
}

export const useUserStore = create((set) => ({
  users: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ users: await response.json() });
  },
  clear: () => set({ users: [] }),
}));
