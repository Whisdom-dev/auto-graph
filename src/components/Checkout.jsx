import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import PaystackPop from '@paystack/inline-js';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const warehouseCoords = { lat: 6.5244, lng: 3.3792 }; // Lagos

  const total = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );
  const grandTotal = total + Number(deliveryFee);

  const getUserLocation = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported.');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setDeliveryFee(calculateDeliveryFee(coords));
      },
      () => alert('Unable to get location. Please allow access.')
    );
  };

  const calculateDeliveryFee = (coords) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(coords.lat - warehouseCoords.lat);
    const dLng = toRad(coords.lng - warehouseCoords.lng);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(warehouseCoords.lat)) *
        Math.cos(toRad(coords.lat)) *
        Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    if (distance <= 5) return 1000;
    if (distance <= 20) return 2000;
    if (distance <= 50) return 3000;
    return 5000;
  };

  const handlePayment = () => {
    if (!email || !location) return alert('Fill in all fields.');

    setLoading(true);

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_7067a36d01f63ac225645aed3bc19a9fdc37d4de',
      amount: grandTotal * 100,
      email,
      onSuccess: (transaction) => {
        const orderDetails = {
          email,
          location,
          deliveryFee,
          grandTotal,
          cart: cartItems,
          reference: transaction.reference,
          date: new Date().toLocaleString(),
        };

        // Store in localStorage
        const existing = JSON.parse(localStorage.getItem('orders')) || [];
        localStorage.setItem('orders', JSON.stringify([...existing, orderDetails]));

        // Send EmailJS receipt
        emailjs.send(
          'service_t7ya43j',
          'template_bh5n96',
          {
            to_email: email,
            user_email: email,
            order_items: cartItems.map(item => `${item.name} (x${item.quantity}) - ₦${item.price}`).join(', '),
            delivery_fee: deliveryFee,
            grand_total: grandTotal,
            reference: transaction.reference,
          },
          'R4ZeARZh7BNIgCehL'
        );

        alert(`Payment Complete! Reference: ${transaction.reference}`);
        clearCart();
        navigate('/');
      },
      onCancel: () => {
        alert('Payment cancelled.');
        setLoading(false);
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-2xl rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>

      <div className="space-y-2 mb-4">
        <p className="text-lg text-gray-700">
          <strong>Subtotal:</strong> ₦{isNaN(total) ? '0.00' : total.toFixed(2)}
        </p>
        <p className="text-lg text-gray-700">
          <strong>Delivery Fee:</strong> ₦{deliveryFee}
        </p>
        <p className="text-xl font-semibold text-gray-900">
          <strong>Grand Total:</strong> ₦{isNaN(grandTotal) ? '0.00' : grandTotal.toFixed(2)}
        </p>
      </div>

      <button
        onClick={getUserLocation}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg mb-4 transition"
      >
        Estimate Delivery Fee
      </button>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Delivery address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handlePayment}
          disabled={loading || cartItems.length === 0}
          className={`w-full py-2 font-medium rounded-lg transition ${
            loading || cartItems.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
