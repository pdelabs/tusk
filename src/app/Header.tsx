"use client";
import { useState } from "react";
import { useTranslations } from "../context/translations/TranslationsProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { translations: t } = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#hero" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/logo.png"
              alt="TUSK Trade Company Logo"
              width={180}
              height={40}
              className="rounded-full"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            {t.about}
          </Link>
          <Link href="#products" className="text-sm font-medium hover:text-primary">
            {t.products}
          </Link>
          <Link href="#global" className="text-sm font-medium hover:text-primary">
            {t.globalReach}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            {t.contact}
          </Link>
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="#contact-form">
            <Button variant="primary">{t.getInTouch}</Button>
          </Link>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-1 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur px-4 py-4 flex flex-col gap-4">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            {t.about}
          </Link>
          <Link
            href="#products"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            {t.products}
          </Link>
          <Link
            href="#global"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            {t.globalReach}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            {t.contact}
          </Link>
          <Link href="#contact-form" onClick={() => setMenuOpen(false)}>
            <Button variant="primary" className="w-full">{t.getInTouch}</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
