import React from 'react';
import Card from './Card';

function Settings(props) {
  const handleReset = () => {
    const confirmReset = window.confirm(
      'Are you sure you want to delete all data? This cannot be undone.'
    );

    if (confirmReset) {
      localStorage.clear();
      props.setInventory([]);
      props.setSales([]);
      props.setActiveTab('Overview');
    }
  };

  return (
    <div className="dash-section">
      <Card className="mb-24">
        <h3 className="mb-16">Danger Zone</h3>
        <p className="mb-16 text-muted">
          Wipe all inventory and sales data from local storage.
        </p>
        <button className="btn reset-btn" onClick={handleReset}>
          Reset All Data
        </button>
      </Card>

      <Card>
        <h3 className="mb-16">Support & Contact</h3>
        <p><strong>Phone:</strong> +91 7066863550</p>
        <p><strong>Email:</strong> tripathiakshat2604@gmail.com</p>
      </Card>
    </div>
  );
}

export default Settings;