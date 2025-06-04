import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import HeroImage from '../images/HeroImage.webp';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.webp';
import img3 from '../images/img3.webp';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.webp';
import img6 from '../images/img6.webp';
import img7 from '../images/img7.webp';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img17 from '../images/img17.webp';
import img18 from '../images/img18.jpg';
import img19 from '../images/img19.avif';
import img20 from '../images/img20.jpg';
import img21 from '../images/img21.webp';

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

const products = [
  { id: 1, name: "AITO T-SHIRT", price: "€85.00", image: img4 },
  { id: 2, name: "Sheer Knit T-Shirt in Cashmere Blend", price: "€360.00", image: img5 },
  { id: 3, name: "Long-Sleeve T-Shirt with Contrast Stitching", price: "€195.00", image: img6 },
  { id: 4, name: "Layered Hem T-Shirt", price: "€240.00", image: img7 },
  { id: 5, name: "Washed Cotton T-Shirt with Zipper Detail", price: "€280.00", image: img8 },
  { id: 6, name: "Sheer Knit T-Shirt in Cashmere Blend", price: "€418.00", image: img9 },
];

const womenProducts = [
  { id: 1, name: "Women's Relaxed Fit T-Shirt", price: "€110.00", image: img10 },
  { id: 2, name: "Soft Touch Crew Neck T-Shirt", price: "€75.00", image: img17 },
  { id: 3, name: "Oversized Linen T-Shirt", price: "€125.00", image: img18 },
  { id: 4, name: "V-Neck Ribbed T-Shirt", price: "€95.00", image: img19 },
  { id: 5, name: "Cropped Boxy T-Shirt", price: "€80.00", image: img20 },
  { id: 6, name: "Modal Blend Long T-Shirt", price: "€120.00", image: img21 },
];

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SUMMER SALE</h1>
          <p className="text-lg md:text-xl mb-6">ENJOY UP TO 75% OFF SITE WIDE</p>
          <Link to="/products">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-semibold transition duration-300">
              SHOP ALL
            </button>
          </Link>
        </div>
      </div>

      {/* Product Feature Section */}
      <div className="px-4 py-10">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Product Images */}
          <div className="flex-1">
            <img src={img9} alt="Smiley Socks" className="w-3/4 h-100 object-cover mb-4 rounded" />
            <div className="flex gap-2">
              <img src={img2} alt="Socks detail" className="w-1/5 h-20 object-cover rounded" />
              <img src={img3} alt="Socks detail" className="w-1/5 h-20 object-cover rounded" />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">SMILEYCORE 4-PACK CREW SOCKS</h2>
            <p className="text-gray-600 line-through">₦100,200.00</p>
            <p className="text-red-600 font-semibold text-lg mb-4">₦50,100.00</p>
            <p className="mb-4">
              Turn your essentials into a statement with the SmileyCore Crew Socks.
              Designed with durable cotton, these socks feature a stitched-in smile motif,
              and high-performance ventilation.
            </p>
            <ul className="mb-4 list-disc ml-5 text-gray-700">
              <li>Premium 80% cotton blend</li>
              <li>Cushioned sole</li>
              <li>Gym-tested arch support</li>
              <li>4-pair gift pack</li>
              <li>US 7–11.5 / UK 6–10.5 / EU 39–45</li>
            </ul>

            {/* Color Options */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">COLOR</h4>
              <div className="flex flex-wrap gap-2">
                {["White", "Black", "Gray", "White & brown", "White & black", "Black & Brown", "Gray & Black"].map(color => (
                  <button key={color} className="border px-3 py-1 rounded">{color}</button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">ONE SIZE</h4>
              <div className="border inline-block px-3 py-1 rounded">US 7-11.5</div>
            </div>

            {/* Add to Cart */}
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Men's T-Shirts */}
      <ProductGrid title="Men's T-Shirts" products={products} />

      {/* Women's T-Shirts */}
      <ProductGrid title="Women's T-Shirts" products={womenProducts} />

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
        <button className="bg-black text-white px-8 py-3 rounded-full uppercase hover:bg-gray-800 transition duration-300">
          View All
        </button>
      </Link>
    </div>
  </div>
);

export default HomePage;
