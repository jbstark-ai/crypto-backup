import { create } from "zustand";

export const useProductDetailStore = create((set) => ({
  product: {},
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ product: await response.json() });
  },
  clear: () => set({ product: {} }),
}));
