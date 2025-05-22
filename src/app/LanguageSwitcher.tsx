"use client";
import { useTranslations } from "../context/translations/TranslationsProvider";
import { Lang } from "../context/translations/types";
import { FC } from "react";

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

export default LanguageSwitcher;

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
