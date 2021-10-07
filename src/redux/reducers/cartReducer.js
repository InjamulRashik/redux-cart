import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/types";

const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      name: "Iphone",
    },
    {
      id: 2,
      name: "Samsung",
    },
    {
      id: 3,
      name: "OnePlus",
    },
    {
      id: 4,
      name: "Pixel",
    },
    {
      id: 5,
      name: "Xiaomi",
    },
  ],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.id],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.id),
      };
    default:
      return state;
  }
};
