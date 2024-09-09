import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ProductPage from "./Pages/Product.jsx";
import ProfilePage from "./Pages/profile.jsx";
import DetailProductPage from "./Pages/detailProduct.jsx";
import DarkModeContexProvider from "./contex/DarkMode.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContexProvider>
      <RouterProvider router={router} />
    </DarkModeContexProvider>
  </StrictMode>
);
