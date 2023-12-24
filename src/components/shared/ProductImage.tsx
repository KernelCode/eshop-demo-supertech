"use client";
/**
 * ProductImage Component
 *
 * A component that displays the main image of a product with zoom functionality and thumbnail images.
 *
 * Props:
 * - product: The product object containing information such as price, name, designer, etc.
 */

/**
 * ThumbProductImage Component
 *
 * A component that displays a thumbnail of a product image and triggers a callback when clicked.
 *
 * Props:
 * - product: The product object containing information such as price, name, designer, etc.
 * - changeImage: A callback function to change the currently displayed image.
 */

import { products } from "@/data.json";
import { IProduct } from "./Product";
import { useCallback, useEffect, useState } from "react";

function ThumbProductImage({ product, changeImage }: { product: IProduct; changeImage: (image: string) => void }) {
  return (
    <div
      onClick={() => {
        changeImage(product.image);
      }}
      className="h-14 w-14 border-2 rounded-xl overflow-hidden hover:-translate-y-[2px] hover:cursor-pointer transition duration-300"
    >
      <img src={product.image} alt={product.name} />
    </div>
  );
}
export default function ProductImage({ product }: { product: IProduct }) {
  const [currentImage, setCurrentImage] = useState(product.image);
  const [zoom, setZoom] = useState(false);
  const changeImage = useCallback((image: string) => {
    setCurrentImage(image);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflowY = zoom ? "hidden" : "auto";
    document.body.style.overflowY = zoom ? "hidden" : "auto";
  }, [zoom]);

  return (
    <>
      <div className="relative text-white">
        <img src={currentImage} alt={product.name} style={{ width: "100%" }} />
        <div
          className="absolute top-5 left-5"
          onClick={() => {
            setZoom(true);
          }}
        >
          <i className=" text-sm fi fi-rr-arrow-up-right-and-arrow-down-left-from-center bg-white text-gray-600 p-2 rounded-lg flex hover:-translate-y-[2px] hover:cursor-pointer transition duration-300 "></i>
        </div>
        <div className="absolute bottom-5  flex gap-2 justify-center items-center w-full">
          <ThumbProductImage product={product} changeImage={changeImage} />
          <ThumbProductImage product={products[0]} changeImage={changeImage} />
          <ThumbProductImage product={products[3]} changeImage={changeImage} />
        </div>
      </div>
      {zoom && (
        <div className="block absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full z-10   overflow-y-scroll ">
          <div className="p-5 flex justify-center items-center " style={{ height: "100vh" }}>
            <img src={currentImage} alt={product.name} />
          </div>
          <div
            className="fixed top-5 left-5 cursor-pointer text-[var(--background)] text-4xl"
            onClick={() => {
              setZoom(false);
            }}
          >
            <i className="fi fi-rr-cross-small"></i>
          </div>
        </div>
      )}
    </>
  );
}
