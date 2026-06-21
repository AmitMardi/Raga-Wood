import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  href: string;
  imageSrc: string;
  title: string;
  subtitle?: string;
}

export default function ProductCard({ href, imageSrc, title, subtitle }: ProductCardProps) {
  return (
    <Link href={href} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-0">{title}</h3>
        {subtitle && <p className="text-neutral-muted mt-2 text-sm">{subtitle}</p>}
      </div>
    </Link>
  );
}
