import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { JSON_API_PRODUCTS } from "../helpers/consts";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

  async function addToCart(obj) {
    await axios.post(JSON_API_PRODUCTS, obj);
  }

  async function getFromCart() {
    const { data } = await axios.get(JSON_API_PRODUCTS);
    setProducts(data);
  }

  async function deleteFromCart(id){
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getFromCart();
  }

  const values = {
    addToCart,
    products,
    getFromCart,
    deleteFromCart,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
