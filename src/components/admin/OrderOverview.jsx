import React, { useState } from "react";

const mockOrders = [
  { id: 101, customer: "John Doe", total: 59.99, status: "Pending" },
  { id: 102, customer: "Jane Smith", total: 120.5, status: "Shipped" },
];

const OrderOverview = () => {
  const [orders] = useState(mockOrders);

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-2 text-black">Order Overview</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1 text-black">Order ID</th>
            <th className="border border-gray-300 px-2 py-1 text-black">Customer</th>
            <th className="border border-gray-300 px-2 py-1 text-black">Total</th>
            <th className="border border-gray-300 px-2 py-1 text-black">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border border-gray-300 px-2 py-1">{order.id}</td>
              <td className="border border-gray-300 px-2 py-1">{order.customer}</td>
              <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">${order.total}</td>
              <td className="border border-gray-300 px-2 py-1">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default OrderOverview; 