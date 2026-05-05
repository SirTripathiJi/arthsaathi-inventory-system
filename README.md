# ArthSaathi

ArthSaathi is a browser-based inventory management, billing, and business analytics application built for small retail shops. It brings stock tracking, invoice generation, sales history, and performance monitoring into a single clean interface, designed for fast day-to-day operations.

## Overview

The application is structured around the core workflow of a small shop:

- add and manage inventory
- create bills quickly
- record completed sales
- review transaction history
  
The current implementation is frontend-first and works with browser storage, making it lightweight, fast, and easy to use without a complex backend setup.

## Key Features

### Inventory Management
- Add new products with product name, cost price, and selling price.
- View current stock in a searchable table.
- Track item status with clear labels such as Expired, Near Expiry, and Good.
- Edit or delete existing stock entries.

### Billing System
- Select products from inventory and add them to a bill.
- Enter quantity for each selected item.
- Apply discount and tax values.
- Record payment mode and amount paid.
- Generate a final bill from the built-in billing screen.

### Transactions and Sales History
- View a complete record of generated bills.
- Inspect bill number, date, total, paid amount, due amount, and payment status.
- Filter sales by date.

### Settings and Data Control
- Reset all inventory and sales data from the settings page.
- Access support and contact information from within the app.

```text
arthsaathi-web/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── Dashboard_page/
│   │   ├── Billing.jsx
│   │   ├── Card.jsx
│   │   ├── Dashboard.css
│   │   ├── Dashboard.jsx
│   │   ├── Insights.jsx
│   │   ├── Inventory.jsx
│   │   ├── Overview.jsx
│   │   ├── Settings.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Stats.jsx
│   │   ├── Topbar.jsx
│   │   └── Transactions.jsx
│   ├── landing_page/
│   │   ├── App.css
│   │   ├── app.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Highlights.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   └── Stats.jsx
│   ├── login_page/
│   │   ├── AuthLayout.jsx
│   │   ├── Login.css
│   │   └── Login.jsx
│   └── utils/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technology Stack

- React
- Vite
- CSS
- Browser local storage
- Client-side UI state and component composition

## Data Handling

ArthSaathi is designed as a local-first application. Inventory, billing, and sales-related data are stored in the browser, which allows the app to run quickly and remain usable without a server in the current implementation. The settings page includes a reset action that clears local data.


## Future Enhancement Opportunities

- WhatsApp connection for alerts and quick updates
- Voice commands 
- AI insights 
- Simple chatbot 
- Easy charts and reports to understand sales
- Barcode / SKU scanning for billing
- Different user roles (admin, staff)
- Cloud backup to keep data safe
- Customer and supplier management
- Basic sales prediction
- Multi-language support

## Author

Akshat Tripathi
