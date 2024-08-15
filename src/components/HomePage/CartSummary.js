import React from "react";

const CartSummary = ({ items }) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-summary">
      <h2>مجموع کل: {totalPrice} تومان</h2>
    </div>
  );
};

export default CartSummary;
