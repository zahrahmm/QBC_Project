import { useCartStore } from "../stores/cartStore";

const CartComponent = () => {
  const {
    items,
    setItems,
    address,
    setAddress,
    paymentMethod,
    setPaymentMethod,
  } = useCartStore();

  return (
    <div>
      <h2>Cart Items: {items.length}</h2>
      <p>Shipping to: {address.city}</p>
      <p>Payment Method: {paymentMethod}</p>
      <button onClick={() => setPaymentMethod("mellat")}>Change Payment</button>
    </div>
  );
};

export default CartComponent;
