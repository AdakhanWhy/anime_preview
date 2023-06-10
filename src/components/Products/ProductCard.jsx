import React from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const buttonStyles = {
  width: "10vw",
  height: "5vh",
  margin: "0 0.5rem",
  fontSize: "0.9rem",
  fontWeight: "700",
  border: "2px solid black",
  boxShadow: "4px 4px #ff4655",
};

const ProductCard = ({ item }) => {
  const { getOneProduct } = useProduct();
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "25%",
        height: "75vh",
        margin: "10px",
        border: "2px solid black",
        boxShadow: "10px 10px #2AEABB",
        backgroundColor: '#909090'
      }}
    >
      <div style={{ width: "90%", height: "70%", margin: "10px auto" }}>
        <img src={item.image} alt="" width="100%" height="100%" />
      </div>
      <h3 style={{margin: '0 20px'}}>{item.name}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <p>Year: {item.amount}</p>
        <p>Price: {item.price}</p>
      </div>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center',}}>
        <button
          style={buttonStyles}
          onClick={() => {
            getOneProduct(item.id);
            navigate(`/product/${item.id}`);
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
