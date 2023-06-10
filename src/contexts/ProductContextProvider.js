import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../FireProducts';

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const productsCollectionRef = collection(db, 'products');


  async function addProduct(obj) {
    await addDoc(productsCollectionRef, obj);
  }

  async function getProducts() {
    const data = await getDocs(productsCollectionRef);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data.docs.map(doc => ({...doc.data(), id: doc.id}))
    });
  }

  async function getOneProduct(id){
    const productDocRef = doc(db, 'products', id);
    const data = await getDoc(productDocRef);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data.data(),
    });
  }

  async function editProduct(id, newObj){
    const productDocRef = doc(db, 'products', id)
    await updateDoc(productDocRef, newObj);
  }

  async function deleteProduct(id){
    const productDocRef = doc(db, 'products', id);
    await deleteDoc(productDocRef);
  }

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    deleteProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
