/**
 * Product Component
 *
 * A component that represents a product with various details and optional quick view functionality.
 *
 * Props:
 * - product: The product object containing information such as price, name, designer, etc.
 * - quickView: Determines if the quick view feature is enabled (default: undefined).
 */

import ProductHover from "./ProductHover";
export interface IProduct {
  price: number;
  name: string;
  designer: string;
  isOnSale: boolean;
  salePercentage: number;
  productId: string;
  isNew: boolean;
  image: string;
  category: string[];
  color: string;
  size: string;
}
export default function Product({ product, quickView }: { product: IProduct; quickView?: boolean }) {
  return (
    <div className="relative w-[170px] phone:w-fit">
      {/* ProductHover client-side component  responsible for managing 
      buttons, clicks, and image display related to a product. */}
      <ProductHover product={product} quickView={quickView}>
        {product.isOnSale && (
          <div className="absolute top-[10px] left-[10px] px-3  rounded-full text-[9px]  bg-white leading-5 font-semibold ">
            GET <span style={{ fontFamily: "sans-serif" }}>20%</span> OFF
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-[10px] left-[10px] px-3  rounded-full text-[9px]  bg-black text-white leading-5 font-semibold ">
            NEW
          </div>
        )}
      </ProductHover>
      {/* The following content will be rendered on the server to ensure search engines can read it */}
      <div className="mt-4 ">
        <div className="text-xs font-semibold flex justify-between text-left">
          <h2>
            {product.name} <br />
            {product.designer}
          </h2>
          <span style={{ fontFamily: "sans-serif" }}>${product.price}</span>
        </div>
      </div>
    </div>
  );
}
