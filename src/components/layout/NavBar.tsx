"use client";
import { GlobalContext } from "@/Providers/context/Global.context";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { IProduct } from "@/components/Product";
export default function Nav() {
  const pathname = usePathname();
  const isCurrentPath = (isCurrentPath: boolean) => (isCurrentPath ? "font-bold text-zinc-700" : "text-zinc-400");
  const { state, dispatch } = useContext(GlobalContext);
  const [cart, setCart] = useState<IProduct[]>([]);
  const cartIconRef = useRef<HTMLElement | null>(null);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    setCart(state.cart);

    cartIconRef.current?.classList.add("animate-in");
    cartIconRef.current?.classList.add("zoom-in-150");

    setTimeout(() => {
      cartIconRef.current?.classList.remove("animate-in");
      cartIconRef.current?.classList.remove("zoom-in-150");
    }, 500);
  }, [state.cart, cartIconRef]);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        scroll > 100 ? "bg-white " : "bg-[var(--background)] "
      } transition-all py-[8px] px-10 border-b-[1px] border-bg-[var(--background-dark)] flex justify-between items-center  text-xs font-medium leading-3 fixed w-full z-10`}
    >
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src="/assets/imgs/logo.png" alt="logo" width={100} height={40} style={{ minWidth: 100 }} />
        </Link>
        <ul className=" ml-8 gap-8  tablet:flex hidden  ">
          <Link href="/">
            <li
              className={`${isCurrentPath(
                pathname === "/"
              )} flex items-center gap-1   hover:text-zinc-900  hover:cursor-pointer transition duration-300`}
            >
              <span className="text-zinc-900 ">Home </span>
              <span className="text-sm ">✦</span>
            </li>
          </Link>
          <Link href="/shop">
            <li
              className={` ${isCurrentPath(
                pathname.indexOf("/shop") > -1
              )} flex items-center gap-1 text-zinc-400 hover:text-zinc-900  hover:cursor-pointer transition duration-300`}
            >
              <span className="text-zinc-900 ">Shop </span>
              <span className="text-sm ">✦</span>
            </li>
          </Link>
          <li className="flex items-center gap-1 text-zinc-400 hover:text-zinc-900  hover:cursor-pointer transition duration-300">
            <span className="text-zinc-900 ">Blog </span>
            <span className="text-sm ">✦</span>
          </li>
          <li className="flex items-center gap-1 text-zinc-400 hover:text-zinc-900  hover:cursor-pointer transition duration-300">
            <span className="text-zinc-900 ">Portfolio </span>
            <span className="text-sm ">✦</span>
          </li>
          <li className="flex items-center gap-1 text-zinc-400 hover:text-zinc-900 hover:cursor-pointer transition duration-300">
            <span className="text-zinc-900">Pages </span>
            <span className="text-sm ">✦</span>
          </li>
        </ul>
      </div>
      <span className="flex gap-10 items-center">
        <span className="border-b border-solid border-gray-400 hover:cursor-pointer laptop:flex hidden ">
          Login / Register{" "}
        </span>
        <div className="flex gap-5 text-sm" style={{ lineHeight: 0 }}>
          <i className="fi fi-rr-search hover:-translate-y-[2px] hover:cursor-pointer transition duration-300 "></i>
          <i className="fi fi-rr-heart hover:-translate-y-[2px] hover:cursor-pointer transition duration-300"></i>

          <span
            className="relative"
            onClick={() => {
              dispatch({ type: "SET_MODAL", payload: true });
            }}
          >
            <i className="fi fi-rr-shopping-cart hover:-translate-y-[2px] hover:cursor-pointer transition duration-300"></i>
            {cart.length > 0 && (
              <span
                ref={cartIconRef}
                style={{ lineHeight: "20px" }}
                className="duration-500 bg-red-500  px-2 leading-2 left-[10px] top-[7px] rounded-full text-[10px] font-bold text-white absolute"
              >
                {cart.length}
              </span>
            )}
          </span>
        </div>
        <div className="w-6 h-3 flex flex-col justify-between ">
          <span className="bg-gray-700 h-[2px] w-full rounded"></span>

          <span className="bg-gray-700 h-[2px] w-full rounded"></span>
        </div>
      </span>
    </nav>
  );
}
