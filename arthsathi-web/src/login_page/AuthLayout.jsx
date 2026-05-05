import React from 'react';
import './Login.css';

function AuthLayout(props) {

  return (
    <div className="auth-layout">
      <div className="auth-container">
        {props.children}
      </div>
    </div>
  );
}

export default AuthLayout;