import { create } from "zustand";

interface FilterState {
  category: string;
  price: string;
  setCategory: (category: string) => void;
  setPrice: (price: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: "",
  price: "",
  setCategory: (category) => set({ category }),
  setPrice: (price) => set({ price }),
  resetFilters: () => set({ category: "", price: "" }),
}));
