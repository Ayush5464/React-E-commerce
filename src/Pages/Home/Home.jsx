import React, { useContext } from "react";
import { myContext } from "../Context/ContextProvider/ContextMain";

function Home() {
  const { theme } = useContext(myContext);
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-wrap gap-3 vh-100"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#999594",
        color: theme === "light" ? "black" : "white",
      }}
    ></div>
  );
}

export default Home;
