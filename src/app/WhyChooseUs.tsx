import { ShieldCheck, TrendingUp, Truck } from "lucide-react";
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
            <ShieldCheck className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{t.qualityAssurance}</h3>
            <p className="text-muted-foreground">{t.qualityAssuranceText}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {t.competitivePricingLong}
            </h3>
            <p className="text-muted-foreground">{t.competitivePricingText}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background hover:shadow-md transition-all">
            <Truck className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{t.reliableDelivery}</h3>
            <p className="text-muted-foreground">{t.reliableDeliveryText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
