"use client";
import React, { useContext } from "react";
import { IProduct } from "./Product";
import Button from "./Button";
import { GlobalContext } from "@/Providers/context/Global.context";

export default function ProductButtons({ product }: { product: IProduct }) {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <div className="border-[1px] border-black p-4 rounded-2xl">
      <div className="border-[1px] border-black p-2 rounded-md mt-2 text-xs text-center">Bank Offer 5% Cashback</div>
      <div className="border-[1px] border-black p-2 rounded-md mt-3 text-[11px]">
        <div className="flex gap-3">
          <i className="fi fi-rr-box-open-full text-3xl leading-4"></i>
          <div>
            <div>Easy Returns</div>
            <div className="font-bold">30 Days</div>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-black p-2 rounded-md mt-2 text-[11px]">
        <div className="flex gap-3 justify-center items-center">
          <i className="fi fi-rr-box-circle-check text-3xl leading-4"></i>
          <div className="text-left ">
            <div className="font-bold">Enjoy The Product</div>
            <div className="font-light mt-1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
          </div>
        </div>
      </div>
      <div className=" font-semibold  flex items-center gap-1 mt-5">
        <i className="fi fi-rr-circle-exclamation-check text-[17px] leading-5"></i>
        <span className="text-[11px]">You will save 504$ on this order</span>
      </div>
      <div className=" border-b-[1px]  border-[var(--background-lightdark)] mt-2 "></div>
      <div className="flex justify-between text-[11px] font-semibold mt-2 items-center">
        <span>Total Amount:</span>
        <span className=" text-lg">
          <span style={{ fontFamily: "sans-serif" }}>$</span>300
        </span>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <Button type="outline" size="large" className="w-full" icon={<i className="fi fi-rr-heart "></i>}>
          Add To Wishlist
        </Button>
        <Button
          type="fill"
          size="large"
          className="w-full"
          onClick={() => {
            dispatch({ type: "ADD_ITEM_TO_CART", payload: { id: state.cart.length + 1, product } });
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
