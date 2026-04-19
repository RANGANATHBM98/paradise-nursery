import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Peace Lily", price: 20 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plant Shop</h2>
      {products.map((product) => (
        <div key={product.id} style={{ margin: "10px 0" }}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
