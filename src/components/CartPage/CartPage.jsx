import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartPage.css";
import CartItem from "../shared/CartItem";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="cartPageInfo">
      {cart.length ? (
        <div className="cartPage-section">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <>
          <h1 className="cartTextPage">کارت خالی است</h1>
          <Link to="/" className="linkPageCart">
            برو به صفحه اصلی
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
