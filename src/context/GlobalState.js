import { createContext, useReducer } from "react";

const initialState = {
  cart: [],
  error: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "UPDATE_ITEM_TO_CART":
      state.cart.find((item) => item.id === action.payload.id).qty =
        action.payload.qty;
      return { ...state };
    case "DELETE_ITEM_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload)],
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cart: [],
      };
    case "ADD_ERROR":
      return {
        ...state,
        error: [...state.error, action.payload],
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addItemToCart = (product) =>
    dispatch({ type: "ADD_ITEM_TO_CART", payload: product });
  const updateItemToCart = (id, qty) =>
    dispatch({ type: "UPDATE_ITEM_TO_CART", payload: { id, qty } });
  const deleteItemFromCart = (id) =>
    dispatch({ type: "DELETE_ITEM_FROM_CART", payload: id });
  const clearItemFromCart = () => dispatch({ type: "CLEAR_ITEM_FROM_CART" });
  const addError = (params) =>
    dispatch({ type: "ADD_ERROR", payload: { ...params } });

  return (
    <GlobalContext.Provider
      value={{
        state,
        addItemToCart,
        updateItemToCart,
        deleteItemFromCart,
        clearItemFromCart,
        addError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
