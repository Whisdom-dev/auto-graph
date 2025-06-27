import React from "react";
import { Link } from "react-router-dom";

const formatPrice = (price) => {
  // Remove non-numeric characters except dot and comma, then parse
  const num = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.'));
  return isNaN(num)
    ? price
    : num.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
};

const ProductCard = ({ product, addToCart }) => {
  return (
    <article className="flex flex-col items-center text-center space-y-1 cursor-pointer p-2 rounded" aria-label={product.name}>
      <Link to={`/product/${product.id}`} className="w-full" tabIndex={0} aria-label={`View details for ${product.name}`}>
        <div className="relative w-full">
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded uppercase">
            New
          </span>
          <img
            src={product.image}
            alt={`Product: ${product.name}`}
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h3 className="font-semibold text-base mt-2">{product.name}</h3>
          <p className="text-sm text-gray-800">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="bg-white text-red-600 border px-4 py-1 cursor-pointer rounded mt-1 hover:bg-red-200"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </article>
  );
};

export default ProductCard;
  