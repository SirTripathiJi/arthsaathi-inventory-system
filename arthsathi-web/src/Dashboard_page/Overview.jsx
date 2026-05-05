import React from 'react';
import Card from './Card';

export default function Overview({ inventory = [], sales = [] }) {
  let totalRevenue = 0;
  let totalStock = 0;

  for (let i = 0; i < sales.length; i++) {
    totalRevenue += sales[i].total;
  }

  for (let i = 0; i < inventory.length; i++) {
    totalStock += inventory[i].qty;
  }

  return (
    <div className="dash-section">
      <div className="stats-grid">
        <Card>
          <h4>Total Sales</h4>
          <p className="stat-value">₹{totalRevenue}</p>
        </Card>

        <Card>
          <h4>Items in Stock</h4>
          <p className="stat-value">{totalStock}</p>
        </Card>

        <Card>
          <h4>Products</h4>
          <p className="stat-value">{inventory.length}</p>
        </Card>
      </div>
    </div>
  );
}