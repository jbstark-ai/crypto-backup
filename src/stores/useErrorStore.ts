import { create } from "zustand";

export const useErrorStore = create((set, get) => ({
  error: {},
  lastSync: "",
  add: (nextError) => {
    set({ error: nextError });
  },
}));
