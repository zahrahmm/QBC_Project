import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type CartItem = {
  brand: string;
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type Address = {
  address: string;
  city: string;
  country: string;
  postal: string;
};

type CartContextType = {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  address: Address;
  setAddress: (address: Address) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [address, setAddress] = useState<Address>({
    address: "",
    city: "",
    country: "",
    postal: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("pasargad");

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        address,
        setAddress,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Err");
  return context;
};
