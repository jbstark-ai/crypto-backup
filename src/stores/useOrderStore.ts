import { create } from "zustand";

export const useOrderStore = create((set) => ({
  orders: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url, options);
    set({ orders: await response.json() });
  },
  clear: () => set({ orders: [] }),
}));
