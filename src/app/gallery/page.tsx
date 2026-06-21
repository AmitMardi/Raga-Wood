import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Display Gallery | RAGA Wood and Veneer",
  description: "Take a look at our showroom and recent installations.",
};

export default function Gallery() {
  return (
    <>
      <section className="bg-primary text-white py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Display Gallery</h1>
          <p className="text-xl text-gray-200">Take a look at our showroom and recent installations.</p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-zoom-in">
              <Image src="/assets/gallery1.png" alt="Showroom Interior" width={800} height={600} className="w-full h-auto" />
            </div>
            <div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-zoom-in">
              <Image src="/assets/hero.png" alt="Living Room with Wood Panels" width={800} height={1000} className="w-full h-auto" />
            </div>
            <div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-zoom-in">
              <Image src="/assets/gallery1.png" alt="Showroom Laminates" width={800} height={700} className="w-full h-auto" />
            </div>
            <div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-zoom-in">
              <Image src="/assets/hero.png" alt="Modern Interior Space" width={800} height={500} className="w-full h-auto" />
            </div>
            <div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-zoom-in">
              <Image src="/assets/gallery1.png" alt="Showroom Overview" width={800} height={800} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
