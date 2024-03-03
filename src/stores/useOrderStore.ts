import { create } from "zustand";

interface OrderStore {
  orders: any[];
  fetch: (args?: any) => Promise<any>;
  clear: () => any;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  fetch: async (url, options = {}) => {
    const response = await fetch(url, options);
    set({ orders: await response.json() });
  },
  clear: () => set({ orders: [] }),
}));
