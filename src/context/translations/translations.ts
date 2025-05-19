import esTranslations from "./es";
import enTranslations from "./en";
import { Lang, Translations } from "./types";

const translations: Record<Lang, Translations> = {
  en: enTranslations,
  es: esTranslations,
} as const;

export default translations;
