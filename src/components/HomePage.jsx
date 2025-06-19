import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import HeroImage from '../images/HeroImage.webp';
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
import ProductGrid from './ProductGrid';

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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[80vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 drop-shadow-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-wide">Summer Sale</h1>
          <p className="text-lg md:text-2xl mb-6 font-medium tracking-wide">Enjoy up to 75% off site wide</p>
          <Link to="/products">
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 cursor-pointer rounded-full font-bold text-lg uppercase tracking-wider shadow-lg transition duration-300">
              Shop All
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Product Card */}
      <section className="max-w-5xl mx-auto -mt-16 mb-12 px-4">
        <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-8 p-8 border border-gray-200">
          {/* Product Images */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <img src={img9} alt="Smiley Socks" className="w-3/4 h-80 object-cover mb-4 rounded-lg shadow" />
            <div className="flex gap-2">
              <img src={img2} alt="Socks detail" className="w-16 h-16 object-cover rounded" />
              <img src={img3} alt="Socks detail" className="w-16 h-16 object-cover rounded" />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 text-black">Smileycore 4-Pack Crew Socks</h2>
            <p className="text-gray-400 line-through">₦100,200.00</p>
            <p className="text-red-600 font-bold text-xl mb-4">₦50,100.00</p>
            <p className="mb-4 text-gray-700">
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
              <h4 className="font-semibold mb-2 text-black">Color</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "White", "Black", "Gray", "White & brown", "White & black", "Black & Brown", "Gray & Black"
                ].map(color => (
                  <button key={color} className="border border-gray-300 px-3 py-1 rounded text-black bg-white hover:bg-red-50 transition">
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-black">One Size</h4>
              <div className="border border-gray-300 inline-block px-3 py-1 rounded text-black bg-white">US 7-11.5</div>
            </div>

            {/* Add to Cart */}
            <button className="bg-red-600 text-white px-8 py-2 cursor-pointer rounded-full hover:bg-red-700 font-semibold uppercase tracking-wide shadow transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* ProductGrid sections remain untouched */}
      <ProductGrid title="Men's T-Shirts" products={products} />
      <ProductGrid title="Women's T-Shirts" products={womenProducts} />

      {/* Top Benefits Section */}
      <section className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
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
              <div className="text-3xl mb-2 text-red-600">{item.icon}</div>
              <h4 className="uppercase text-base font-bold text-black">{item.title}</h4>
              <p className="text-sm mt-2 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
