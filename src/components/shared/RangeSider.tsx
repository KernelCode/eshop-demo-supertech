"use client";
/**
 * RangeSlider Component
 *
 * A component that represents a range slider for selecting a price range.
 * It allows the user to slide a handle to select a price value, and displays the selected price value.
 */

import { useState } from "react";

export default function RangeSlider() {
  const [price, setPrice] = useState(0);
  return (
    <>
      {/* sorry :( no time to create a slider compoenet that really handels the ui requerimnets ..*/}
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
