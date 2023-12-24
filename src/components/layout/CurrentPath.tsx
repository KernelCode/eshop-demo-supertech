"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// This is a component to display the current page path to the user, such as "Home > Shop", "Home > Cart", etc.
// We detect the page by the pathname.
export default function CurrentPath({ title, type }: { title?: string; type?: "short" }) {
  const pathname = usePathname();
  if (type === "short") {
    return (
      <section className="py-2   ">
        <div className="flex leading-4 gap-3 mt-3 text-xs">
          {pathname.split("/").map((p, i) => {
            if (i > 1) return;
            if (p === "")
              return (
                <Link key={p} href={"/"}>
                  <div>Home</div>
                </Link>
              );
            return (
              <span key={p} className="contents">
                <i className="fi fi-rr-angle-small-right"></i>
                <Link href={"/" + p}> {p} </Link>
              </span>
            );
          })}
        </div>
      </section>
    );
  }
  return (
    <section className="py-5 tablet:py-20  bg-yellow-200 ">
      <div className="ml-10 tablet:ml-40">
        <div className=" font-bold text-3xl ">{title}</div>
        <div className="flex leading-4 gap-3 mt-3 text-xs">
          {pathname.split("/").map((p, i) => {
            if (i > 1) return;
            if (p === "")
              return (
                <Link key={p} href={"/"}>
                  <div>Home</div>
                </Link>
              );
            return (
              <span key={p} className="contents">
                <i className="fi fi-rr-angle-small-right"></i>
                <Link href={"/" + p}> {p} </Link>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
