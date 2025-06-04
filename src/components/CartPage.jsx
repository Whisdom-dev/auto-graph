import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace(/[^\d.]/g, '')) * (item.quantity || 1),
    0
  );

  const formatter = new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h4 className="text-lg">{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: {item.price}</p>
                </div>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xl font-semibold">
            Total: {formatter.format(total)}
          </div>
        </div>
      )}

      {/* Checkout Section */}
      {cartItems.length > 0 && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md w-full lg:w-1/3 mx-auto">
          <h2 className="text-2xl font-semibold">Checkout</h2>
          <p className="mt-4 text-lg">
            Total: <span className="font-bold">{formatter.format(total)}</span>
          </p>
          <Link to="/checkout">
            <button
              disabled={cartItems.length === 0}
              className={`mt-4 w-full py-2 rounded-lg text-white ${
                cartItems.length === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-red-500 hover:bg-red-600'
              } transition-colors duration-300`}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
