import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Loader from "./Components/Home/ShowProduct/CardLoader";

// Lazy loaded components
const Home = lazy(() => import("./Pages/Home"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails"));
const Signin = lazy(() => import("./Pages/Signin"));
const Login = lazy(() => import("./Pages/Login"));
const Cart = lazy(() => import("./Pages/Cart"));
const AdminLogin = lazy(() => import("./Pages/AdminLogin"));
const Profile = lazy(() => import("./Components/Home/Profile"));
const AdminPanel = lazy(() => import("./Components/Admin/AdminPanel"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const ActiveUser = lazy(() => import("./Components/Admin/ActiveUser"));
const AddProduct = lazy(() => import("./Components/Admin/AddProduct"));


function App() {
  return (
    <Router>
      <Navbar />
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/Activeuser" element={<ActiveUser />} />
          <Route path="/AddProduct" element={<AddProduct />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
