import { create } from "zustand";
type Product = {
  productId: string;
  title: string;
  
  price: string | number;
  description: string;
  imageUrl?: string;
};

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  deleteProduct: (id: string) => void;
  updateProduct: (updated: Product) => void;
  addProduct: (newProduct: Product) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.productId !== id),
    })),
  updateProduct: (updated) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.productId === updated.productId ? updated : p
      ),
    })),
  addProduct: (newProduct) =>
    set((state) => ({
      products: [newProduct, ...state.products],
    })),
}));
