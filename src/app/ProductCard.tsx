import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  learnMoreText: string;
}

const ProductCard = ({
  imageSrc,
  imageAlt,
  icon,
  title,
  description,
  learnMoreText,
}: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <Link
          href="#"
          className="mt-4 inline-flex items-center text-sm font-medium text-primary"
        >
          {learnMoreText} <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
