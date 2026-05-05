import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Overview from './Overview';
import Inventory from './Inventory';
import Billing from './Billing';
import Transactions from './Transactions';
import Settings from './Settings';
import './Dashboard.css';
import { getData, saveData } from '../utils/storage';

function Dashboard() {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [activeTab, setActiveTab] = useState(localStorage.getItem('arth_tab') || 'Overview');
  const [inventory, setInventory] = useState(getData('arth_inv'));
  const [sales, setSales] = useState(getData('arth_sales'));

  useEffect(() => {
    const user = localStorage.getItem('authUser');

    if (!user) {
      navigate('/login');
    } else {
      setIsAuth(true);
    }

    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark');
    }

    return () => document.body.classList.remove('dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('arth_tab', activeTab);
    saveData('arth_inv', inventory);
    saveData('arth_sales', sales);
  }, [activeTab, inventory, sales]);

  if (!isAuth) return null;

  let content;

  if (activeTab === 'Inventory') {
    content = <Inventory inventory={inventory} setInventory={setInventory} />;
  } 
  else if (activeTab === 'Billing') {
    content = <Billing inventory={inventory} setInventory={setInventory} sales={sales} setSales={setSales} />;
  } 
  else if (activeTab === 'Transactions') {
    content = <Transactions sales={sales} setSales={setSales} />;
  } 
  else if (activeTab === 'Settings') {
    content = <Settings setInventory={setInventory} setSales={setSales} setActiveTab={setActiveTab} />;
  } 
  else {
    content = <Overview inventory={inventory} sales={sales} />;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="dashboard-main">
        <Topbar activeTab={activeTab} />
        {content}
      </main>
    </div>
  );
}

export default Dashboard;