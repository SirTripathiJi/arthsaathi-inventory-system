import React, { useState } from 'react';
import Card from './Card';

export default function Billing({ inventory, setInventory, sales, setSales }) {
  const [cart, setCart] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [qty, setQty] = useState('');
  const [bill, setBill] = useState(null);

  const addItem = (e) => {
    e.preventDefault();

    if (!selectedId || qty <= 0) return;

    const product = inventory.find(item => item.id == selectedId);
    if (!product) return;

    const quantity = Number(qty);

    let alreadyAdded = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == product.id) {
        alreadyAdded += cart[i].qty;
      }
    }

    if (quantity + alreadyAdded > product.qty) {
      alert(`Only ${product.qty - alreadyAdded} items left`);
      return;
    }

    const newItem = {
      ...product,
      qty: quantity,
      itemTotal: product.sellPrice * quantity
    };

    setCart([...cart, newItem]);
    setSelectedId('');
    setQty('');
  };

  const generateInvoice = () => {
    if (cart.length === 0) return;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].itemTotal;
    }

    const newBill = {
      id: Date.now(),
      items: cart,
      total: total,
      date: new Date().toLocaleString()
    };

    const updatedInventory = inventory.map(item => {
      let soldQty = 0;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == item.id) {
          soldQty += cart[i].qty;
        }
      }

      if (soldQty > 0) {
        return {
          ...item,
          qty: Math.max(0, item.qty - soldQty)
        };
      }

      return item;
    });

    setSales([newBill, ...sales]);
    setInventory(updatedInventory);
    setBill(newBill);
    setCart([]);
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].itemTotal;
    }
    return total;
  };

  return (
    <div className="dash-section">
      <div className="grid-2col no-print">

        <Card>
          <h3>Add Items</h3>

          <form className="dash-form" onSubmit={addItem}>
            <select
              className="dash-input"
              value={selectedId}
              onChange={e => setSelectedId(e.target.value)}
            >
              <option value="">Select Product</option>
              {inventory.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name} - ₹{item.sellPrice} ({item.qty})
                </option>
              ))}
            </select>

            <input
              className="dash-input"
              type="number"
              placeholder="Qty"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />

            <button className="btn">Add to Bill</button>
          </form>

          <div className="mt-20">
            {cart.map((item, index) => (
              <div key={index} className="billing-item">
                <span>{item.name} x {item.qty}</span>
                <span>₹{item.itemTotal}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3>Bill Summary</h3>

          <div className="total-display-box mt-20">
            <h2 className="m-0">Total: ₹{getTotal()}</h2>
          </div>

          <button
            className="btn w-100 mt-20"
            onClick={generateInvoice}
          >
            Generate Invoice
          </button>
        </Card>
      </div>

      {bill && (
        <div className="bill-preview print-area mt-40">
          <Card>
            <h2 className="invoice-header">Invoice</h2>
            <p>{bill.date}</p>

            {bill.items.map((item, index) => (
              <div key={index} className="invoice-row">
                <span>{item.name} x {item.qty}</span>
                <span>₹{item.itemTotal}</span>
              </div>
            ))}

            <h3 className="text-right">Total: ₹{bill.total}</h3>

            <button
              className="btn no-print w-100 mt-20"
              onClick={() => window.print()}
            >
              Print
            </button>

            <button
              className="btn sidebar-btn no-print w-100 mt-16"
              onClick={() => setBill(null)}
            >
              Close
            </button>
          </Card>
        </div>
      )}
    </div>
  );
}