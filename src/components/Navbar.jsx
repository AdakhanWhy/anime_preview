import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMINLOGIN } from "../helpers/consts";

const Navbar = () => {
  const navigate = useNavigate();
  const { handleLogout, user } = useAuth();
  const {email} = user;

  const navLinkStyles = {
    textDecoration: 'none',
    color: 'yellow',
    fontSize: '1.2rem',
    fontWeight: '700'
  }

  return (
    <div
      style={{
        width: "95%",
        height: "10vh",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ff4655",
      }}
    >
      <div
        style={{
          width: "45%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/products">Products</NavLink>
        <NavLink style={navLinkStyles} to="/about">About Us</NavLink>
        <a style={navLinkStyles} target='_blanck' href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0">Suppor</a>
        {email === ADMINLOGIN ? (<NavLink style={navLinkStyles} to='/admin'>AdminPage</NavLink>) : (<></>)}
      </div>
      <div style={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <button onClick={() => navigate('/cart')} style={{ width: "15%", height: "5vh" }}>Cart</button>
        <input
          style={{ width: "50%", height: "5vh" }}
          type="text"
          placeholder="Search"
        />
        {user ? (
          <button
            onClick={() => handleLogout()}
            style={{ width: "25%", height: "5vh" }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            style={{ width: "25%", height: "5vh" }}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
