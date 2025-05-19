import esTranslations from "./es";
import enTranslations from "./en";
import cnTranslations from "./cn";

import { Lang, Translations } from "./types";

const translations: Record<Lang, Translations> = {
  en: enTranslations,
  es: esTranslations,
  cn: cnTranslations
} as const;

export default translations;
