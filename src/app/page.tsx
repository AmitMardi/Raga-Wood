import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <section 
        className="h-screen min-h-[600px] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-5 relative z-10 text-white">
          <div className="max-w-[800px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Believe — A house is made of walls and beams; a home is built with love and dreams.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Discover our premium collection of veneers, laminates, and highlighters for boundary-less creativity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn btn-primary">Explore Products</Link>
              <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-16 section-bg">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-2xl md:text-3xl font-light text-primary max-w-[800px] mx-auto italic">
            "Creativity and dreams flourish best when there are no boundaries or restrictions."
          </p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-3xl font-bold mb-12">Our Premium Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard href="/products/veneer" imageSrc="/assets/veneer.png" title="Veneer" />
            <ProductCard href="/products/laminate" imageSrc="/assets/laminate.png" title="Laminate" />
            <ProductCard href="/products/highlighter" imageSrc="/assets/highlighter.png" title="Highlighter" />
            <ProductCard href="/products/wallpaper" imageSrc="/assets/wallpaper.png" title="Wall Paper" />
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">About RAGA</h2>
          <p className="text-lg mb-8">
            RAGA is among the leading suppliers of Plywood, Laminate, Veneer, Highlighter, Wallpaper and Antique Furniture. Established in 2012, we have built a reputation as a leading interior-product specialist in Eastern India, with a vision to provide complete interior solutions.
          </p>
          <Link href="/about" className="btn btn-primary">Read More</Link>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-neutral-muted">Uncompromising standards for all our interior surfaces.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-neutral-muted">Always here to assist with your project needs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
              <p className="text-neutral-muted">Industry leaders in Eastern India since 2012.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Sensational Products</h3>
              <p className="text-neutral-muted">Aesthetically pleasing and durable materials.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-4">For Architects & Interior Designers</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-[600px] mx-auto">
            Let's collaborate to bring your visionary spaces to life with our premium surface materials.
          </p>
          <Link href="/contact" className="btn btn-secondary px-10 py-4 text-lg">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
}
