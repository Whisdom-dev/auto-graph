import React from "react";
import ProductManagement from "./admin/ProductManagement";
import OrderOverview from "./admin/OrderOverview";

const AdminPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductManagement />
        <OrderOverview />
      </div>
    </div>
  );
};

export default AdminPage; 