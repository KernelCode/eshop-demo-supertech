"use client";
import { useState } from "react";

export default function RangeSlider({ children, className = "" }: { className?: string; children?: React.ReactNode }) {
  const [price, setPrice] = useState(0);
  return (
    <>
      {/* no time to create a slider compoenet that really handels the ui requerimnets ..*/}
      <input
        type="range"
        min={1}
        defaultValue={100}
        max={10000}
        className="accent-gray-900 w-full h-[2px] bg-gray-200 rounded-lg appearance-none cursor-pointer "
        onChange={(event) => {
          setPrice(parseInt(event.target.value));
        }}
      />
      <span className="text-[10px]   absolute start-0 -bottom-6">
        Price
        <span style={{ fontFamily: "sans-serif" }} className="font-bold">
          : ${price}
        </span>
      </span>
    </>
  );
}
