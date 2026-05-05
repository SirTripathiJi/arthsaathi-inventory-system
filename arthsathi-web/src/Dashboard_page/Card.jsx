import React from 'react';

function Card(props) {
  return (
    <div className={"dash-card " + (props.className || "")}>
      <div className="card-content">
        {props.children}
      </div>
    </div>
  );
}

export default Card;