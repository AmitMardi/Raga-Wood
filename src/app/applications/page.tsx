import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Applications | RAGA Wood and Veneer",
  description: "Curating a comprehensive guide to the applications of our premium interior surfaces.",
};

export default function Applications() {
  return (
    <div className="min-h-[calc(100vh-80px-300px)] flex flex-col items-center justify-center text-center px-5 py-20 section-bg">
      <div className="text-7xl mb-6">🚧</div>
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Coming Soon</h1>
      <p className="text-xl max-w-[600px] mx-auto mb-10 text-neutral-dark">
        We are currently curating a comprehensive guide to the applications of our premium interior surfaces. Check back soon for inspiring ideas and technical guidelines.
      </p>
      <Link href="/contact" className="btn btn-secondary px-8 py-4 text-lg">
        Get in touch with our experts
      </Link>
    </div>
  );
}
