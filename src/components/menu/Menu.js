import React from "react";
import { useSelector } from "react-redux";
import "./Menu.css";

export const Menu = () => {
  const menus = useSelector((state) => state.menu.menus);
  return (
    <div className="selection-center">
      {menus.map((menu) => (
        <article key={menu.id} className="menu-item">
          <img src={menu.img} alt={menu.title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{menu.title}</h4>
              <h4 className="price">تومان{menu.price}</h4>
            </header>
            <p className="item-text">{menu.desc}</p>
          </div>
        </article>
      ))}
      ;
    </div>
  );
};
export default Menu;
