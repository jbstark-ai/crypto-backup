import { create } from "zustand";

interface ProductDetailStore {
  product: any;
  fetch: (args?: any, options?: any) => Promise<any>;
  clear: () => any;
}

export const useProductDetailStore = create<ProductDetailStore>((set) => ({
  product: {},
  fetch: async (url, options = {}) => {
    const response = await fetch(url);
    set({ product: await response.json() });
  },
  clear: () => set({ product: {} }),
}));
