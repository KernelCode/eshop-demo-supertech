"use client";

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/Providers/context/Global.context";
import { IProduct } from "@/components/Product";
import Badge from "@/components/Badge";
import Button from "./Button";

import Stars from "./Stars";

export default function ProductQuickView() {
  const { state, dispatch } = useContext(GlobalContext);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    setProduct(state.quickViewProduct);
  }, [state.quickViewProduct]);
  useEffect(() => {
    document.documentElement.style.overflowY = product != null ? "hidden" : "auto";
    document.body.style.overflowY = product != null ? "hidden" : "auto";
  }, [product]);

  if (!product) return;
  return (
    <div className="block fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full z-10   overflow-y-scroll ">
      <div className="p-5 flex justify-center items-center " style={{ height: "100vh" }}>
        <div className="bg-white flex rounded-3xl overflow-hidden flex-col tablet:flex-row">
          <div className="w-[200px] tablet:w-[400px] m-auto tablet:m-0">
            <img src={product?.image} alt={product?.name} className="-ml-3 w-full " />
          </div>
          <div className="m-5 max-w-[400px] ">
            {product.isOnSale && (
              <div className="mt-5  px-3  rounded-[4px] text-[9px]  bg-black text-white leading-5 font-semibold w-fit ">
                GET <span style={{ fontFamily: "sans-serif" }}>20%</span> OFF
              </div>
            )}
            <h1 className="font-medium text-3xl mt-2">{product.name}</h1>
            <div className="mt-1">
              <Stars rating={3.7} />
            </div>
            <div className="mt-2 text-gray-600 text-xs leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
            <div className="flex gap-16 mt-5 ">
              <div>
                <div className="text-xs font-medium">Price</div>
                <div className="flex gap-2 justify-center mt-2 items-center">
                  <div className="relative mb-6 flex gap-1  flex-wrap font-semibold text-xl">
                    <span style={{ fontFamily: "sans-serif" }}>$</span>
                    {product.price}
                  </div>
                  <div className="relative mb-6 flex gap-1  flex-wrap font-light text-sm text-gray-400 line-through">
                    <span style={{ fontFamily: "sans-serif" }}>$</span>
                    {product.price}
                  </div>
                </div>
              </div>
              <div>
                <div className=" text-xs font-medium">Quantity</div>
                <div className="relative mb-6 flex gap-2 mt-2 flex-wrap">
                  <Badge size="m" selected>
                    <i className="leading-none  fi fi-rr-minus"></i>
                  </Badge>
                  <Badge size="m" disabled>
                    3
                  </Badge>
                  <Badge size="m" selected>
                    <i className="leading-none fi fi-rr-plus "></i>
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex  gap-2 ">
              <Button
                type="fill"
                size="large"
                onClick={() => {
                  dispatch({ type: "ADD_ITEM_TO_CART", payload: { id: state.cart.length + 1, product } });
                }}
              >
                Add To Cart
              </Button>
              <Button type="outline" size="large" icon={<i className="fi fi-rr-heart "></i>}>
                Add To Wishlist
              </Button>
            </div>
            <div className=" border-b-[1px]  border-[var(--background-lightdark)] mt-3 "></div>

            <div className="text-[11px]">
              <div className=" mt-3">
                <span className="font-bold mr-2">SKU: </span>

                <span style={{ fontFamily: "monospace" }}>{product.productId}</span>
              </div>
              <div className=" mt-3">
                <span className="font-bold mr-2">Category: </span>

                <span style={{ fontFamily: "monospace" }}>{product.category.join(",    ")}</span>
              </div>
              <div className="mt-3">
                <span className="font-bold mr-2">Tags: </span>

                <span style={{ fontFamily: "monospace" }}>{product.category.join(",    ")}</span>
              </div>
              <div className=" mt-3 flex">
                <span className="font-bold mr-2">Share: </span>

                <div className="flex gap-5 text-sm">
                  <i className="fi fi-brands-facebook cursor-pointer"></i>
                  <i className="fi fi-brands-instagram cursor-pointer"></i>
                  <i className="fi fi-brands-linkedin cursor-pointer"></i>
                  <i className="fi fi-brands-twitter-alt-circle cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed top-5 left-5 cursor-pointer text-[var(--background)] text-4xl"
        onClick={() => {
          dispatch({ type: "SET_QUICK_VIEW_PRODUCT", payload: null });
        }}
      >
        <i className="fi fi-rr-cross-small"></i>
      </div>
    </div>
  );
}
