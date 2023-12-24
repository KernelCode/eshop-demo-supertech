import Marquee from "@/components/shared/Marquee";
import Hero from "@/components/sections/Hero";
import HomeCategories from "@/components/sections/HomeCategories";
import HomeSale from "@/components/sections/HomeSale";
import ProductsHome from "@/components/sections/ProductsHome";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeCategories />
      <HomeSale />
      <Marquee className="text-2xl tablet:text-5xl mt-20 py-5 border-t-2 border-b-2 border-gray-600  list-item">
        BOTTLE ✦ MATE ✦ BALL ✦ RING ✦ MATE ✦ BALL ✦
      </Marquee>
      <ProductsHome />
    </main>
  );
}
