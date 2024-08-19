import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      ); //После того, как мы кликнули на HadleAddToCart, id добавленного товара ищется уже в самой корзине "под капотом"

      if (existingItem) {
        existingItem.quantity += 1; //Товар уже есть в корзине, мы просто увеличиваем его quantity
      } else {
        //Мы впервые добавляем товар, сначала мы спредим ранее добавленные товары и добавляем новый.
        state.items.push({
          ...action.payload,
          quantity: 1,
          image: action.payload.image,
        });
      }
      // обновляем totalAmount при добавлении товара
      state.totalAmount = state.items
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2); //Начальное значение аккамулятора = 0. Редьюс проходится по всему массиву и плюсуют прайс.
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          existingItem.quantity -= 1;
        }
      }
      // обновляем totalAmount при удалении товара
      state.totalAmount = state.items
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
