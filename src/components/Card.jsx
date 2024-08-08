import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./../cartSlice";
import cartIcon from "./../../assets/images/icon-add-to-cart.svg";
import iconIncrement from "./../../assets/images/icon-increment-quantity.svg";
import iconDecrement from "./../../assets/images/icon-decrement-quantity.svg";
import "./../../src/index.css";

const Card = ({ id, image, subtitle, maintitle, price }) => {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) =>
    state.cart.items.some((item) => item.id === id)
  );

  const handleAddToCart = () => {
    dispatch(addItem({ id, image, subtitle, maintitle, price }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="relative mb-8">
      <img
        className={`rounded-lg mb-8 w-full aspect-video object-cover ${
          isAdded ? "border-2 border-customRed" : ""
        }`}
        src={image}
        alt="Dessert Image"
      />
      <button
        onClick={isAdded ? handleRemoveFromCart : handleAddToCart}
        className={` ${
          isAdded
            ? "bg-customRed text-white py-2 px-3 rounded-full"
            : "flex items-center gap-2 font-semibold text-lg border border-customRose900  rounded-full py-2 px-3 absolute z-10 bottom-[5.25rem] left-1/2 -translate-x-1/2 bg-white text-nowrap min-w-fit"
        }`}
      >
        {isAdded ? (
          <>
            <img
              className="border-1 border-white rounded-full"
              src={iconIncrement}
              alt="Cart icon"
            />
            <img src={iconDecrement} alt="Cart icon" />
            Remove from cart
          </>
        ) : (
          <>
            <img src={cartIcon} alt="Cart icon" />
            Add to cart
          </>
        )}
      </button>
      <p className="font-normal text-customRose400">{subtitle}</p>
      <h4 className="text-lg font-bold">{maintitle}</h4>
      <p className="font-bold text-customRed">{price}</p>
    </div>
  );
};

export default Card;
