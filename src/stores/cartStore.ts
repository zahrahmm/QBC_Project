// cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  brand: string;
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type Address = {
  address: string;
  city: string;
  country: string;
  postal: string;
};

type CartState = {
  items: CartItem[];
  address: Address;
  paymentMethod: string;
  setItems: (items: CartItem[]) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  deleteItem: (id: number) => void;
  setAddress: (address: Address) => void;
  setPaymentMethod: (method: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      address: {
        address: "",
        city: "",
        country: "",
        postal: "",
      },
      paymentMethod: "pasargad",
      setItems: (items) => set({ items }),
      updateItemQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
      deleteItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      setAddress: (address) => set({ address }),
      setPaymentMethod: (method) => set({ paymentMethod: method }),
    }),
    { name: "cart-storage" }
  )
);
