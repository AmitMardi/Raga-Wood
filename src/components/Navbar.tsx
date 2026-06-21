"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md h-[70px]" : "shadow-sm h-[80px]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-full flex justify-between items-center relative">
        <Link href="/" className="logo h-12 relative flex items-center">
          <Image
            src="/assets/logo.png"
            alt="RAGA Wood and Veneer Logo"
            width={120}
            height={48}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        <button
          className="md:hidden text-2xl text-neutral-dark z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`absolute md:static top-[80px] md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out md:flex ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-0">
            <li>
              <Link href="/" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="relative group">
              <Link href="/products" className="font-medium hover:text-primary transition-colors cursor-pointer flex items-center gap-1" onClick={() => setIsOpen(false)}>
                Products ▾
              </Link>
              <ul className="md:absolute top-full left-0 bg-white md:shadow-lg rounded-md py-2 min-w-[200px] hidden group-hover:block transition-all z-50">
                <li><Link href="/products/veneer" className="block px-5 py-2 text-sm hover:bg-neutral-offwhite transition-colors" onClick={() => setIsOpen(false)}>Veneer</Link></li>
                <li><Link href="/products/laminate" className="block px-5 py-2 text-sm hover:bg-neutral-offwhite transition-colors" onClick={() => setIsOpen(false)}>Laminate</Link></li>
                <li><Link href="/products/highlighter" className="block px-5 py-2 text-sm hover:bg-neutral-offwhite transition-colors" onClick={() => setIsOpen(false)}>Highlighter</Link></li>
                <li><Link href="/products/wallpaper" className="block px-5 py-2 text-sm hover:bg-neutral-offwhite transition-colors" onClick={() => setIsOpen(false)}>Wall Paper</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/applications" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Applications
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Display Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="btn btn-secondary px-5 py-2 text-sm text-white" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
