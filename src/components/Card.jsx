import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./../cartSlice";
import cartIcon from "./../../assets/images/icon-add-to-cart.svg";
import iconIncrement from "./../../assets/images/icon-increment-quantity.svg";
import iconDecrement from "./../../assets/images/icon-decrement-quantity.svg";
import "./../../src/index.css";

const Card = ({ id, image, subtitle, maintitle, price }) => {
  const dispatch = useDispatch();

  // Определяем, добавлен ли товар в корзину
  const isAdded = useSelector((state) =>
    state.cart.items.some((item) => item.id === id)
  ); //Добавили товар, значит нужно поменять UI этого товара

  // Состояние для количества элементов в корзине
  const [quantity, setQuantity] = useState(1);

  // Добавить в корзину
  const handleAddToCart = () => {
    const numericPrice = parseFloat(price.replace("$", "")); // Преобразуем цену в число

    if (!isAdded) {
      setQuantity(1); //Если товар добавляют впервые, устанавливается значение 1
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1); //Если товар добавляли ранее, то кол-во увеличивается на +1
    }

    dispatch(addItem({ id, image, subtitle, maintitle, price: numericPrice })); //Отправляем action.payload добавленного товара в корзину
  };

  // Удалить из корзины
  const handleRemoveFromCart = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setQuantity(1);
    }
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
      <div
        className={` ${
          isAdded
            ? "bg-customRed py-2 px-3 rounded-full flex gap-2 font-semibold text-lg border absolute z-10 bottom-[5.25rem] left-1/2 -translate-x-1/2 text-nowrap min-w-fit"
            : "flex items-center gap-2 font-semibold text-lg border border-customRose900 rounded-full py-2 px-3 absolute z-10 bottom-[5.25rem] left-1/2 -translate-x-1/2 bg-white text-nowrap min-w-fit"
        }`}
      >
        {isAdded ? (
          <div className="flex justify-between gap-9 items-center text-gray-50 text-opacity-90">
            <span onClick={handleRemoveFromCart} role="button" tabIndex={0}>
              <img
                src={iconDecrement}
                className="w-5 h-5 p-1 border-2 border-gray-50 border-opacity-80 rounded-full cursor-pointer"
                alt="Decrease quantity"
              />
            </span>
            {quantity}
            <span onClick={handleAddToCart} role="button" tabIndex={0}>
              <img
                src={iconIncrement}
                className="w-5 h-5 p-1 border-2 border-gray-50 border-opacity-80 rounded-full cursor-pointer"
                alt="Increase quantity"
              />
            </span>
          </div>
        ) : (
          <button onClick={handleAddToCart} className="flex items-center gap-2">
            <img src={cartIcon} alt="Cart icon" />
            Add to cart
          </button>
        )}
      </div>

      <p className="font-normal text-customRose400">{subtitle}</p>
      <h4 className="text-lg font-bold">{maintitle}</h4>
      <p className="font-bold text-customRed">{price}</p>
    </div>
  );
};

export default Card;
