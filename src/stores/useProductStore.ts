
import { create } from "zustand";

type ProductStore = {
  selectedProductId: string | null;
  setSelectedProductId: (id: string) => void;
};

const useProductStore = create<ProductStore>((set) => ({
  selectedProductId: null,
  setSelectedProductId: (id) => set({ selectedProductId: id }),
}));

export default useProductStore;
