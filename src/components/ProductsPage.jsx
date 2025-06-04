import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import allProducts from "../data/ProductsData";
import { CartContext } from "../components/CartContext";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const ProductsPage = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      filter === "All" ? true : product.category === filter;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-4 py-10">
      <section>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 uppercase tracking-wide">
        All Products
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-6 gap-4">
        {["All", "Men", "Women"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full border ${
              filter === category ? "bg-black text-white" : "bg-white text-black"
            } hover:bg-black hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full max-w-md"
        />
      </div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="flex flex-col items-center text-center space-y-1 cursor-pointer  p-2 rounded"
            variants={itemVariants}
            whileHover="hover"
          >
            <Link to={`/product/${product.id}`} className="w-full">
              <div className="relative w-full">
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded uppercase">
                  New
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-semibold text-base mt-2">{product.name}</h3>
                <p className="text-sm text-gray-800">{product.price}</p>
              </div>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="bg-red-600 text-white px-4 py-1 rounded mt-1 hover:bg-red-700"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </motion.div>
      </section>
      <br></br>

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

export default ProductsPage;
