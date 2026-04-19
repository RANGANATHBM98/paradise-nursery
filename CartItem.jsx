import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import Navbar from "./Navbar";

const CartItem = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} width="50" />
          <h4>{item.name}</h4>
          <p>${item.price}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Grand Total: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button onClick={() => window.location.reload()}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;
