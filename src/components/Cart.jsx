import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./../cartSlice";
import emptyCartImg from "./../../assets/images/illustration-empty-cart.svg";
import removeItemIcon from "./../../assets/images/icon-remove-item.svg";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-100 flex flex-col gap-3 p-6 rounded-md md:w-5/6 mx-auto">
      <h2 className="text-customRed text-4xl font-bold">
        Your cart {items.length === 0 ? "(0)" : ""}{" "}
      </h2>
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
            <li
              key={item.id}
              className="flex justify-between items-center p-4 border-b border-gray-200"
            >
              <div>
                <div className="font-bold">{item.maintitle}</div>
                <div className="flex space-x-4">
                  <span className="font-bold text-customRed">
                    {item.quantity}x
                  </span>
                  <span>{item.price}</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => dispatch(removeItem({ id: item.id }))}
                  className="p-2"
                >
                  <img src={removeItemIcon} alt="Remove" className="w-4 h-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
