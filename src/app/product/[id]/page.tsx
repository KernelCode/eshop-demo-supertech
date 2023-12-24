import { Metadata, ResolvingMetadata } from "next";
import Badge from "@/components/shared/Badge";
import CurrentPath from "@/components/layout/CurrentPath";
import Product, { IProduct } from "@/components/shared/Product";
import { products } from "@/data.json";
import Image from "next/image";
import ProductImage from "@/components/shared/ProductImage";
import ProductOrderSection from "@/components/shared/ProductOrderSection";
import Link from "next/link";
import Stars from "@/components/shared/Stars";

// page props
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
// we generate title based on the id passed in the url
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { id } = params;
  const product: IProduct = products.find((p) => p.productId === id)!;

  return {
    title: "Eshop Product: " + product.name,
  };
}

export default function Products({ params }: { params: { id: string } }) {
  const { id } = params;
  const product: IProduct = products.find((p) => p.productId === id)!;
  return (
    <main className="mt-[20px] tablet:mt-[60px] mx-2 tablet:mx-10">
      <CurrentPath type="short" />
      <section className="flex gap-5 flex-col tablet:flex-row">
        <div className="w-full phone:w-[33%] max-w-auto phone:max-w-[400px] min-w-auto phone:min-w-[300px] rounded-3xl overflow-hidden">
          <ProductImage product={product} />
        </div>

        <div className="w-full tablet:w-[43%]">
          {product.isOnSale && (
            <div className="mt-5  px-3  rounded-[4px] text-[9px]  bg-black text-white leading-5 font-semibold w-fit ">
              GET <span style={{ fontFamily: "sans-serif" }}>20%</span> OFF
            </div>
          )}
          <h1 className="font-medium text-3xl mt-2">{product.name}</h1>
          <div className="mt-1">
            <Stars rating={3.7} />
          </div>
          <p className="mt-1 text-gray-600 text-xs leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="flex gap-16 mt-5 ">
            <div>
              <div className=" text-xs font-medium">Quantity</div>
              <div className="relative mb-6 flex gap-1 mt-3 flex-wrap">
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
            <div>
              <div className="text-xs font-medium">Size</div>
              <div className="relative mb-6 flex gap-1 mt-3 flex-wrap">
                <Badge size="m">S</Badge>
                <Badge size="m" selected>
                  M
                </Badge>
                <Badge size="m">L</Badge>
              </div>
            </div>
            <div>
              <div className="text-xs font-medium">Color</div>
              <div className="relative mb-6 flex gap-1 mt-3">
                <div className="cursor-pointer border-2 border-gray-900 p-1 rounded-full">
                  <div className="bg-red-400 w-[12px] h-[12px] rounded-full "></div>
                </div>
                <div className="cursor-pointer border-2 border-transparent p-1 rounded-full">
                  <div className="bg-blue-400 w-[12px] h-[12px] rounded-full"></div>
                </div>
                <div className="cursor-pointer border-2 border-transparent p-1 rounded-full">
                  <div className="bg-yellow-400 w-[12px] h-[12px] rounded-full"></div>
                </div>
                <div className="cursor-pointer border-2 border-transparent p-1 rounded-full">
                  <div className="bg-green-400 w-[12px] h-[12px] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" border-b-[1px]  border-[var(--background-lightdark)] "></div>
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
        <div className="w-[24%] max-w-[250px] hidden laptop:block ">
          <ProductOrderSection product={product} />
        </div>
      </section>
      <section className="text-center w-full tablet:w-[80%] m-auto ">
        <div className="flex justify-center items-center gap-10 w-full mt-20 text-xs font-semibold">
          <div className="py-2 border-b-2 border-black cursor-pointer">Description</div>
          <div className="py-2 cursor-pointer">Reviews 12</div>
        </div>
        <div className=" border-b-[1px]  border-[var(--background-lightdark)]  "></div>
        <div className="mt-10">
          <div className="text-xs font-semibold"> Flawless Denim Delights</div>
          <p className="mt-1 text-gray-600 text-xs leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-5 mt-10 flex-col tablet:flex-row">
            <div className="flex gap-2">
              <Badge size="m" disabled>
                <i className="fi fi-rr-check"></i>
              </Badge>
              <div>Versatile, enduring style for all accasions</div>
            </div>
            <div className="flex gap-2">
              <Badge size="m" disabled>
                <i className="fi fi-rr-check"></i>
              </Badge>
              <div>Handcrafted Elegance, Comfort</div>
            </div>
            <div className="flex gap-2">
              <Badge size="s" disabled>
                <i className="fi fi-rr-check"></i>
              </Badge>
              <div>Versatile, enduring style for all accasions</div>
            </div>
          </div>
          <div className="mt-10 flex gap-5 flex-wrap tablet:flex-nowrap">
            <Image src={product.image} alt="product" width={300} height={300} className="tablet:w-[300px] w-[180px]" />
            <Image src={product.image} alt="product" width={300} height={300} className="tablet:w-[300px] w-[180px]" />
            <Image src={product.image} alt="product" width={300} height={300} className="tablet:w-[300px] w-[180px]" />
          </div>
          <div className="mt-20 text-left flex justify-between">
            <h1 className="font-medium text-xl ">Related products</h1>
            <Link href={`/shop?cats=${product.category}`}>
              <h1 className="font-medium text-[11px] flex justify-center items-center gap-1 " style={{ lineHeight: 0 }}>
                See All Products <i className="fi fi-rr-angle-small-right"></i>
              </h1>
            </Link>
          </div>

          <div className="flex gap-4 justify-center tablet:justify-between mt-5 flex-wrap tablet:flex-nowrap">
            {products.slice(0, 4).map((product, i) => {
              return (
                <div key={product.productId + i}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
