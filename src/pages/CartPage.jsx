import React, { useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";

const CartPage = () => {
  const { getFromCart, products, deleteFromCart } = useCart();
  useEffect(() => {
    getFromCart();
  }, []);

  let totalPrice = 0;
  products.forEach(item => totalPrice += item.price);

  const buttonStyles = {
    width: '8vw',
    height: '4vh', 
    margin: '0 0.5rem', 
    fontSize: '0.9rem', 
    fontWeight: '700', 
    border: '2px solid black', 
    boxShadow: '3px 3px #2AEABB',
  }

  return (
    <div
      style={{
        width: "95%",
        display: "flex",
        justifyContent: "space-around",
        margin: "0 auto",
        backgroundColor: "#303030",
      }}
    >
      <div
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => (
          <div
            style={{
              width: "20%",
              height: "30vh",
              margin: ".5rem",
              border: "2px solid black",
              boxShadow: "5px 5px #ff4655",
              backgroundColor: "#909090",
            }}
          >
            <div style={{ width: "90%", height: "60%", margin: "5px auto" }}>
              <img width="100%" height="100%" src={item.image} alt="" />
            </div>
            <div style={{ margin: "0 .5rem", fontWeight: "600" }}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button
                style={{
                  width: "5vw",
                  height: "3.5vh",
                  margin: "0 auto",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  border: "2px solid black",
                  boxShadow: "3px 3px #2AEABB",
                }}
                onClick={() => {
                  deleteFromCart(item.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "20%",
          height: "60vh",
          border: "3px solid black",
          margin: ".5rem",
          padding: '.5rem',
          lineHeight: '2',
          fontWeight: '700',
          fontSize: '1.4rem',
          color: 'white',
        }}
      >
        <h4 style={{ fontSize: "1.7rem", textAlign: "center" }}>
          Cart Information
        </h4>
        <p>Total Price:</p>
        <p>{totalPrice}</p>
        <p>Amount:</p>
        <p>{products.length}</p>
        <div>
            <button onClick={() => alert('Еще не готово!!!')} style={buttonStyles}>Buy</button>
            <button onClick={() => alert('Еще не готово!!!')} style={buttonStyles}>Delete All</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
