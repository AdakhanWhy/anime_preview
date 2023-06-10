import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";
import ProductsList from "./components/Products/ProductsList";
import ProductDetails from "./components/Products/ProductDetails";
import EditProductPage from "./pages/EditProductPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import { useAuth } from "./contexts/AuthContextProvider";
import { ADMINLOGIN } from "./helpers/consts";
import PrivacyPage from "./pages/PrivacyPage";

const PUBLIC_ROUTES = [
  { link: "/", element: <HomePage />, id: 1 },
  { link: "/*", element: <NotFoundPage />, id: 2 },
  { link: "/about", element: <AboutUsPage />, id: 3 },
  { link: "/products", element: <ProductsList />, id: 4 },
  { link: "/product/:id", element: <ProductDetails />, id: 5 },
  { link: "/auth", element: <AuthPage />, id: 6 },
  { link: "/cart", element: <CartPage />, id: 7 },
  { link: "/privacy", element: <PrivacyPage />, id: 8 },
];

const PRIVATE_ROUTES = [
  { link: "/admin", element: <AdminPage />, id: 9 },
  { link: "/edit/:id", element: <EditProductPage />, id: 10 },
];

const MainRoutes = () => {
  const {user} = useAuth()

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {user
        ? PRIVATE_ROUTES.map((item) => (
            <Route
              path={item.link}
              key={item.id}
              element={
                user.email === ADMINLOGIN ? item.element : <Navigate replace to="*" />
              }
            />
          ))
        : null}
    </Routes>
  );
};

export default MainRoutes;
