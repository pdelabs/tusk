"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Truck,
  Beef,
  Drumstick,
  Milk,
  Wheat,
  Apple,
  Phone,
  Mail,
  Ham,
} from "lucide-react";
import { useTranslations } from "../context/translations/TranslationsProvider";
import { Lang } from "../context/translations/types";
import { FC } from "react";
import Button from "../components/Button";

export default function Home() {
  const { translations: t } = useTranslations();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/logo.png"
              alt="TUSK Trade Company Logo"
              width={180}
              height={40}
              className="rounded-full"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              {t.about}
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium hover:text-primary"
            >
              {t.products}
            </Link>
            <Link
              href="#global"
              className="text-sm font-medium hover:text-primary"
            >
              {t.globalReach}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              {t.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="primary">{t.getInTouch}</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
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
               <Button variant="primary">{t.exploreProducts}</Button>
               <Button variant="primary">{t.contactUs}</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  {t.aboutTitle}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t.aboutText1}
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  {t.aboutText2}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">{t.qualityGuaranteed}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t.qualityText}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">{t.competitivePricing}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t.pricingText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Food trading operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {t.productsTitle}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.productsSubtitle}
              </p>
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

        <section id="global" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {t.globalTitle}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.globalSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/map.png"
                  alt="World map showing global trade routes"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">{t.supplierCountries}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{t.supplierText}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Uruguay</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Paraguay</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Brazil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Argentina</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Chile</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">{t.clientMarkets}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{t.clientText}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Russian Federation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>United Kingdom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Germany</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>China</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>United States</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{t.andMore}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {t.valueTitle}
              </h2>
              <p className="text-lg text-muted-foreground">{t.valueSubtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all">
                <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{t.qualityAssurance}</h3>
                <p className="text-muted-foreground">
                  {t.qualityAssuranceText}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {t.competitivePricingLong}
                </h3>
                <p className="text-muted-foreground">
                  {t.competitivePricingText}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{t.reliableDelivery}</h3>
                <p className="text-muted-foreground">
                  {t.reliableDeliveryText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 md:py-24 bg-primary text-primary-foreground"
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  {t.contactTitle}
                </h2>
                <p className="text-lg mb-8">{t.contactText}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                    <div>
                      <p>TUSK Trade Company</p>
                      <p>Mantua 6706 Of. 005</p>
                      <p>Montevideo, 11500</p>
                      <p>Uruguay</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 mt-1" />
                    <div>
                      <p>Tel./Fax: +598 2601 7071</p>
                      <p>U.S. Phone: +1 (305) 675 4272</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0" />
                    <span>contact@tusktrade.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-white text-foreground p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6">{t.contactFormTitle}</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t.fullName}
                      </label>
                      <input
                        id="name"
                        placeholder={t.yourName}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        {t.company}
                      </label>
                      <input
                        id="company"
                        placeholder={t.yourCompany}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t.yourEmail}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="products" className="text-sm font-medium">
                      {t.productsInterest}
                    </label>
                    <select
                      id="products"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">{t.selectProduct}</option>
                      <option value="beef">{t.beef}</option>
                      <option value="lamb">{t.lamb}</option>
                      <option value="poultry">{t.poultry}</option>
                      <option value="dairy">{t.dairy}</option>
                      <option value="horse">Horse Meat</option>
                      <option value="rice">Rice</option>
                      <option value="grains">{t.grains}</option>
                      <option value="feed">{t.animalFeed}</option>
                      <option value="multiple">Multiple Products</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      placeholder={t.messagePlaceholder}
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    ></textarea>
                  </div>
                  <button
                    className="w-full"
                    // size="lg"
                  >
                    {t.sendMessage}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <span className="text-primary">TUSK</span> Trade Company
              </div>
              <p className="text-sm text-muted-foreground">{t.footerText}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.productsFooter}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.beef}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.lamb}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.poultry}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.dairy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Horse Meat
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.grains}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.companyFooter}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#global"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.globalReachFooter}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.certifications}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.sustainability}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.legal}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.terms}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.cookies}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} TUSK Trade Company. {t.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const LanguageSwitcher = () => {
  const { setLang, lang } = useTranslations();
  const langs: Lang[] = ["en", "es", "cn", "ru"];

  return (
    <div className="flex items-center border rounded-md overflow-hidden">
      {langs.map((language) => (
        <LanguageSwitcherButton
          key={language}
          lang={language}
          isActive={lang === language}
          onClick={() => setLang(language)}
        />
      ))}
    </div>
  );
};

interface LanguageSwitcherButtonProps {
  lang: string;
  isActive: boolean;
  onClick: () => void;
}

const LanguageSwitcherButton: FC<LanguageSwitcherButtonProps> = ({
  lang,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 text-sm cursor-pointer ${
        isActive ? "bg-primary text-white" : "hover:bg-muted"
      }`}
    >
      {lang.toUpperCase()}
    </button>
  );
};

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
