import type { Metadata } from "next";
import "./globals.css";
import { GlobalContextProvider } from "@/Providers/context/Global.context";
import Nav from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { MouseTracker } from "@/Providers/MouseTracker";
import CartMenu from "@/components/layout/CartMenu";
import ProductQuickViewModal from "@/components/shared/ProductQuickViewModal";

// app metadata
export const metadata: Metadata = {
  title: "Eshop SuperTech Demo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          <Nav />
          {children}
          <Footer />
          <MouseTracker />
          <CartMenu />
          <ProductQuickViewModal />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
