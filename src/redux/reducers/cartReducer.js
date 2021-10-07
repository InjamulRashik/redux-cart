import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/types";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.id],
      };
    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((item) => item !== action.id),
      };
    default:
      return state;
  }
};
