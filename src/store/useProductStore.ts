import { create } from "zustand";
import axios from "axios";

export type Product = {
  productId: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
};

type ProductStore = {
  products: Product[];
  fetchProducts: () => Promise<void>;
  deleteProduct: (id: string) => void;
  updateProduct: (updated: Product) => void;
  addProduct: (newProduct: Product) => void; 
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    const response = await axios.get("https://qbc9.liara.run/api/products");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: Product[] = response.data.map((item: any) => ({
      productId: item._id,
      title: item.title,
      price: item.price,
      description: item.description,
      imageUrl: item.imageUrl,
    }));
    set({ products: data });
  },

  deleteProduct: (id: string) => {
    set((state) => ({
      products: state.products.filter((p) => p.productId !== id),
    }));
  },

  updateProduct: (updated: Product) => {
    set((state) => ({
      products: state.products.map((p) =>
        p.productId === updated.productId ? updated : p
      ),
    }));
  },

  addProduct: (newProduct: Product) => {
    set((state) => ({
      products: [newProduct, ...state.products],
    }));
  },
}));
