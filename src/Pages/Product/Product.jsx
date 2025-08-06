import React, { useContext } from "react";
import { myContext } from "../Context/ContextProvider/ContextMain";

function Product() {
  const { theme, products, dispatch } = useContext(myContext);

  const addToCart = (product) => {
    dispatch({ type: "Add", payload: product });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-wrap gap-3 p-4"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#999594",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      {products.map((item) => (
        <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: theme === "light" ? "white" : "#333",
            color: theme === "light" ? "black" : "white",
          }}
          key={item.id}
        >
          <img
            src={item.image}
            className="card-img-top"
            alt={item.title}
            style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title.slice(0, 30)}...</h5>
            <p className="card-text">{item.description.slice(0, 60)}...</p>
            <p className="fw-bold">${item.price}</p>
            <button className="btn btn-primary" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
