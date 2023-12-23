import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 py-5 mt-10 border-gray-600 ">
      <div className="max-w-screen-lg  mx-auto ">
        <div className="flex flex-col tablet:flex-row px-10 tablet:px-0 gap-2 pt-3 tablet:pt-10  tablet:gap-10 text-xs leading-5 justify-center">
          <div className="flex flex-col justify-between">
            <div>
              <Image src="/assets/imgs/logo.png" alt="logo" width={103} height={40} />
              <div>Address : Yemen Sanaa </div>
              <div>E-mail : Abdullah.Altahery@gmail.com </div>
              <div>Phone : 00967735758308 </div>
            </div>
            <div className=" font-bold">Subscribe To Our Newsletter</div>
          </div>
          <div>
            <div className="mt-3 font-bold text-sm">Recent Posts</div>
            <div className="flex gap-3  items-center p-1 rounded-xl hover:bg-gray-300  hover:cursor-pointer transition duration-300">
              <Image
                className="rounded-xl"
                src="/assets/imgs/fashion/download (5).png"
                width={50}
                height={50}
                alt="product"
              />
              <div className="text-[10px] leading-3">
                <div className="font-bold ">Woaden Water Bottles</div>
                <div className="text-gray-600 ">July 23,203</div>
              </div>
            </div>
            <div className="flex gap-3  items-center p-1 rounded-xl hover:bg-gray-300  hover:cursor-pointer transition duration-300">
              <Image
                className="rounded-xl"
                src="/assets/imgs/fashion/download (9).png"
                width={50}
                height={50}
                alt="product"
              />
              <div className="text-[10px] leading-3">
                <div className="font-bold ">Eco friendly bags</div>
                <div className="text-gray-600 ">July 23,203</div>
              </div>
            </div>
            <div className="flex gap-3  items-center p-1 rounded-xl hover:bg-gray-300  hover:cursor-pointer transition duration-300">
              <Image
                className="rounded-xl"
                src="/assets/imgs/fashion/download (6).png"
                width={50}
                height={50}
                alt="product"
              />
              <div className="text-[10px] leading-3">
                <div className="font-bold ">Bomboo toothbrushes</div>
                <div className="text-gray-600 ">July 23,203</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-3 font-bold text-sm">Our Story</div>
            <div className="flex flex-col gap-2 mt-2">
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">London SF</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">New York</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Edinburgh</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Yemen</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Loas Vagas</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Chicago</a>
            </div>
          </div>
          <div>
            <div className="mt-3 font-bold text-sm">Useful Links</div>
            <div className="flex flex-col gap-2 mt-2">
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Privacy Policy</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Returns</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">
                Terms And Conditions
              </a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Contact Us</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Latest News</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Our Sitemap</a>
            </div>
          </div>
          <div>
            <div className="mt-3 font-bold text-sm">Footer Menu</div>
            <div className="flex flex-col gap-2 mt-2">
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Instagram profile</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">New Collection</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Woman Dresses</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Contact Us</a>
              <a className="hover:-translate-y-[2px] hover:cursor-pointer transition duration-300">Latest News</a>
            </div>
          </div>
        </div>
        <div className="border-t-2 py-2 mt-10 border-gray-200"></div>
        <div className="text-[10px] flex justify-between items-center flex-col tablet:flex-row">
          <div>© 2023 DexignZone Theme. All Rights Reserved. - Developed By altahery.com</div>
          <div className="flex gap-2  items-center">
            <div>We Accept : </div> <Image src="/assets/imgs/payments.png" alt="me" width="150" height="150" />
          </div>
        </div>
      </div>
    </footer>
  );
}
