import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuFolderHeart } from "react-icons/lu";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = ({ setIsOpen, isOpen }) => {
  const { count } = useSelector((state) => state.cart);
  return (
    <div>
      <div className="header-container">
        <ul className="header-list">
          <li className="header-item">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className="header-item">
            <Link to="/meno">منوی غذاها</Link>
          </li>
          <li className="header-item">
            <Link to="/rooms/:id">جزئیات برای اتاق ها</Link>
          </li>

          <li className="header-item">
            <Link to="/foods/:id">جزئیات برای غذا</Link>
          </li>

          <li className="header-item">
            <Link to="/reservation">رزرواسیون</Link>
          </li>

          <li className="header-item">
            <Link to="/admin">پنل مدیریت</Link>
          </li>
          <li className="header-item header-item-cart">
            <Link to="/cart">
              <AiOutlineShoppingCart size={25} />
              <span className="cart-badge">{count}</span>
            </Link>
          </li>
          <li
            onClick={() => setIsOpen(!isOpen)}
            className="header-item header-item-heart"
          >
            <LuFolderHeart size={25} color="#fff" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
