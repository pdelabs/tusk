import Image from "next/image";
import { useTranslations } from "../context/translations/TranslationsProvider";

const About = () => {
  const { translations: t } = useTranslations();
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
      <div className="container">
        <div className="md:w-1/2 md:pr-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            {t.aboutTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">{t.aboutText1}</p>
          <p className="text-lg text-muted-foreground mb-6">{t.aboutText2}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8"> </div>
        </div>
      </div>
      <div className="relative h-[400px] -mx-8 mt-12 overflow-hidden md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:h-auto md:m-0">
        <Image
          src="/container.jpeg"
          alt="Food trading operations"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default About;
