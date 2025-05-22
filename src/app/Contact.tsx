import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "../context/translations/TranslationsProvider";
import { sendEmail } from "./sendEmail";

const Contact = () => {
  const { translations: t } = useTranslations();

  const handleSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (
      form.querySelector("#name") as HTMLInputElement
    )?.value.trim();
    const company = (
      form.querySelector("#company") as HTMLInputElement
    )?.value.trim();
    const email = (
      form.querySelector("#email") as HTMLInputElement
    )?.value.trim();
    const products = (form.querySelector("#products") as HTMLSelectElement)
      ?.value;
    const message = (
      form.querySelector("#message") as HTMLTextAreaElement
    )?.value.trim();

    // Basic validation
    if (!name || !email || !products || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const formattedMessage = `Email enviado desde el formulario de contacto de la web.\n\nNombre: ${name}\nCompañía: ${company}\nEmail: ${email}\nProductos de interés: ${products}\nMensaje: ${message}`;
      await sendEmail({
        name,
        email,
        message: formattedMessage,
      });

      alert("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-primary text-primary-foreground"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              {t.contactTitle}
            </h2>
            <p className="text-lg mb-8">{t.contactText}</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <div>
                  <p>TUSK Trade Company</p>
                  <p>Mantua 6706 Of. 005</p>
                  <p>Montevideo, 11500</p>
                  <p>Uruguay</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-1" />
                <div>
                  <p>Tel./Fax: +598 2601 7071</p>
                  <p>U.S. Phone: +1 (305) 675 4272</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>contact@tusktrade.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-foreground p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">{t.contactFormTitle}</h3>
            <form className="space-y-4" onSubmit={handleSubmitContact}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t.fullName}
                  </label>
                  <input
                    id="name"
                    placeholder={t.yourName}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    {t.company}
                  </label>
                  <input
                    id="company"
                    placeholder={t.yourCompany}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t.email}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t.yourEmail}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="products" className="text-sm font-medium">
                  {t.productsInterest}
                </label>
                <select
                  id="products"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">{t.selectProduct}</option>
                  <option value="beef">{t.beef}</option>
                  <option value="lamb">{t.lamb}</option>
                  <option value="poultry">{t.poultry}</option>
                  <option value="dairy">{t.dairy}</option>
                  <option value="horse">Horse Meat</option>
                  <option value="rice">Rice</option>
                  <option value="grains">{t.grains}</option>
                  <option value="feed">{t.animalFeed}</option>
                  <option value="multiple">Multiple Products</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  placeholder={t.messagePlaceholder}
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></textarea>
              </div>
              <button className="w-full">{t.sendMessage}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
