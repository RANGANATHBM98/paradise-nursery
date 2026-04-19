import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="overlay">
        <h1>🌿 Paradise Nursery</h1>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={() => alert("Welcome to Paradise Nursery!")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
