import { create } from "zustand";

interface SearchStore {
  currentSearch: string;
  results: any[];
  fetch: (args?: any, options?: any) => Promise<any>;
  clear: () => any;
}

export const useSearchStore = create<SearchStore>((set) => ({
  currentSearch: "",
  results: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ currentSearch: "", results: await response.json() });
  },
  clear: () => set({ results: [] }),
}));
