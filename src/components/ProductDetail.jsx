import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import allProducts from "../data/ProductsData";
import { CartContext } from "../components/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <p className="text-center py-10">Product not found</p>;

  return (
    <div className="px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-red-600 mb-2">{product.price}</p>
          <p className="mb-4">Category: {product.category}</p>
          <p className="mb-4">This is a detailed description of the product.</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            ADD TO CART
          </button>
          <div className="mt-4">
            <Link to="/products" className="text-blue-600 underline">
              &larr; Back to Products
            </Link>
          </div>
        </div>
      </div>

      {/* Top Benefits Section */}
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center border-b">
        {[
          {
            icon: '🚚',
            title: 'FREE SHIPPING OVER 500€',
            desc: 'We ship worldwide with DHL Express, ensuring delivery within 4 days right to the customer’s doorstep.',
          },
          {
            icon: '💬',
            title: 'CUSTOMER SERVICE',
            desc: 'We are available from Monday to Friday to answer your questions.',
          },
          {
            icon: '🛡️',
            title: 'SECURE PAYMENT',
            desc: 'Your payment information is processed securely.',
          },
          {
            icon: '⭐',
            title: 'OVER 60 RENOWNED DESIGNER LABELS',
            desc: 'Featuring a curated collection of the world’s most innovative and artistic fashion designers.',
          },
        ].map((item, i) => (
          <div key={i}>
            <div className="text-2xl mb-2">{item.icon}</div>
            <h4 className="uppercase text-sm font-medium">{item.title}</h4>
            <p className="text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
