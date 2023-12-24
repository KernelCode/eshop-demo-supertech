import Image from "next/image";
import Button from "../shared/Button";

export default function HomeSale() {
  return (
    <section className="  mt-16 mx-auto w-full tablet:w-[800px]  ">
      <div className="flex gap-10 tablet:flex-row flex-col">
        <div className="relative tablet:w-4/5 w-auto m-auto items-center">
          <Image
            src="/assets/imgs/fashion/5 (1).png"
            width={400}
            height={400}
            alt="product"
            className="w-[300px] tablet:w-[400px] "
          />
          <Button type="fill-white" size="large" className="absolute bottom-5 left-5">
            Woman Collection
          </Button>
        </div>
        <div className="flex flex-col justify-between tablet:px-0 px-6 ">
          <div>
            <div className="flex gap-5">
              <h1 className="font-semibold text-2xl">Set Your Wardrobe With Our Amazing Selection</h1>
              <div>
                <Button type="icon-fill" className="-rotate-45">
                  <i className="fi fi-rr-arrow-small-right "></i>
                </Button>
              </div>
            </div>
            <span className="font-light text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
          </div>
          <div className=" flex gap-10 items-center">
            <div className="relative ">
              <Image
                className="rounded-3xl"
                src="/assets/imgs/fashion/download (5).png"
                width={300}
                height={300}
                alt="product"
              />
              <Button type="fill-white" size="small" className="absolute bottom-2 left-5">
                Child Fashion
              </Button>
            </div>
            <div className="relative ">
              <Image
                className="rounded-3xl"
                src="/assets/imgs/fashion/man2.png"
                width={300}
                height={300}
                alt="product"
              />
              <Button type="fill-white" size="small" className="absolute bottom-2 left-5">
                Man Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
