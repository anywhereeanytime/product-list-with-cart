import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../cartSlice";
import orderConfirmedIcon from "./../../assets/images/icon-order-confirmed.svg";

const OrderConfirmationModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  if (!isOpen) return null;

  const handleNewOrder = () => {
    dispatch(clearCart()); // Очищаем корзину
    onClose(); // Закрываем модальное окно
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 md:w-2/6 max-h-[80vh] overflow-y-auto">
        <img src={orderConfirmedIcon} className="mb-4" alt="" />
        <h2 className="text-4xl font-bold mb-1">Order Confirmed</h2>
        <p className="text-customRose300 mb-5">We hope you enjoy your food!</p>
        <div className="bg-customRose100 px-2 rounded-lg">
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className=" p-4 border-b border-gray-200 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src={item.image}
                      className="w-14 h-14 rounded-lg"
                      alt="Icon"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{item.maintitle}</div>
                    <span className="font-bold text-customRed mr-4">
                      {item.quantity}x
                    </span>
                    <span>@${item.price}</span>
                  </div>
                </div>
                <div className="font-bold">
                  ${(item.quantity * item.price).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between my-4 pb-4 px-3">
            <p className="text-lg font-semibold">Total</p>
            <p className="font-bold text-2xl ">${totalAmount}</p>
          </div>
        </div>
        <button
          onClick={handleNewOrder}
          className="bg-customRed  text-white font-bold rounded-3xl  px-8 py-3 text-lg w-full"
        >
          Start a new order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
