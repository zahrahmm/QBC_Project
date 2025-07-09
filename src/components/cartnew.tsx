import { useCartStore } from "../stores/cartstore";

const CartComponent = () => {
  const { cartItems, address, paymentMethod, setPaymentMethod } =
    useCartStore();

  return (
    <div>
      <h2>Cart Items: {cartItems.length}</h2>
      <p>Shipping to: {address.city}</p>
      <p>Payment Method: {paymentMethod}</p>
      <button onClick={() => setPaymentMethod("mellat")}>Change Payment</button>
    </div>
  );
};

export default CartComponent;
