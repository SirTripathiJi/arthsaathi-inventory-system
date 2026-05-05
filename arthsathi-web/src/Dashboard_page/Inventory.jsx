import React, { useState } from 'react';
import Card from './Card';

export default function Inventory({ inventory, setInventory }) {
  const [formData, setFormData] = useState({
    name: '',
    qty: '',
    costPrice: '',
    sellPrice: ''
  });
  const [editId, setEditId] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();

    const item = {
      id: editId || Date.now(),
      name: formData.name,
      qty: Number(formData.qty),
      costPrice: Number(formData.costPrice),
      sellPrice: Number(formData.sellPrice)
    };

    let updatedList = [];

    if (editId) {
      updatedList = inventory.map((one) =>
        one.id === editId ? item : one
      );
    } else {
      updatedList = [...inventory, item];
    }

    setInventory(updatedList);
    setFormData({
      name: '',
      qty: '',
      costPrice: '',
      sellPrice: ''
    });
    setEditId(null);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setFormData({
      name: item.name,
      qty: item.qty,
      costPrice: item.costPrice,
      sellPrice: item.sellPrice
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this item?')) {
      setInventory(inventory.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="dash-section">
      <Card>
        <h3>{editId ? 'Edit Product' : 'Add New Product'}</h3>

        <form className="dash-form" onSubmit={handleSave}>
          <div className="grid-2col">
            <input
              className="dash-input"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <input
              className="dash-input"
              type="number"
              placeholder="Quantity"
              value={formData.qty}
              onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
              required
            />

            <input
              className="dash-input"
              type="number"
              placeholder="Cost Price (₹)"
              value={formData.costPrice}
              onChange={(e) => setFormData({ ...formData, costPrice: e.target.value })}
              required
            />

            <input
              className="dash-input"
              type="number"
              placeholder="Selling Price (₹)"
              value={formData.sellPrice}
              onChange={(e) => setFormData({ ...formData, sellPrice: e.target.value })}
              required
            />
          </div>

          <button className="btn" type="submit">
            {editId ? 'Save Changes' : 'Add Item'}
          </button>
        </form>
      </Card>

      <Card className="mt-40">
        <h3>Current Stock</h3>

        <table className="dash-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Cost Price</th>
              <th>Selling Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>₹{item.costPrice}</td>
                <td>₹{item.sellPrice}</td>
                <td>
                  <button className="text-btn edit" onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button className="text-btn danger" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}