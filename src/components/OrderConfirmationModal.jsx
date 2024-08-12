import React from "react";
import { useSelector } from "react-redux";
import orderConfirmedIcon from "./../../assets/images/icon-order-confirmed.svg";

const OrderConfirmationModal = ({ isOpen, onClose }) => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
        <img src={orderConfirmedIcon} alt="" />
        <h2 className="text-4xl font-bold">Order Confirmed</h2>
        <p className="text-customRose300">We hope you enjoy your food!</p>
        <div className="bg-customRose100 p-2 rounded-lg">
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
                    <span>@${item.price}</span>
                    <span className="font-bold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div></div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between my-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="font-bold text-2xl">${totalAmount}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="bg-customRed  text-white font-bold rounded-3xl  px-8 py-3 text-lg w-full"
        >
          Start a new order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
