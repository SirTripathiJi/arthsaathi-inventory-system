import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar(props) {
  const navigate = useNavigate();

  const tabs = ['Overview', 'Inventory', 'Billing', 'Transactions', 'Settings'];

  const userData = localStorage.getItem('authUser');
  let user = null;

  if (userData) {
    user = JSON.parse(userData);
  }

  const handleSignOut = () => {
    localStorage.removeItem('authUser');
    navigate('/login');
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>ArthSaathi</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {tabs.map(function (tab) {
            let isActive = props.activeTab === tab ? 'active' : '';

            return (
              <li
                key={tab}
                className={isActive}
                onClick={() => props.setActiveTab(tab)}
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <div className="shop-info">
          <h3>{user && user.shopName ? user.shopName : 'My Store'}</h3>
          <p>{user && user.username ? user.username : 'Admin'}</p>
        </div>

        <button className="btn sidebar-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;