import { create } from "zustand";
import axios from "axios";

interface BasketState {
  basket: any[];
  lastSync: string;
  sync: (args: any) => Promise<any>;
  add: (args: any) => any;
  clear: (args: any) => any;
  remove: (args: any) => any;
}

export const useBasketStore = create<BasketState>((set, get) => ({
  basket: [],
  lastSync: "",
  sync: async (url, options = {}) => {
    const response = await axios.post(url, options);
    set({ lastSync: response.data });
  },
  add: (item) => {
    const existingBasket = get().basket;
    const updatedBasket = existingBasket.map((i) => {
      if (i.id === item.id) {
        i.quantity += 1;
      }
      return i;
    });
    set({ basket: updatedBasket });
  },
  clear: () => set({ basket: [] }),
  remove: (item) => {
    const existingBasket = get().basket;
    const updatedBasket = existingBasket.filter((i) => i.id !== item.id);
    set({ basket: updatedBasket });
  },
}));
