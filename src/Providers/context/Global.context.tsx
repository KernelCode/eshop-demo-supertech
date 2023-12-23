"use client";
import React, { createContext, useReducer, ReactNode } from "react";
import { IProduct } from "@/components/Product";

export interface GlobalState {
  cart: IProduct[];
  mouse: string | null;
  cartMenuOpen: boolean;
  quickViewProduct: IProduct | null;
}

interface Action {
  type: string;
  payload?: any;
}

type Dispatch = (action: Action) => void;

const initialState: GlobalState = {
  cart: [],
  mouse: null,
  cartMenuOpen: false,
  quickViewProduct: null,
};

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      localStorage.setItem("cart", JSON.stringify([...state.cart, action.payload.product]));
      return { ...state, cart: [...state.cart, action.payload.product] };

    case "DELETE_ITEM_FROM_CART":
      const newCart = state.cart.filter((product) => product.productId !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case "DELETE_ONE_ITEM_FROM_CART":
      const indexToRemove = state.cart.findIndex((product) => product.productId === action.payload);
      if (indexToRemove !== -1) {
        const newCart = [...state.cart];
        newCart.splice(indexToRemove, 1);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          cart: newCart,
        };
      }
      return state;
    case "EDIT_CART_ITEM":
      const updatedCart = state.cart.map((cart) =>
        cart.productId === action.payload?.productId ? action.payload.newCart : cart
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case "SET_MOUSE":
      return { ...state, mouse: action.payload };

    case "SET_MODAL":
      return { ...state, cartMenuOpen: action.payload };

    case "SET_QUICK_VIEW_PRODUCT":
      return { ...state, quickViewProduct: action.payload };

    default:
      return state;
  }
};

interface GlobalContextProps {
  state: GlobalState;
  dispatch: Dispatch;
}

export const GlobalContext = createContext<GlobalContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

const getGlobalState = (): GlobalState => {
  try {
    const cartData = localStorage?.getItem("cart");

    return {
      ...initialState,
      cart: cartData ? JSON.parse(cartData) : [],
    };
  } catch (err) {
    if (typeof window !== "undefined") {
      localStorage?.setItem("cart", "[]");
    }
    return initialState;
  }
};

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, getGlobalState());

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
