import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Layout from './components/Layout';
import CartPage from "./components/CartPage";
import Checkout from './components/Checkout';
import ConfirmationPage from "./components/ConfirmationPage";
import LoginPage from "./components/LoginPage";
import ForgotPassword from './components/ForgotPassword';
import { CartContext } from './components/CartContext';
import SignUp from './components/SignUp';
import { CartProvider } from "./components/CartContext";
import { AuthProvider, AuthContext } from "./components/AuthContext";
import 'swiper/css';
import 'swiper/css/navigation';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const CheckoutWrapper = () => {
  const { cart } = useContext(CartContext);
  return <Checkout cart={cart} />;
};


const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
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
</Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
