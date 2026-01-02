"use client";
import type { ReactNode } from "react";
import { Beef, Drumstick, Milk, Wheat, Apple, Ham } from "lucide-react";
import ProductCard from "./ProductCard";
import { ProductKey } from "../context/translations/types";
import { useTranslations } from "../context/translations/TranslationsProvider";

const Products = () => {
  const { translations: t } = useTranslations();
  const products: Array<{
    key: ProductKey;
    imageSrc: string;
    imageAlt: string;
    icon: ReactNode;
    title: string;
    description: string;
  }> = [
    {
      key: "beef",
      imageSrc: "/products/beef.png",
      imageAlt: t.beef,
      icon: <Beef className="h-6 w-6 text-primary" />,
      title: t.beef,
      description: t.beefDesc,
    },
    {
      key: "lamb",
      imageSrc: "/products/mutton.png",
      imageAlt: t.lamb,
      icon: <Ham className="h-6 w-6 text-primary" />,
      title: t.lamb,
      description: t.lambDesc,
    },
    {
      key: "horse",
      imageSrc: "/products/horse.png",
      imageAlt: t.horse,
      icon: <Ham className="h-6 w-6 text-primary" />,
      title: t.horse,
      description: t.horseDesc,
    },
    {
      key: "dairy",
      imageSrc: "/products/dairy.png",
      imageAlt: t.dairy,
      icon: <Milk className="h-6 w-6 text-primary" />,
      title: t.dairy,
      description: t.dairyDesc,
    },
    {
      key: "poultry",
      imageSrc: "/products/chicken.png",
      imageAlt: t.poultry,
      icon: <Drumstick className="h-6 w-6 text-primary" />,
      title: t.poultry,
      description: t.poultryDesc,
    },
    {
      key: "animalFeed",
      imageSrc: "/products/animal_feed.png",
      imageAlt: t.animalFeed,
      icon: <Apple className="h-6 w-6 text-primary" />,
      title: t.animalFeed,
      description: t.animalFeedDesc,
    },
  ];
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t.productsTitle}
          </h2>
          <p className="text-lg text-muted-foreground">{t.productsSubtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.key}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              icon={product.icon}
              title={product.title}
              description={product.description}
              learnMoreText={t.learnMore}
              highlightsLabel={t.productHighlightsLabel}
              logisticsLabel={t.productLogisticsLabel}
              closeText={t.close}
              details={t.productDetails[product.key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
