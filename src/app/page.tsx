'use client'
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center mt-24 mb-24">
       <div className="md:px-40 w-full h-full">
          <Hero />
          <div className="w-full h-full">
            <ProductSection />
          </div>
       </div>
    </div>
  );
}
