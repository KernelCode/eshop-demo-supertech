"use client";
import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "@/Providers/context/Global.context";
import InViewScroll from "./InViewScroll";
import Image from "next/image";

export default function Slider() {
  const { state, dispatch } = useContext(GlobalContext);
  const [t, setT] = useState(0);
  const [t2, setT2] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["SUMMER", "WINTER", "FALL"];
  const [sizes, setSizes] = useState({ big: 300, small: 200 });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        return setSizes({ big: 250, small: 200 });
      }
      if (window.innerWidth < 750) {
        return setSizes({ big: 350, small: 200 });
      }

      setSizes({ big: 400, small: 300 });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="relative w-full tablet:w-2/3 desktop:w-1/2  overflow-hidden rounded-3xl"
      onMouseLeave={() => {
        dispatch({ type: "SET_MOUSE", payload: null });
      }}
      onMouseEnter={() => {
        dispatch({ type: "SET_MOUSE", payload: "data" });
      }}
    >
      <div className="flex gap-10 tablet:gap-16 w-max justify-items-center items-center -mr-1/2">
        <div className="  transition-all  ">
          <InViewScroll
            classNameInView="duration-1000 delay-700 animate-in fade-in fill-mode-backwards"
            classNameNotInView="duration-100 delay-700 animate-out fade-out fill-mode-forwards"
          >
            <div className="relative">
              <div className="" style={{ width: sizes.big }}>
                <div
                  className="rounded-3xl flex overflow-hidden gap-0 transition-all ease-in-out duration-500"
                  style={{ marginLeft: t }}
                >
                  {Array.from({ length: 5 }).map(() => (
                    <>
                      <Image
                        src="/assets/imgs/fashion/pink-clothes-dream-meaning-3.jpg"
                        width={sizes.big}
                        height={300}
                        style={{ width: sizes.big, minWidth: sizes.big }}
                        alt="product"
                      />
                      <Image
                        src="/assets/imgs/fashion/4 (1).png"
                        width={sizes.big}
                        height={300}
                        style={{ width: sizes.big, minWidth: sizes.big }}
                        alt="product"
                      />
                      <Image
                        src="/assets/imgs/fashion/1-240x300.png"
                        width={sizes.big}
                        height={300}
                        style={{ width: sizes.big, minWidth: sizes.big }}
                        alt="product"
                      />
                    </>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-[30px] bg-[var(--background)] p-2 -right-[30px] rounded-full">
                <span
                  onClick={() => {
                    setT2(t2 - sizes.small);
                    setTimeout(() => {
                      setT(t - sizes.big);
                      currentTextIndex > texts.length - 2
                        ? setCurrentTextIndex(0)
                        : setCurrentTextIndex(currentTextIndex + 1);
                    }, 100);
                  }}
                  className={`hover:scale-125 hover:cursor-pointer transition duration-300 text-white bg-black text-[11px] h-[45px] w-[45px] min-w-[45px] inline-flex items-center justify-center border-gray-900 border-[1px]  font-medium rounded-full leading-none `}
                >
                  <i className="fi fi-rr-arrow-small-right text-2xl" style={{ lineHeight: 0 }}></i>
                </span>
              </div>
            </div>
          </InViewScroll>
        </div>
        <div className="summer-text text-4xl tablet:text-6xl">
          <InViewScroll
            classNameInView="duration-1000   animate-in slide-in-from-left fade-in fill-mode-forwards"
            classNameNotInView="duration-100  animate-out slide-out-from-right fade-out fill-mode-forwards"
          >
            {texts[currentTextIndex]}
          </InViewScroll>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <InViewScroll
            classNameInView="duration-1000 delay-100 animate-in fade-in fill-mode-backwards"
            classNameNotInView="duration-100 delay-100 animate-out fade-out fill-mode-forwards"
          >
            <div className="" style={{ width: sizes.small }}>
              <div
                className="rounded-3xl flex overflow-hidden gap-0 transition-all ease-in-out duration-500"
                style={{ marginLeft: t2 }}
              >
                {Array.from({ length: 5 }).map(() => {
                  return (
                    <>
                      <Image
                        src="/assets/imgs/fashion/4 (1).png"
                        width={sizes.small}
                        height={200}
                        style={{ width: sizes.small, minWidth: sizes.small }}
                        alt="product"
                      />
                      <Image
                        src="/assets/imgs/fashion/1-240x300.png"
                        width={sizes.small}
                        height={200}
                        style={{ width: sizes.small, minWidth: sizes.small }}
                        alt="product"
                      />
                      <Image
                        src="/assets/imgs/fashion/pink-clothes-dream-meaning-3.jpg"
                        width={sizes.small}
                        height={200}
                        style={{ width: sizes.small, minWidth: sizes.small }}
                        alt="product"
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </InViewScroll>
        </div>
      </div>
    </div>
  );
}
