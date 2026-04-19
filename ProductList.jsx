import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plantData = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Spider Plant", price: 12, img: "https://via.placeholder.com/100" },
    { id: 5, name: "ZZ Plant", price: 18, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Fern", price: 14, img: "https://via.placeholder.com/100" },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 10, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Tulip", price: 12, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Sunflower", price: 8, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Daisy", price: 9, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Lavender", price: 11, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Hibiscus", price: 13, img: "https://via.placeholder.com/100" },
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 7, img: "https://via.placeholder.com/100" },
    { id: 14, name: "Echeveria", price: 9, img: "https://via.placeholder.com/100" },
    { id: 15, name: "Jade Plant", price: 10, img: "https://via.placeholder.com/100" },
    { id: 16, name: "Agave", price: 11, img: "https://via.placeholder.com/100" },
    { id: 17, name: "Sedum", price: 8, img: "https://via.placeholder.com/100" },
    { id: 18, name: "Aloe", price: 9, img: "https://via.placeholder.com/100" },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <Navbar />
      <h2>Plants</h2>

      {Object.keys(plantData).map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plantData[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.img} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAdd(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
