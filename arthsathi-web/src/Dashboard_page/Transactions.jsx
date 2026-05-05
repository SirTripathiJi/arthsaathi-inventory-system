import React from 'react';
import Card from './Card';

function Transactions({ sales = [] }) {

  const history = [...sales].reverse();

  return (
    <div className="dash-section">
      <Card>

        <h3 className="mb-24">Sales History</h3>

        {/* if no sales */}
        {history.length === 0 ? (
          <p className="empty-state">No sales recorded yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="dash-table">

              <thead>
                <tr>
                  <th>Date</th>
                  <th>Bill #</th>
                  <th>Total Amount</th>
                </tr>
              </thead>

              <tbody>
                {history.map((sale) => {

                  const formattedDate = sale.date
                    ? new Date(sale.date).toLocaleString()
                    : '-';

                  return (
                    <tr key={sale.id}>
                      <td>{formattedDate}</td>
                      <td>#{sale.id}</td>
                      <td className="text-bold">₹{sale.total}</td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        )}

      </Card>
    </div>
  );
}

export default Transactions;