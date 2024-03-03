import { create } from "zustand";

interface PageContentStore {
  content: any;
  fetch: (args?: any, options?: any) => Promise<any>;
  clear: () => any;
}

export const usePageContentStore = create<PageContentStore>((set) => ({
  content: {},
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ content: await response.json() });
  },
  clear: () => set({ content: {} }),
}));
