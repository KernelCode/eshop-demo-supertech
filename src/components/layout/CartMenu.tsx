"use client";

import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/Providers/context/Global.context";
import Image from "next/image";
import { IProduct } from "../shared/Product";
import Button from "../shared/Button";

interface ProductCartItemProps {
  products: IProduct[];
  count: number;
}
function ProductCartItem({ products, count }: ProductCartItemProps) {
  const { state, dispatch } = useContext(GlobalContext);
  const product = products[0];
  return (
    <div className="mt-2 flex gap-5 items-center justify-center text-xs font-medium border-b-[1px] pb-4 mb-4 border-[var(--background-lightdark)] ">
      <Image className="rounded-xl" src={product.image} width={60} height={60} alt="product" />
      <div>
        <div>{product.name}</div>
        <div style={{ fontFamily: "sans-serif" }} className="flex gap-2 mt-2 items-center justify-center ">
          <span
            onClick={() => {
              dispatch({ type: "DELETE_ONE_ITEM_FROM_CART", payload: product.productId });
            }}
            className="cursor-pointer inline-flex items-center justify-center h-6 w-6 text-[10px] rounded-full bg-black text-white "
          >
            <i className="leading-none  fi fi-rr-minus"></i>
          </span>
          <span className="inline-flex items-center justify-center border-gray-900 border-[1px] text-[10px]  font-medium h-6 w-6 rounded-full  text-black ">
            {count}
          </span>
          <span
            onClick={() => {
              dispatch({ type: "ADD_ITEM_TO_CART", payload: { product } });
            }}
            className="cursor-pointer inline-flex items-center justify-center h-6 w-6 text-[10px] rounded-full bg-black text-white"
          >
            <i className="leading-none fi fi-rr-plus "></i>
          </span>
          <span className="font-bold ml-2">${product.price}</span>
        </div>
      </div>
      <div
        className="cursor-pointer text-[var(--background-dark)] text-2xl"
        onClick={() => {
          dispatch({ type: "DELETE_ITEM_FROM_CART", payload: product.productId });
        }}
      >
        <i className="fi fi-rr-cross-small"></i>
      </div>
    </div>
  );
}
export default function CartMenu() {
  const [productsGrouped, setProductsGrouped] = useState<{ [key: string]: IProduct[] } | null>(null);
  const { state, dispatch } = useContext(GlobalContext);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    setCart(state.cart || []);
  }, [state.cart]);

  useEffect(() => {
    // we group the saved products in the cart so we can delete them by id or one by one
    const groupedProducts = cart.reduce((grouped: { [key: string]: IProduct[] }, product: IProduct) => {
      const { productId } = product;
      if (!grouped[productId]) {
        grouped[productId] = [];
      }
      grouped[productId].push(product);
      return grouped;
    }, {});
    setProductsGrouped(groupedProducts);
  }, [cart]);

  useEffect(() => {
    // Disable body and HTML scrolling when in menu/modal mode!
    document.documentElement.style.overflowY = state.cartMenuOpen ? "hidden" : "auto";
    document.body.style.overflowY = state.cartMenuOpen ? "hidden" : "auto";
  }, [state.cartMenuOpen]);
  return (
    <div className={`${state.cartMenuOpen ? `block` : "hidden"} `}>
      <div className={`fixed top-0 left-0 z-50 h-screen w-screen `}>
        <div className="overflow-y-scroll overflow-x-hidden fixed top-0 right-0 z-50 h-screen w-[300px] phone:w-[350px] bg-[var(--background)] px-12">
          <div className="mx-3 mt-10 text-center flex gap-3 justify-between text-xs font-medium items-center">
            <div className="flex items-center justify-center">
              Shopping Cart
              <span className="mx-[5px] inline-flex items-center justify-center h-5 w-5 rounded-full bg-black text-white text-[10px] font-bold">
                {cart.length}
              </span>
            </div>
            <div className="flex items-center justify-center">
              Wishlist
              <span className="mx-[5px] inline-flex items-center justify-center h-5 w-5 rounded-full bg-white border-[1px] border-black  text-black text-[10px] font-bold">
                0
              </span>
            </div>
          </div>
          <div className="h-[3px] w-full bg-black mt-3 rounded-full"></div>
          <div className="mt-5">
            {cart.length === 0 && <div className="text-gray-500">No Products In Cart.</div>}
            {Object.keys(productsGrouped || {}).map((productId) => {
              if (!productsGrouped) return;
              return (
                <ProductCartItem
                  key={productId}
                  count={productsGrouped[productId].length}
                  products={productsGrouped[productId]}
                />
              );
            })}
          </div>
          {cart.length > 0 && (
            <div className="flex items-center justify-between leading-3 text-sm font-medium mt-5 mb-10 ">
              <span>Subtotal: </span>
              <span style={{ fontFamily: "sans-serif" }}>{cart.reduce((p, c) => p + c.price, 0)} $</span>
            </div>
          )}
          {cart.length > 0 && (
            <>
              <div className="flex gap-3 mt-20">
                <i className="fi fi-rr-plane-departure text-4xl"></i>
                <div className="text-xs font-medium">
                  <div>Congratulations , You&rsquo;ve Got Free Shipping.</div>
                  <div className="h-1 w-full bg-[var(--background-lightdark)] mt-2 relative">
                    <div className="h-full w-[80%] bg-black"></div>
                  </div>
                </div>
              </div>

              <Button type="outline" size="large" className="w-full mt-5">
                Checkout
              </Button>
              <Button type="fill" size="large" className="w-full mt-2 mb-10">
                View Cart
              </Button>
            </>
          )}
        </div>
        <div className={`h-screen w-screen bg-black bg-opacity-70`}>
          <div
            onClick={() => {
              dispatch({ type: "SET_MODAL", payload: false });
            }}
            className="cursor-pointer text-[var(--background)] opacity-80 absolute right-[320px] phone:right-[380px] text-xl top-[20px]"
          >
            <i className="fi fi-rr-cross"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
