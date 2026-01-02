import { MedalIcon, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "../context/translations/TranslationsProvider";

const About = () => {
  const { translations: t } = useTranslations();
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">{t.aboutText1}</p>
            <p className="text-lg text-muted-foreground mb-6">{t.aboutText2}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8"> </div>
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
  );
};

export default About;
