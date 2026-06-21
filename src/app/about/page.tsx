import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | RAGA Wood and Veneer",
  description: "Learn about RAGA Wood and Veneer, established in 2012, and our mission to provide complete interior solutions.",
};

export default function About() {
  return (
    <>
      <section 
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-center text-white relative"
        style={{ backgroundImage: "url('/assets/gallery1.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 px-5">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200">Your trusted interior-product specialist in Eastern India.</p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg">
              RAGA is among the leading suppliers of Plywood, Laminate, Veneer, Highlighter, Wallpaper and Antique Furniture. Established in 2012, we have built a reputation as a leading interior-product specialist in Eastern India. Our ultimate vision is to provide <strong>complete interior solutions</strong> that transform spaces.
            </p>
          </div>
          
          <hr className="my-16 border-gray-200" />
          
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Mission</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-lg">
                <span className="text-secondary text-2xl font-bold mt-1">✓</span>
                Offer the most comprehensive range of solutions for comfort, beauty, and elegance.
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-secondary text-2xl font-bold mt-1">✓</span>
                Insist on quality and be passionate about it.
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-secondary text-2xl font-bold mt-1">✓</span>
                Operate at the highest level of ethics with everyone associated.
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-secondary text-2xl font-bold mt-1">✓</span>
                Generate trust by keeping promises, not just making them.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-3xl font-bold mb-12">Our Key Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-100 p-8 text-center rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl text-secondary mb-3">💎</div>
              <h3 className="font-semibold text-lg">Quality</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 text-center rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl text-secondary mb-3">🤝</div>
              <h3 className="font-semibold text-lg">Team Work</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 text-center rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl text-secondary mb-3">💻</div>
              <h3 className="font-semibold text-lg">Technology Driven</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 text-center rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl text-secondary mb-3">🦺</div>
              <h3 className="font-semibold text-lg">Safety</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 text-center rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl text-secondary mb-3">💡</div>
              <h3 className="font-semibold text-lg">Innovation</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 text-center rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl text-secondary mb-3">🎯</div>
              <h3 className="font-semibold text-lg">Customer Oriented</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 text-center rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl text-secondary mb-3">⚖️</div>
              <h3 className="font-semibold text-lg">Integrity</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 text-center rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl text-secondary mb-3">❤️</div>
              <h3 className="font-semibold text-lg">Dedication</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold">24/7 Support</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold">Years of Experience</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold">Sensational Products</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
