import { create } from "zustand";

export const useSearchStore = create((set) => ({
  currentSearch: "",
  results: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ currentSearch: "", results: await response.json() });
  },
  clear: () => set({ results: [] }),
}));
