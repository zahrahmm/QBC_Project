// stores/cartstore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { productType } from "../types/productType";

type CartItem = productType & { quantity: number };

export type Address = {
  address: string;
  city: string;
  country: string;
  postal: string;
};

interface CartStore {
  cartItems: CartItem[];
  address: Address;
  paymentMethod: string;

  addToCart: (product: productType, quantity: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;

  setAddress: (address: Address) => void;
  setPaymentMethod: (method: string) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],
      address: { address: "", city: "", country: "", postal: "" },
      paymentMethod: "pasargad",

      addToCart: (product, quantity) => {
        if (quantity <= 0) return;
        set((state) => {
          const existing = state.cartItems.find(
            (item) => item._id === product._id
          );
          if (existing) {
            return {
              cartItems: state.cartItems.map((item) =>
                item._id === product._id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...product, quantity }],
            };
          }
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set((state) => ({
            cartItems: state.cartItems.filter((item) => item._id !== id),
          }));
        } else {
          set((state) => ({
            cartItems: state.cartItems.map((item) =>
              item._id === id ? { ...item, quantity } : item
            ),
          }));
        }
      },

      decreaseQuantity: (id) => {
        set((state) => {
          const item = state.cartItems.find((item) => item._id === id);
          if (!item) return {};
          if (item.quantity <= 1) {
            return {
              cartItems: state.cartItems.filter((item) => item._id !== id),
            };
          } else {
            return {
              cartItems: state.cartItems.map((item) =>
                item._id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          }
        });
      },

      removeFromCart: (id) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item._id !== id),
        }));
      },

      clearCart: () => set({ cartItems: [] }),

      setAddress: (address) => set({ address }),
      setPaymentMethod: (method) => set({ paymentMethod: method }),
    }),
    { name: "cart-storage" }
  )
);
