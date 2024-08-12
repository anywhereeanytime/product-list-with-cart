import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./../cartSlice";
import emptyCartImg from "./../../assets/images/illustration-empty-cart.svg";
import removeItemIcon from "./../../assets/images/icon-remove-item.svg";
import carbonNeutralIcon from "./../../assets/images/icon-carbon-neutral.svg";
import OrderConfirmationModal from "./OrderConfirmationModal";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-100 flex flex-col gap-3 p-6 rounded-md md:w-5/6 mx-auto">
      <h2 className="text-customRed text-4xl font-bold">
        Your cart{" "}
        {items.length === 0
          ? "(0)"
          : `(${items.reduce((acc, item) => acc + item.quantity, 0)})`}
      </h2>
      {items.length === 0 ? (
        <div className="flex flex-col gap-3 justify-center	">
          <img src={emptyCartImg} className="w-1/2 mx-auto" alt="Empty cart" />
          <p className="text-customRose500 font-semibold text-lg text-center">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
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
                <div>
                  <button
                    onClick={() => dispatch(removeItem({ id: item.id }))}
                    className="p-2"
                  >
                    <img
                      src={removeItemIcon}
                      alt="Remove"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="font-bold text-2xl">${totalAmount}</p>
          </div>

          <div className="flex justify-center items-center gap-2 mt-4 p-3 rounded-md bg-gray-200">
            <img src={carbonNeutralIcon} alt="" />
            <p>
              This is a{" "}
              <span className="font-bold text-customRose900">
                carbon neutral
              </span>{" "}
              delivery
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleConfirmOrder}
              className="bg-customRed  text-white font-bold rounded-3xl  px-8 py-3 text-lg w-full"
            >
              Confirm order
            </button>
            <OrderConfirmationModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              items={items}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
