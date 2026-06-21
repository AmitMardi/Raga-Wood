import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-dark text-white pt-16 pb-5">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-5 text-white">Contact Info</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Ragawood Veneers Pvt Ltd.<br />
              403/1, Dakshindari Road,<br />
              ALCOVE GLORIA Mall, Shop No. 1,<br />
              VIP, Golaghat, Kolkata – 700048,<br />
              West Bengal, India
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Phone: +91 8017757170<br />
              Email: ragawoodveneers@gmail.com
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-5 text-white">Quick Menu</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 text-sm hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 text-sm hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/applications" className="text-gray-400 text-sm hover:text-secondary transition-colors">Applications</Link></li>
              <li><Link href="/gallery" className="text-gray-400 text-sm hover:text-secondary transition-colors">Display Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 text-sm hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-5 text-white">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products/veneer" className="text-gray-400 text-sm hover:text-secondary transition-colors">Veneer</Link></li>
              <li><Link href="/products/laminate" className="text-gray-400 text-sm hover:text-secondary transition-colors">Laminate</Link></li>
              <li><Link href="/products/highlighter" className="text-gray-400 text-sm hover:text-secondary transition-colors">Highlighter</Link></li>
              <li><Link href="/products/wallpaper" className="text-gray-400 text-sm hover:text-secondary transition-colors">Wall Paper</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-5 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-1 transition-all"><i className="fa-brands fa-facebook-f text-white text-xl"></i></a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-1 transition-all"><i className="fa-brands fa-x-twitter text-white text-xl"></i></a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-1 transition-all"><i className="fa-brands fa-instagram text-white text-xl"></i></a>
            </div>
          </div>
        </div>

        <div className="text-center pt-5 border-t border-white/10 text-gray-400 text-sm">
          <p>&copy; {year} Ragawood Veneers Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
