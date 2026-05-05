import React from 'react';
import Card from './Card';

export default function Overview({ inventory = [], sales = [] }) {
  let totalRevenue = 0;
  let totalStock = 0;

  for (let i = 0; i < sales.length; i++) {
    totalRevenue = totalRevenue + sales[i].total;
  }

  for (let i = 0; i < inventory.length; i++) {
    totalStock = totalStock + inventory[i].qty;
  }

  let lowStockItems = [];

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].qty <= 5) {
      lowStockItems.push(inventory[i]);
    }
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

      {lowStockItems.length > 0 && (
        <Card>
          <h3 className="mb-16">
            ⚠️ Stock Alerts ({lowStockItems.length})
          </h3>

          <table className="dash-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {lowStockItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>
                    {item.qty === 0 ? (
                      <span className="badge-status badge-out">
                        Out of Stock
                      </span>
                    ) : (
                      <span className="badge-status badge-low">
                        Low Stock
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </Card>
      )}
    </div>
  );
}