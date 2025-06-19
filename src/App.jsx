import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";

import CartPage from "./components/CartPage";
import Checkout from './components/Checkout';
import ConfirmationPage from "./components/ConfirmationPage";
import LoginPage from "./components/LoginPage";
import ForgotPassword from './components/ForgotPassword';
import { CartContext } from './components/CartContext';
import SignUp from './components/SignUp';
import { AuthProvider, AuthContext } from "./components/AuthContext";
import 'swiper/css';
import 'swiper/css/navigation';
import AdminPage from "./components/AdminPage";
import AboutUs from "./components/AboutUs";
import HelpCenter from "./components/HelpCenter";
import AccountPage from "./components/AccountPage";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const CheckoutWrapper = () => {
  const { cart } = useContext(CartContext);
  return <Checkout cart={cart} />;
};

const AdminRoute = ({ element }) => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);
  return isAuthenticated && isAdmin ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
          <Route path="/checkout" element={<PrivateRoute element={<CheckoutWrapper />} />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminRoute element={<AdminPage />} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
