import React, { useContext } from "react";
import { myContext } from "../../Pages/Context/ContextProvider/ContextMain";

function Cart() {
  const { theme, cart, dispatch } = useContext(myContext);

  const removeFromCart = (product) => {
    dispatch({ type: "Remove", payload: product });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-wrap gap-4 p-4"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#999594",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      {cart.length > 0 ? (
        cart.map((item) => (
          <div
            className="card"
            key={item.id}
            style={{
              width: "18rem",
              backgroundColor: theme === "light" ? "white" : "#333",
              color: theme === "light" ? "black" : "white",
            }}
          >
            <img
              src={item.image}
              className="card-img-top"
              alt={item.title}
              style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title.slice(0, 30)}...</h5>
              <p className="fw-bold">${item.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2>Your cart is empty.</h2>
      )}
    </div>
  );
}

export default Cart;
