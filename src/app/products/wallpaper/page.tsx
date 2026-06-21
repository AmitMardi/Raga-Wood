import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wall Paper Collection | RAGA Wood and Veneer",
  description: "Elegant patterns and textures to redefine your walls.",
};

const products = [
  { name: "Botanical Gold Accent", size: "Roll Size: 57 sq.ft", image: "/assets/wallpaper.png" },
  { name: "Minimalist Geometric", size: "Roll Size: 57 sq.ft", image: "/assets/wallpaper.png" },
  { name: "Textured Linen", size: "Roll Size: 57 sq.ft", image: "/assets/wallpaper.png" },
  { name: "Damask Classic", size: "Roll Size: 57 sq.ft", image: "/assets/wallpaper.png" },
];

export default function Wallpaper() {
  return (
    <>
      <section className="bg-primary text-white py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wall Paper Collection</h1>
          <p className="text-xl text-gray-200">Elegant patterns and textures to redefine your walls.</p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div key={i} className="text-center group">
                <div className="relative h-64 w-full mb-4 overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <span className="text-sm text-neutral-muted">{p.size}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold mb-6">Want to experience more such exceptional products?</h3>
            <div className="flex justify-center gap-4">
              <Link href="/gallery" className="btn btn-primary">Visit Us</Link>
              <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
