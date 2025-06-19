import React from "react";

const AboutUs = () => (
  <div className="p-8 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">About Autograph</h1>
    <p className="mb-4 text-lg">
      <strong>Autograph</strong> is more than just an online store—it's a destination for fashion-forward individuals who value quality, style, and a seamless shopping experience. Founded with a passion for making the latest trends accessible to everyone, we curate collections that inspire confidence and self-expression.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">Our Story</h2>
    <p className="mb-4">
      Born from a love of fashion and a desire to simplify shopping, Autograph brings together the best in clothing, accessories, and lifestyle essentials. Our team is dedicated to sourcing unique pieces and timeless classics, ensuring there's something for every taste and occasion.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">Our Values</h2>
    <ul className="list-disc pl-6 mb-4">
      <li className="mb-1"><strong>Quality First:</strong> We handpick every item for craftsmanship and durability.</li>
      <li className="mb-1"><strong>Customer-Centric:</strong> Your satisfaction is our top priority, from browsing to delivery and beyond.</li>
      <li className="mb-1"><strong>Inclusivity:</strong> Fashion is for everyone. We celebrate diversity in style and size.</li>
      <li className="mb-1"><strong>Innovation:</strong> We embrace technology to make your shopping experience smooth and enjoyable.</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2">Join the Autograph Community</h2>
    <p className="mb-6">
      Whether you're looking for the latest arrivals or timeless essentials, Autograph is your trusted partner in style. Thank you for being part of our journey!
    </p>
    <div className="bg-gray-100 p-4 rounded-lg text-center">
      <p className="mb-2">Have questions or want to collaborate?</p>
      <a href="mailto:support@autograph.com" className="text-blue-600 underline font-medium">Contact us at support@autograph.com</a>
    </div>
  </div>
);

export default AboutUs; 