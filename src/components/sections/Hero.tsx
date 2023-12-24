import Button from "../shared/Button";
import InViewScroll from "../shared/InViewScroll";
import HeroImageSlider from "../shared/HeroImageSlider";

export default function Hero() {
  return (
    <section className="h-[500px] tablet:h-[600px] w-full pt-20 pl-5 tablet:pl-16 ">
      <div className="absolute top-[10%] left-[40%] text-8xl text-yellow-200 animate-spin-slow">
        <InViewScroll
          classNameInView="duration-1000 delay-300 animate-in fade-in fill-mode-backwards"
          classNameNotInView="duration-100 delay-300 animate-out fade-out fill-mode-forwards"
        >
          ✴
        </InViewScroll>
      </div>
      <div className="absolute top-[10%] right-[12%] text-4xl text-gray-900 animate-spin-slow">
        <InViewScroll
          classNameInView="duration-1000 delay-300 animate-in fade-in fill-mode-backwards"
          classNameNotInView="duration-100 delay-300 animate-out fade-out fill-mode-forwards"
        >
          ✶
        </InViewScroll>
      </div>
      <div className="flex gap-5 justify-between flex-col-reverse tablet:flex-row ">
        <div className="hidden tablet:block">
          <div className="font-semibold text-[3.4rem] mt-16 leading-tight">
            <InViewScroll
              classNameInView="duration-1000 animate-in slide-in-from-top fade-in fill-mode-forwards"
              classNameNotInView="duration-100 animate-out slide-out-to-bottom fade-out fill-mode-forwards"
            >
              <h1>Make Your Fashion</h1>
            </InViewScroll>
            <InViewScroll
              classNameInView="duration-1000 delay-300 animate-in slide-in-from-top fade-in fill-mode-backwards"
              classNameNotInView="duration-100 delay-300 animate-out slide-out-to-bottom fade-out fill-mode-forwards"
            >
              <h1>Look More Charming</h1>
            </InViewScroll>
          </div>

          <InViewScroll
            classNameInView="duration-1000 delay-300 animate-in fade-in fill-mode-backwards"
            classNameNotInView="duration-100 delay-300 animate-out fade-out fill-mode-forwards"
          >
            <div className="flex gap-10 text-[12px] mt-5 font-bold">
              <div>
                <div>Price</div>
                <div className="text-2xl font-extrabold mt-2" style={{ fontFamily: "system-ui,sans-serif" }}>
                  $167
                </div>
              </div>
              <div>
                <div>Select Size</div>
                <div className="text-2xl font-extrabold mt-2 flex gap-2">
                  <Button type="icon">X</Button>
                  <Button type="icon">M</Button>
                  <Button type="icon">S</Button>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-10">
              <Button type="fill">ADD TO CART</Button>
              <Button type="outline">VIEW DETAILS</Button>
            </div>
          </InViewScroll>
          <InViewScroll
            classNameInView="duration-1000 delay-600 animate-in fade-in fill-mode-backwards"
            classNameNotInView="duration-100 delay-600 animate-out fade-out fill-mode-forwards"
          >
            <div className="mt-20  gap-2 desktop:flex hidden ">
              <div className="text-6xl">✲</div>
              <div>
                <div className="text-[10px] font-bold">Summer Collection</div>
                <div className="text-sm font-medium mt-1">
                  TRENDY AND CLASSIC <br />
                  FOR THE NEW SEASON
                </div>
              </div>
            </div>
          </InViewScroll>
        </div>
        <HeroImageSlider />
      </div>
    </section>
  );
}
