import React from "react";
import Button from "./Buttons";

const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <img className="imgItem" src={item.images[0]} alt={item.name} />
      <div className="infoItem">
        <p className="decItem">
          Title: <span className="titlItem">{item.name}</span>
        </p>
        <p className="decItem">
          Type: <span className="titlItem">{item.type}</span>
        </p>
        <p className="decItem">
          Price: <span className="titlItem">{item.price}</span>
        </p>
        <p className="decItem">
          Description: <span className="titlItem">{item.description}</span>
        </p>
      </div>
      <div className="infoItem">
        <Button details={item} />
      </div>
    </div>
  );
};

export default CartItem;
