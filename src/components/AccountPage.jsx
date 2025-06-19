import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const mockUser = {
  username: "user",
  email: "user@example.com",
  // Add more fields as needed
};

const AccountPage = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Account</h2>
        <p className="mb-4">You must be logged in to view your account details.</p>
        <Link to="/login" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">Login</Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow mt-10">
      <h2 className="text-3xl font-bold mb-6 text-black">My Account</h2>
      <div className="mb-6">
        <div className="mb-2">
          <span className="font-semibold text-gray-700">Username:</span> {mockUser.username}
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-700">Email:</span> {mockUser.email}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-black">Order History</h3>
        <p className="text-gray-500">No orders yet. Your recent orders will appear here.</p>
      </div>
      <button
        onClick={() => { logout(); navigate("/login"); }}
        className="bg-black text-white px-6 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default AccountPage; 