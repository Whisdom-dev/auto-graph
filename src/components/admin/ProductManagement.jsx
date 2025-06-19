import React, { useState } from "react";

const initialProducts = [
  { id: 1, name: "Sample Product 1", price: 20 },
  { id: 2, name: "Sample Product 2", price: 35 },
];

const ProductManagement = () => {
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    setProducts([
      ...products,
      { id: Date.now(), name: form.name, price: parseFloat(form.price) },
    ]);
    setForm({ name: "", price: "" });
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({ name: product.name, price: product.price });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setProducts(products.map(p => p.id === editId ? { ...p, ...form, price: parseFloat(form.price) } : p));
    setEditId(null);
    setForm({ name: "", price: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Product Management</h2>
      <form onSubmit={editId ? handleUpdate : handleAdd} className="mb-4 flex gap-2">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
          {editId ? "Update" : "Add"}
        </button>
        {editId && (
          <button type="button" onClick={() => { setEditId(null); setForm({ name: "", price: "" }); }} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
        )}
      </form>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-2 py-1">{product.name}</td>
              <td className="border px-2 py-1">${product.price}</td>
              <td className="border px-2 py-1">
                <button onClick={() => handleEdit(product)} className="bg-yellow-400 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductManagement; 