import type { Metadata } from "next";
import CurrentPath from "@/components/layout/CurrentPath";
import Input from "@/components/shared/Input";
import RangeSlider from "@/components/shared/RangeSider";
import Badge from "@/components/shared/Badge";
import Link from "next/link";
import Button from "@/components/shared/Button";

// page title
export const metadata: Metadata = {
  title: "Eshop Product Search",
  description: "Generated by create next app",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-[60px]">
      <CurrentPath title="Shop Standard" />
      <section className="   mx-2 my-1 tablet:my-4 tablet:mx-10 ">
        <div className="flex gap-4">
          <div className="w-[20%] hidden laptop:block ">
            <div className=" flex  gap-2 mb-2">
              <i className="fi fi-rr-settings-sliders"></i> <span className="text-sm">Filters</span>
            </div>
            <Input placeholder="Search Product" />
            <div className="mt-10 text-xs font-bold">Price</div>
            <div className="relative mb-6">
              <RangeSlider />
            </div>
            <div className="mt-14 text-xs font-bold">Color</div>
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
              <div className="cursor-pointer border-2 border-transparent p-1 rounded-full">
                <div className="bg-pink-400 w-[12px] h-[12px] rounded-full"></div>
              </div>
              <div className="cursor-pointer border-2 border-transparent p-1 rounded-full">
                <div className="bg-red-400 w-[12px] h-[12px] rounded-full"></div>
              </div>
            </div>
            <div className="mt-10 text-xs font-bold">Size</div>
            <div className="relative mb-6 flex gap-1 mt-3 flex-wrap">
              {[11, 22, 33, 44, 55, 66, 77, 88, 99].map((n) => (
                <Badge key={n}>{n}</Badge>
              ))}
            </div>
            <div className="mt-10 text-xs font-bold">Category</div>
            <div className="relative mb-6 flex gap-1 mt-3 flex-wrap">
              {["Dresses", "Taps", "Outerwear", "Activewear", "Swimwear", "Footwear", "Formalwear"].map((d, i) => (
                <div key={d} className="flex justify-between w-full text-xs mb-2 hover:font-bold cursor-pointer">
                  <div>{d}</div>
                  <div style={{ fontFamily: "sans-serif" }}>({i})</div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-xs font-bold">Tags</div>
            <div className="flex gap-1 mt-3 flex-wrap text-xs ">
              {["Dresses", "Taps", "Outerwear", "Activewear", "Swimwear", "Footwear", "Formalwear"].map((d, i) => (
                <div
                  key={d}
                  className="mb-1 border-2 border-gray-500 rounded-[5px] px-3 hover:text-white hover:bg-black hover:border-black cursor-pointer"
                >
                  <div>{d}</div>
                </div>
              ))}
            </div>
            <Link href="/shop">
              <Button type="fill" className="mt-10">
                Reset
              </Button>
            </Link>
          </div>
          <div className="w-[100%]  ">{children}</div>
        </div>
      </section>
    </main>
  );
}
