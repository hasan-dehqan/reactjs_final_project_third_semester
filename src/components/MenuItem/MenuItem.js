import React from "react";
import "./menuItem.css"; 

const MenuItem = ({ data }) => {
  const { title, price, img, desc } = data;

  return (
    <div className="menu-item">
      <img src={img} alt={title} className="menu-item-img" />
      <div className="menu-item-info">
        <h3 className="menu-item-title">{title}</h3>
        <p className="menu-item-price">${price}</p>
        <p className="menu-item-desc">{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
