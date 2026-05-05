import React from 'react';
import Card from './Card';

function Stats(props) {
  const statsData = [
    {
      label: 'Total Sales',
      value: '₹' + props.sales,
      color: 'yellow'
    },
    {
      label: 'Profit',
      value: '₹' + props.profit,
      color: 'green'
    },
    {
      label: 'Orders',
      value: props.orders,
      color: 'blue'
    },
    {
      label: 'Customers',
      value: props.customers,
      color: 'pink'
    }
  ];

  return (
    <div className="stats-grid">
      {statsData.map(function (stat, index) {
        return (
          <Card key={index} className="stat-item">
            <h4>{stat.label}</h4>
            <p className="stat-value">{stat.value}</p>
          </Card>
        );
      })}
    </div>
  );
}

export default Stats;