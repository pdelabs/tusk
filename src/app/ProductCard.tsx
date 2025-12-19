import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog";
import { ProductDetail } from "../context/translations/types";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  learnMoreText: string;
  details: ProductDetail;
  highlightsLabel: string;
  logisticsLabel: string;
  closeText: string;
}

const ProductCard = ({
  imageSrc,
  imageAlt,
  icon,
  title,
  description,
  learnMoreText,
  details,
  highlightsLabel,
  logisticsLabel,
  closeText,
}: ProductCardProps) => {
  return (
    <Dialog>
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
          <DialogTrigger asChild>
            <button
              type="button"
              className="mt-4 inline-flex items-center text-sm font-medium text-primary"
            >
              {learnMoreText} <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </DialogTrigger>
        </div>
      </div>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{details.summary}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {highlightsLabel}
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {details.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {logisticsLabel}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {details.logistics}
            </p>
          </div>
        </div>
        <DialogFooter className="pt-2">
          <DialogClose asChild>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {closeText}
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;
