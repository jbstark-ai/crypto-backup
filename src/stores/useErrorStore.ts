import { create } from "zustand";

interface ErrorStore {
  error: Object;
  lastSync: string;
  add: (args?: any) => any;
}

export const useErrorStore = create<ErrorStore>((set, get) => ({
  error: {},
  lastSync: "",
  add: (nextError: any) => {
    set({ error: nextError });
  },
}));
