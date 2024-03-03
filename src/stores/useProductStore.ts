import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ products: await response.json() });
  },
  clear: () => set({ products: [] }),
}));
