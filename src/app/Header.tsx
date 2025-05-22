"use client";
import { useTranslations } from "../context/translations/TranslationsProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";

const Header = () => {
  const { translations: t } = useTranslations();
  return (
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
  );
};

export default Header;
