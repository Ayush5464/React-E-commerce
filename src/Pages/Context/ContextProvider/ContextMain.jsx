import React, { createContext, useEffect, useReducer, useState } from "react";
import { ReducerHook } from "../Reducer/ReducerHook";
import axios from "axios";

export const myContext = createContext();

export default function ContextMain({ children }) {
  const [theme, setTheme] = useState("light");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, []);

  const [cart, dispatch] = useReducer(ReducerHook, []);

  return (
    <myContext.Provider value={{ theme, setTheme, products, cart, dispatch }}>
      {children}
    </myContext.Provider>
  );
}
