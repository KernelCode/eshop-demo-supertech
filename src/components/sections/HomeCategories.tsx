import Image from "next/image";
import Button from "../shared/Button";

export default function HomeCategories() {
  return (
    <section className="  mt-5 phone:mt-16  bg-yellow-200 ">
      <div className="w-[200px] tablet:w-[300px] absolute">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fffaf3"
            fillOpacity="1"
            d="M0,192L8.3,202.7C16.6,213,33,235,50,218.7C66.2,203,83,149,99,112C115.9,75,132,53,149,37.3C165.5,21,182,11,199,10.7C215.2,11,232,21,248,48C264.8,75,281,117,298,160C314.5,203,331,245,348,234.7C364.1,224,381,160,397,149.3C413.8,139,430,181,447,192C463.4,203,480,181,497,144C513.1,107,530,53,546,42.7C562.8,32,579,64,596,90.7C612.4,117,629,139,646,144C662.1,149,679,139,695,128C711.7,117,728,107,745,106.7C761.4,107,778,117,794,128C811,139,828,149,844,138.7C860.7,128,877,96,894,69.3C910.3,43,927,21,943,10.7C960,0,977,0,993,10.7C1009.7,21,1026,43,1043,69.3C1059.3,96,1076,128,1092,160C1109,192,1126,224,1142,213.3C1158.6,203,1175,149,1192,106.7C1208.3,64,1225,32,1241,42.7C1257.9,53,1274,107,1291,149.3C1307.6,192,1324,224,1341,240C1357.2,256,1374,256,1390,224C1406.9,192,1423,128,1432,96L1440,64L1440,0L1431.7,0C1423.4,0,1407,0,1390,0C1373.8,0,1357,0,1341,0C1324.1,0,1308,0,1291,0C1274.5,0,1258,0,1241,0C1224.8,0,1208,0,1192,0C1175.2,0,1159,0,1142,0C1125.5,0,1109,0,1092,0C1075.9,0,1059,0,1043,0C1026.2,0,1010,0,993,0C976.6,0,960,0,943,0C926.9,0,910,0,894,0C877.2,0,861,0,844,0C827.6,0,811,0,794,0C777.9,0,761,0,745,0C728.3,0,712,0,695,0C678.6,0,662,0,646,0C629,0,612,0,596,0C579.3,0,563,0,546,0C529.7,0,513,0,497,0C480,0,463,0,447,0C430.3,0,414,0,397,0C380.7,0,364,0,348,0C331,0,314,0,298,0C281.4,0,265,0,248,0C231.7,0,215,0,199,0C182.1,0,166,0,149,0C132.4,0,116,0,99,0C82.8,0,66,0,50,0C33.1,0,17,0,8,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-5 tablet:gap-20 items-end py-5 w-full tablet:w-3/4 justify-center">
          <div className="flex flex-col items-center">
            <Image src="/assets/imgs/wears/1.png" width={100} height={100} alt="product" />
            <Button type="fill-white" size="small" rounded="rounded-full">
              Shirts
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/imgs/wears/2.png" width={100} height={100} alt="product" />
            <Button type="fill-white" size="small" rounded="rounded-full">
              shorts
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/imgs/wears/3.png" width={100} height={100} alt="product" />
            <Button type="fill-white" size="small" rounded="rounded-full">
              t-Shirt
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/imgs/wears/4.png" width={100} height={100} alt="product" />
            <Button type="fill-white" size="small" rounded="rounded-full">
              Jeans
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/imgs/wears/4.png" width={100} height={100} alt="product" />
            <Button type="fill-white" size="small" rounded="rounded-full">
              Jeans
            </Button>
          </div>
        </div>
        <div className="bg-black  text-white px-14 w-1/4 hidden tablet:block">
          <h2 className="font-semibold text-2xl mt-10">Featured Categories</h2>
          <div className="text-xs font-light leading-4 mt-2">Discover the most trending products in mooncart.</div>
          <div className="text-sm text-gray-100 gap-5 flex mt-2">
            <i className="fi fi-rr-arrow-left hover:-translate-x-[2px] hover:cursor-pointer transition duration-300 "></i>
            <i className="fi fi-rr-arrow-right hover:-translate-x-[-2px] hover:cursor-pointer transition duration-300 "></i>
          </div>
        </div>
      </div>
    </section>
  );
}
