import { create } from "zustand";
import type { productType } from "../types/productType";

type CartItem = productType & { quantity: number };

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: productType, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product, quantity) =>
    set((state) => {
      const existIndex = state.cartItems.findIndex(
        (item) => item._id === product._id
      );
      if (existIndex !== -1) {
        const updatedCart = [...state.cartItems];
        updatedCart[existIndex].quantity += quantity;
        return { cartItems: updatedCart };
      } else {
        return { cartItems: [...state.cartItems, { ...product, quantity }] };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item._id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;
