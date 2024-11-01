import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Catamaran, Montserrat } from "next/font/google";
import "./globals.css";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import { ProductsProvider } from "./context/productContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${catamaran.variable} ${montserrat.variable} antialiased`}
      >
        <ProductsProvider>
          <Navbar />
            <div className="md:px-40 w-full h-full">
              <Hero />
                <div className="w-full h-full">
                  <ProductSection />
                </div>
              <div className="px-20">
                {children}
              </div>
            </div>
        </ProductsProvider>
      </body>
    </html>
  );
}
