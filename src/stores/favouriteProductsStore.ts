import { create } from "zustand";
import type { productType } from "../types/productType";

interface FavoriteProductsStore {
  products: productType[];
  likeProduct: (product: productType) => void;
  disLikeProduct: (id: string) => void;
}

const useFavoriteProducts = create<FavoriteProductsStore>((set) => ({
  products: [],
  likeProduct: (product) =>
    set((state) => {
      const isAlreadyFavorite = state.products.some(
        (p) => p._id === product._id
      );

      if (isAlreadyFavorite) {
        return state;
      }

      return {
        products: [...state.products, { ...product, isFavorite: true }],
      };
    }),
  disLikeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    })),
}));
export default useFavoriteProducts;