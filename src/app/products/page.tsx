import { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Our Products | RAGA Wood and Veneer",
  description: "Explore our wide range of interior surfaces including Veneer, Laminate, Highlighter, and Wall Paper.",
};

export default function Products() {
  return (
    <>
      <section className="bg-primary text-white py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-200">Premium materials for extraordinary spaces.</p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              href="/products/veneer" 
              imageSrc="/assets/veneer.png" 
              title="Veneer" 
              subtitle="Natural & Premium Wood Veneers"
            />
            <ProductCard 
              href="/products/laminate" 
              imageSrc="/assets/laminate.png" 
              title="Laminate" 
              subtitle="1mm, PVC, Acrylic & UPVC Laminates"
            />
            <ProductCard 
              href="/products/highlighter" 
              imageSrc="/assets/highlighter.png" 
              title="Highlighter" 
              subtitle="Charcoal, Panels, Planks & Mouldings"
            />
            <ProductCard 
              href="/products/wallpaper" 
              imageSrc="/assets/wallpaper.png" 
              title="Wall Paper" 
              subtitle="Elegant patterns and textures"
            />
          </div>
          
          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold mb-6">Want to experience more such exceptional products?</h3>
            <div className="flex justify-center gap-4">
              <Link href="/gallery" className="btn btn-primary">Visit Us (Gallery)</Link>
              <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
