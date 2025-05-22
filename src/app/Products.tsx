"use client";
import { Beef, Drumstick, Milk, Wheat, Apple, Ham } from "lucide-react";
import ProductCard from "./ProductCard";

import { useTranslations } from "../context/translations/TranslationsProvider";

const Products = () => {
  const { translations: t } = useTranslations();
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
          <ProductCard
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Premium beef products"
            icon={<Beef className="h-6 w-6 text-primary" />}
            title={t.beef}
            description={t.beefDesc}
            learnMoreText={t.learnMore}
          />
          <ProductCard
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Lamb and mutton products"
            icon={<Ham className="h-6 w-6 text-primary" />}
            title={t.lamb}
            description={t.lambDesc}
            learnMoreText={t.learnMore}
          />
          <ProductCard
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Dairy products"
            icon={<Milk className="h-6 w-6 text-primary" />}
            title={t.dairy}
            description={t.dairyDesc}
            learnMoreText={t.learnMore}
          />
          <ProductCard
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Poultry products"
            icon={<Drumstick className="h-6 w-6 text-primary" />}
            title={t.poultry}
            description={t.poultryDesc}
            learnMoreText={t.learnMore}
          />
          <ProductCard
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Grain products"
            icon={<Wheat className="h-6 w-6 text-primary" />}
            title={t.grains}
            description={t.grainsDesc}
            learnMoreText={t.learnMore}
          />
          <ProductCard
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Animal feed products"
            icon={<Apple className="h-6 w-6 text-primary" />}
            title={t.animalFeed}
            description={t.animalFeedDesc}
            learnMoreText={t.learnMore}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
