"use client";
/**
 * HeroImageSlider Component
 *
 * A component that displays a hero image slider with multiple images and text.
 * It allows the user to navigate through the images and displays different text for each slide.
 */

import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "@/Providers/context/Global.context";
import InViewScroll from "./InViewScroll";
import Image from "next/image";

export default function HeroImageSlider() {
  const { dispatch } = useContext(GlobalContext);
  // manage the slider image sizes using js .. the images are fixed in size so we can scroll
  // between them using margin left value
  // MainImageSize and SecondImageSize and the image "margin-left" value in px
  const [MainImageSize, setMainImageSize] = useState(0);
  const [SecondImageSize, setSecondImageSize] = useState(0);

  // texts that display on every slide
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["SUMMER", "WINTER", "FALL"];

  // we manage the image sizes by screen width
  const [sizes, setSizes] = useState({ main: 300, second: 200 });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        return setSizes({ main: 250, second: 200 });
      }
      if (window.innerWidth < 750) {
        return setSizes({ main: 350, second: 200 });
      }

      setSizes({ main: 400, second: 300 });
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
        dispatch({ type: "SET_MOUSE", payload: "hero" });
      }}
    >
      <div className="flex gap-10 tablet:gap-16 w-max justify-items-center items-center -mr-1/2">
        <div className="  transition-all  ">
          <InViewScroll
            classNameInView="duration-1000 delay-700 animate-in fade-in fill-mode-backwards"
            classNameNotInView="duration-100 delay-700 animate-out fade-out fill-mode-forwards"
          >
            <div className="relative">
              <div className="" style={{ width: sizes.main }}>
                <div
                  className="rounded-3xl flex overflow-hidden gap-0 transition-all ease-in-out duration-500"
                  style={{ marginLeft: MainImageSize }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <>
                      <Image
                        src="/assets/imgs/fashion/pink-clothes-dream-meaning-3.jpg"
                        width={sizes.main}
                        height={300}
                        style={{ width: sizes.main, minWidth: sizes.main }}
                        alt="product"
                      />
                      <Image
                        src="/assets/imgs/fashion/4 (1).png"
                        width={sizes.main}
                        height={300}
                        style={{ width: sizes.main, minWidth: sizes.main }}
                        alt="product"
                      />
                      <Image
                        src="/assets/imgs/fashion/1-240x300.png"
                        width={sizes.main}
                        height={300}
                        style={{ width: sizes.main, minWidth: sizes.main }}
                        alt="product"
                      />
                    </>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-[30px] bg-[var(--background)] p-2 -right-[30px] rounded-full">
                <span
                  onClick={() => {
                    setSecondImageSize(SecondImageSize - sizes.second);
                    setTimeout(() => {
                      setMainImageSize(MainImageSize - sizes.main);
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
            <div className="" style={{ width: sizes.second }}>
              <div
                className="rounded-3xl flex overflow-hidden gap-0 transition-all ease-in-out duration-500"
                style={{ marginLeft: SecondImageSize }}
              >
                {Array.from({ length: 5 }).map((_, i) => {
                  return (
                    <>
                      <Image
                        src="/assets/imgs/fashion/4 (1).png"
                        width={sizes.second}
                        height={200}
                        style={{ width: sizes.second, minWidth: sizes.second }}
                        alt="product"
                      />
                      <Image
                        src="/assets/imgs/fashion/1-240x300.png"
                        width={sizes.second}
                        height={200}
                        style={{ width: sizes.second, minWidth: sizes.second }}
                        alt="product"
                      />
                      <Image
                        src="/assets/imgs/fashion/pink-clothes-dream-meaning-3.jpg"
                        width={sizes.second}
                        height={200}
                        style={{ width: sizes.second, minWidth: sizes.second }}
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
