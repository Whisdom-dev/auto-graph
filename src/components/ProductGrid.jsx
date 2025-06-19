import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProductGrid = ({ title, products }) => (
  <div className="px-4 py-10">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 uppercase tracking-wide">
      {title}
    </h2>
    <div className="px-4 md:px-8">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="flex flex-col items-center text-center space-y-1"
            variants={itemVariants}
          >
            <div className="relative w-full">
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded uppercase">
                New
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-semibold text-base">{product.name}</h3>
              <p className="text-sm text-gray-800">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    <div className="text-center mt-10">
      <Link to="/products">
        <button className="bg-white text-red-500 border-2 font-bold px-8 py-3 cursor-pointer rounded-full uppercase hover:bg-red-200 transition duration-300">
          View All
        </button>
      </Link>
    </div>
  </div>
);

export default ProductGrid; 