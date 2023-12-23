import Marquee from "@/components/Marquee";
import Hero from "@/components/Sections/Hero";
import HomeCategories from "@/components/Sections/HomeCategories";
import HomeSale from "@/components/Sections/HomeSale";
import ProductsHome from "@/components/Sections/ProductsHome";

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
