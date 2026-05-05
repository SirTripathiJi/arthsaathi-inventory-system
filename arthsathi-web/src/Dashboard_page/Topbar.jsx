import React, { useState, useEffect } from 'react';

function Topbar({ activeTab }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "true") {
      setIsDark(true);
      document.body.classList.add("dark");
    } else {
      setIsDark(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);

    if (newDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", newDarkMode);
  };

  const getSubtitle = () => {
    switch (activeTab) {
      case "Overview":
        return "Live overview of your store performance.";

      case "Inventory":
        return "Manage your stock, categories, and pricing.";

      case "Billing":
        return "Create bills and record new sales.";

      case "Transactions":
        return "View history of all your sales.";

      case "Settings":
        return "Manage your account and app data.";

      default:
        return "";
    }
  };

  return (
    <header className="dashboard-header no-print">
      <div>
        <h1>{activeTab}</h1>
        <p>{getSubtitle()}</p>
      </div>

      <button
        className="theme-toggle"
        onClick={toggleDarkMode}
        title="Toggle Theme"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Topbar;