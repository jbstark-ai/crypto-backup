import { create } from "zustand";

export const usePageContentStore = create((set) => ({
  content: {},
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ content: await response.json() });
  },
  clear: () => set({ content: {} }),
}));
