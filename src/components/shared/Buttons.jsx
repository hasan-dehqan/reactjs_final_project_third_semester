import React from "react";
import "./btns.css";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeToCart,
  increase,
  decrease,
} from "../../features/cart/cartSlice";
import { counter, isInCart } from "../../functions/function";

const Buttons = ({ food }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!food || !food.id) {
    console.error("Food object is undefined or does not have an id property.");
    return null; 
  }

  //HANDLERS...
  const removeToCartHandler = () => {
    dispatch(removeToCart(food));
  };

  const decreaseHandler = () => {
    dispatch(decrease(food));
  };

  const increaseHandler = () => {
    dispatch(increase(food));
  };

  const addToCartHandler = () => {
    dispatch(addToCart(food));
  };

  return (
    <div className="btn">
      {counter(cart, food.id) === 1 && (
        <button onClick={removeToCartHandler} className="removeBtn">
          <FaTrash size={15} />
        </button>
      )}
      {counter(cart, food.id) > 0 && (
        <span className="showBtn">{counter(cart, food.id)}</span>
      )}
      {counter(cart, food.id) > 1 && (
        <button onClick={decreaseHandler} className="minusBtn">
          <FaMinus size={15} />
        </button>
      )}

      {isInCart(cart, food.id) ? (
        <button onClick={increaseHandler} className="plusBtn">
          <FaPlus size={15} />
        </button>
      ) : (
        <button onClick={addToCartHandler} className="addCartBtn">
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Buttons;
