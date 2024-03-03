import { create } from "zustand";

export const useArticleStore = create((set) => ({
  articles: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url, options);
    set({ articles: await response.json() });
  },
  clear: () => set({ articles: [] }),
}));
