import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ padding: "10px", background: "green", color: "white" }}>
      <h2>🌿 Paradise Nursery</h2>
      <div>
        <span>Home | Plants | Cart 🛒 ({totalCount})</span>
      </div>
    </nav>
  );
};

export default Navbar;
