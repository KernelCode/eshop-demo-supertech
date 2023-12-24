"use client";
/**
 * ProductHover Component
 *
 * A component that displays additional information and actions when hovering over a product.
 *
 * Props:
 * - product: The product object containing information such as price, name, designer, etc.
 * - children: Additional content to be rendered within the component.
 * - quickView: Determines if the quick view feature is enabled (default: true).
 */

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import React, { useContext, useState } from "react";
import { GlobalContext } from "@/Providers/context/Global.context";
import { IProduct } from "./Product";

export default function ProductHover({
  product,
  children,
  quickView = true,
}: {
  product: IProduct;
  children: React.ReactNode;
  quickView?: boolean;
}) {
  const [hover, setHover] = useState(false);
  // this is for the quick view .. it's modal lives in the layout so it's managed using the
  // global store ..
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Link href={`/product/${product.productId}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-2xl w-full phone:w-[200px]"
        />
      </Link>

      {quickView && (
        <Button
          onClick={() => {
            dispatch({ type: "SET_QUICK_VIEW_PRODUCT", payload: product });
          }}
          size="large"
          type="fill"
          rounded="rounded-full"
          className={`border-[3px] border-[var(--background)] absolute bottom-8 left-6 tablet:left-10 ${
            hover
              ? "duration-600 delay-100 animate-in slide-in-from-bottom fade-in fill-mode-backwards "
              : "duration-600 delay-100 animate-out slide-out-to-bottom fade-out fill-mode-forwards "
          }`}
        >
          QUICK VIEW
        </Button>
      )}

      <div className="absolute top-[10px] right-[10px]  flex flex-col text-white gap-1 z-3">
        <i className="cursor-pointer hover:bg-black hover:text-white  fi fi-rr-heart text-[13px] w-8 h-8 rounded-full bg-gray-500/50 text-center  leading-9 "></i>
        <i
          onClick={(event: any) => {
            // animate on every click
            event.target.classList.add("animate-in");
            event.target.classList.add("zoom-in-150");

            setTimeout(() => {
              event.target.classList.remove("animate-in");
              event.target.classList.remove("zoom-in-150");
            }, 500);
            dispatch({ type: "ADD_ITEM_TO_CART", payload: { id: state.cart.length + 1, product } });
          }}
          className="duration-500 cursor-pointer hover:bg-black hover:text-white  fi fi-rr-cart-arrow-down text-[13px] w-8 h-8 rounded-full bg-gray-500/50 text-center  leading-9 "
        ></i>
      </div>

      {children}
    </div>
  );
}
