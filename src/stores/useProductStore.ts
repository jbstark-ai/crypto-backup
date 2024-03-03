import { create } from "zustand";

interface ProductStore {
  products: any[];
  fetch: (args?: any, options?: any) => Promise<any>;
  clear: () => any;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ products: await response.json() });
  },
  clear: () => set({ products: [] }),
}));
