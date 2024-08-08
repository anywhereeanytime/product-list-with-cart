// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "./../cartSlice";
import emptyCartImg from "./../../assets/images/illustration-empty-cart.svg";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-100 flex flex-col gap-3 p-6 rounded-md md:w-5/6 mx-auto">
      <h2 className="text-customRed text-4xl font-bold">Your cart </h2>
      {items.length === 0 ? (
        <div className="flex flex-col gap-3 justify-center	">
          <img src={emptyCartImg} className="w-1/2 mx-auto" alt="Empty cart" />
          <p className="text-customRose500 font-semibold text-lg text-center">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.maintitle} - {item.price} x {item.quantity}
              <button onClick={() => dispatch(removeItem({ id: item.id }))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
