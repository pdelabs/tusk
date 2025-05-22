"use client";

import Image from "next/image";
import { useTranslations } from "../context/translations/TranslationsProvider";
import About from "./About";
import Products from "./Products";
import Global from "./Global";
import Contact from "./Contact";
import WhyChooseUs from "./WhyChooseUs";
import Header from "./Header";

export default function Home() {
  const { translations: t } = useTranslations();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <About />
        <Products />
        <Global />
        <Contact />
        <WhyChooseUs />
      </main>
    </div>
  );
}

const HeroSection = () => {
  const { translations: t } = useTranslations();
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagen1.jpg"
          alt="Food trading background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl space-y-5">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="w-full sm:w-auto">{t.exploreProducts}</button>
            <button className="w-full sm:w-auto border-white text-white hover:bg-white/10">
              {t.contactUs}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
