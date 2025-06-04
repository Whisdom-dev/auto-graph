import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ConfirmationPage = () => {
  const { state } = useLocation();

  if (!state) {
    return <p className="text-center mt-10">No order found. Please return to the shop.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md p-8 rounded">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Thank you for your purchase!</h1>
      <p className="mb-2">Reference: <strong>{state.reference}</strong></p>
      <p className="mb-2">Email: {state.email}</p>
      <p className="mb-2">Address: {state.location}</p>
      <p className="mb-2">Delivery Fee: ₦{state.deliveryFee}</p>
      <p className="mb-2 font-bold">Grand Total: ₦{state.grandTotal.toFixed(2)}</p>
      <p className="mt-4 text-sm text-gray-500">Date: {state.date}</p>

      <Link to="/" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Back to Shop
      </Link>
    </div>
  );
};

export default ConfirmationPage;
