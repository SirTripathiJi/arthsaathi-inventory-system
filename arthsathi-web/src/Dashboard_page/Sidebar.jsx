import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar({ activeTab, setActiveTab }) {
  const tabs = ['Overview', 'Inventory', 'Billing', 'Transactions', 'Settings'];
  const navigate = useNavigate();
  const userString = localStorage.getItem("authUser");
  const user = userString ? JSON.parse(userString) : null;
  const handleSignOut = () => {
    localStorage.removeItem("authUser");
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>ArthSaathi</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {tabs.map(tab => (
            <li 
              key={tab} 
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <div className="shop-info">
          <h3>{user?.shopName || "My Store"}</h3>
          <p>{user?.username || "Admin"}</p>
        </div>
        <button className="btn sidebar-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
