import { create } from "zustand";

interface ArticleStore {
  articles: any[];
  fetch: (args?: any) => Promise<any>;
  clear: () => any;
}

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url, options);
    set({ articles: await response.json() });
  },
  clear: () => set({ articles: [] }),
}));
