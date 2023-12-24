import Link from "next/link";
import Product from "../shared/Product";
import { products, categories } from "@/data.json";

export default function ProductsHome() {
  const selectedCat = "All";
  return (
    <section className="  mt-20 mx-auto max-w-[900px]  ">
      <div className="flex flex-col justify-between tablet:flex-row">
        <h1 className="text-3xl tablet:text-2xl font-semibold m-auto tablet:m-0">Most Popular Products</h1>
        <div className="text-xs border-2 border-gray-900  rounded-full px-1 leading-10  gap-3 justify-center hidden tablet:flex  ">
          {categories.map((cat) => {
            return (
              <Link
                href={`/shop?start=0${cat === "All" ? "" : "&cats=" + cat}`}
                className={`${
                  selectedCat === cat ? "bg-black  text-white" : ""
                } transition ease-in-out rounded-full leading-6 cursor-pointer  my-1 px-3 w-fit hover:bg-black  hover:text-white `}
                key={cat}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center tablet:justify-between  gap-6 mt-5 flex-wrap mx-2">
        {(selectedCat === "All" ? products : products.filter((product) => product.category.includes(selectedCat)))
          // For mockup purposes.
          .slice(0, 8)
          .map((product, i) => {
            return <Product key={i + product.name} product={product} />;
          })}
      </div>
    </section>
  );
}
