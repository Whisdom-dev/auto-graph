import React from "react";

const ProductCard = ({ name, price, image }) => (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-lg text-black">{name}</h4>
        <p className="text-red-600 font-semibold">{price}</p>
      </div>
    </div>
  );
  
  export default ProductCard;
  