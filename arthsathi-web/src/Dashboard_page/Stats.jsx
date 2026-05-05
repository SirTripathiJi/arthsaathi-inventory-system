import React from 'react';
import Card from './Card';

function Stats({ sales, profit, orders, customers }) {
  const statsData = [
    { label: 'Total Sales', value: `₹${sales}`, color: 'yellow' },
    { label: 'Profit', value: `₹${profit}`, color: 'green' },
    { label: 'Orders', value: orders, color: 'blue' },
    { label: 'Customers', value: customers, color: 'pink' },
  ];

  return (
    <div className="stats-grid">
      {statsData.map((stat, idx) => (
        <Card key={idx} className="stat-item" accentColor={stat.color}>
          <h4>{stat.label}</h4>
          <p className="stat-value">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}

export default Stats;
