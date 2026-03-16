import { BookOpen, Globe, Handshake, Star, TrendingUp } from "lucide-react";
import { useTranslations } from "../context/translations/TranslationsProvider";

const WhyChooseUs = () => {
  const { translations: t } = useTranslations();
  return (
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
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{t.industryExpertise}</h3>
            <p className="text-muted-foreground">{t.industryExpertiseText}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all">
            <Globe className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{t.trustedNetwork}</h3>
            <p className="text-muted-foreground">{t.trustedNetworkText}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all">
            <Star className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{t.reliabilityCommitment}</h3>
            <p className="text-muted-foreground">{t.reliabilityCommitmentText}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{t.executionExcellence}</h3>
            <p className="text-muted-foreground">{t.executionExcellenceText}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all sm:col-span-2 lg:col-span-1">
            <Handshake className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{t.partnershipApproach}</h3>
            <p className="text-muted-foreground">{t.partnershipApproachText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
