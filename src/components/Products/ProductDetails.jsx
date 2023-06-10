import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";
import { ADMINLOGIN } from "../../helpers/consts";

const ProductDetails = () => {
  const { oneProduct, getOneProduct, deleteProduct } = useProduct();
  const { addToCart } = useCart();
  const {
    user: { email },
  } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  const buttonStyles = {
    width: "10vw",
    height: "5vh",
    margin: "0 0.5rem",
    fontSize: "0.9rem",
    fontWeight: "700",
    border: "2px solid black",
    boxShadow: "2px 2px #ff4655",
  };

  return (
    <div
      style={{
        width: "95%",
        height: "100vh",
        margin: "0 auto",
        backgroundImage:
          "url(https://images8.alphacoders.com/118/thumb-1920-1183004.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2
        style={{
          padding: "10px",
          border: "3px solid black",
          display: "flex",
          width: "20%",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          borderRadius: "25px",
        }}
      >
        {oneProduct.name}
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "60%" }}>
          <iframe
            style={{ width: "100%", height: "60vh", margin: "15px auto" }}
            src={oneProduct.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p
            style={{
              border: "2px solid black",
              backgroundColor: "gray",
              padding: "20px",
            }}
          >
            {oneProduct.descr}
          </p>
        </div>
        <div style={{ width: "30%", margin: "20px" }}>
          <img
            style={{ width: "80%", height: "60vh", margin: "0 10px auto" }}
            src={oneProduct.image}
            alt=""
          />
          <h3 style={{ margin: "10px" }}>{oneProduct.name}</h3>
          <div style={{ margin: "10px", fontWeight: "700" }}>
            <p>Price: {oneProduct.price}</p>
            <p>Year: {oneProduct.amount}</p>
            <p>
              Add to cart:{" "}
              <button
                onClick={() => {
                  addToCart(oneProduct);
                }}
                style={{
                  width: "25px",
                  height: "25px",
                  border: "2px solid black",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                +
              </button>
            </p>
            <button
              onClick={() => navigate("/products")}
              style={{
                width: "10vw",
                height: "5vh",
                fontSize: "0.9rem",
                fontWeight: "700",
                border: "2px solid black",
                boxShadow: "2px 2px #2AEABB",
                marginTop: "2px",
              }}
            >
              Back to Products
            </button>
          </div>
          {email === ADMINLOGIN ? (
            <div>
              <button
                style={buttonStyles}
                onClick={() => {
                  navigate(`/edit/${id}`);
                  getOneProduct(id);
                }}
              >
                Edit
              </button>
              <button
                style={buttonStyles}
                onClick={() => {
                  navigate("/products");
                  deleteProduct(id);
                }}
              >
                Delete
              </button>
            </div>
          ) : (
            <p
              style={{
                width: "100%",
                fontSize: "1.5rem",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Happy Using !
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
