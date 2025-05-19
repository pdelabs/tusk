"use client";
import { createContext, useContext, useState } from "react";
import { Lang, TranslationContextType, Translations } from "./types";
import translationsData from "./translations";

// Set dynamically depending on the user's browser language
const DEFAULT_LANG: Lang = "en";

const TranslationContext = createContext<TranslationContextType | null>(null);

const TranslationsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const [translations, setTranslations] = useState<Translations>(
    translationsData[lang]
  );

  const changeLanguage = (newLang: Lang) => {
    setLang(newLang);
    setTranslations(translationsData[newLang]);
  };

  return (
    <TranslationContext.Provider
      value={{ lang, setLang: changeLanguage, translations }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

function useTranslations(): TranslationContextType {
  const value = useContext(TranslationContext);
  if (!value) {
    throw new Error(
      "useTranslations must be used within a TranslationsProvider"
    );
  }
  return value;
}

export { TranslationsProvider, TranslationContext, useTranslations };

export default TranslationsProvider;
