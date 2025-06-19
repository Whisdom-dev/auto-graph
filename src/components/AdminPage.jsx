import React from "react";
import ProductManagement from "./admin/ProductManagement";
import OrderOverview from "./admin/OrderOverview";

const AdminPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mb-8">
        <ProductManagement />
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  );
};

export default AdminPage; 