import React, { useState, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import allProducts from "../data/ProductsData";
import { CartContext } from "../components/CartContext";
import { Helmet } from "react-helmet";

const ProductsPage = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext);
  const [toast, setToast] = useState(null);
  const [page, setPage] = useState(1);
  const PRODUCTS_PER_PAGE = 8;

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`${product.name} added to cart!`);
    setTimeout(() => setToast(null), 2000);
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      filter === "All" ? true : product.category === filter;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <>
      <Helmet>
        <title>All Products | Your Shop Name</title>
        <meta name="description" content="Browse all products available in our shop. Filter by category, search, and add your favorite items to the cart!" />
      </Helmet>
      {toast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded shadow-lg z-50 transition-opacity">
          {toast}
        </div>
      )}
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
              aria-label="Search for products"
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedProducts.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-10">
                No products found.
              </div>
            ) : (
              paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center text-center space-y-1 cursor-pointer  p-2 rounded"
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
                    onClick={() => handleAddToCart(product)}
                    className="bg-white text-red-600 border  px-4 py-1 cursor-pointer rounded mt-1 hover:bg-red-200"
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            )}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`px-4 py-2 rounded border ${page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:bg-black hover:text-white transition'}`}
                aria-label="Previous page"
              >
                Previous
              </button>
              <span className="self-center">Page {page} of {totalPages}</span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={`px-4 py-2 rounded border ${page === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:bg-black hover:text-white transition'}`}
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          )}
        </section>
        <br />

        {/* Top Benefits Section */}
        <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center border-b">
          {[
            {
              icon: '🚚',
              title: 'FREE SHIPPING OVER 500€',
              desc: 'We ship worldwide with DHL Express, ensuring delivery within 4 days right to the customer\'s doorstep.',
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
              desc: 'Featuring a curated collection of the world\'s most innovative and artistic fashion designers.',
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
              <h4 className="uppercase text-sm font-medium">{item.title}</h4>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
