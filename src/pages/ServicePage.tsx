import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Phone, ArrowLeft, ShieldCheck, Award, Flame, Euro, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const SERVICES: Record<string, { name: string; tagline: string; description: string; bullets: string[] }> = {
  "pompe-a-chaleur": {
    name: "Pompe à chaleur",
    tagline: "Chauffez mieux, dépensez moins.",
    description:
      "Installation et entretien de pompes à chaleur air/eau et air/air. Une solution performante et écologique pour réduire jusqu'à 70% votre facture de chauffage.",
    bullets: [
      "Étude thermique personnalisée de votre logement",
      "Marques reconnues (Daikin, Atlantic, Mitsubishi…)",
      "Mise en service et entretien annuel",
    ],
  },
  aerothermie: {
    name: "Aérothermie",
    tagline: "L'énergie de l'air pour votre confort.",
    description:
      "L'aérothermie capte les calories de l'air extérieur pour chauffer votre maison et produire votre eau chaude sanitaire. Une énergie renouvelable, économique et silencieuse.",
    bullets: [
      "Solution adaptée aux maisons individuelles",
      "Compatible avec un plancher chauffant ou des radiateurs",
      "Faible impact carbone",
    ],
  },
  geothermie: {
    name: "Géothermie",
    tagline: "La chaleur du sol au service de votre maison.",
    description:
      "La géothermie récupère la chaleur naturelle du sol pour chauffer votre habitation toute l'année, avec un rendement stable et durable.",
    bullets: [
      "Captage horizontal ou vertical selon votre terrain",
      "Durée de vie supérieure à 25 ans",
      "Coûts d'utilisation très faibles",
    ],
  },
  "renovation-salle-de-bains": {
    name: "Rénovation de Salle de bains",
    tagline: "Un espace sur-mesure, clé en main.",
    description:
      "De la dépose à la pose des finitions, Anthony PRIME prend en charge la rénovation complète de votre salle de bains : plomberie, carrelage, électricité, mobilier.",
    bullets: [
      "Conception personnalisée et devis détaillé",
      "Douche à l'italienne, baignoire, sanitaires PMR",
      "Coordination de tous les corps de métier",
    ],
  },
};

const ServicePage = () => {
  const { serviceName: slug = "" } = useParams();
  const service = SERVICES[slug];

  useEffect(() => {
    if (service) {
      document.title = `${service.name} — Anthony PRIME (Saint-James, 50)`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", `${service.name} : ${service.tagline} Artisan RGE basé à Saint-James, intervention dans le Sud-Manche.`);
    }
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary mb-6 font-semibold">
              <ArrowLeft className="h-4 w-4" /> Retour
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold mb-5">
              Service
            </div>
            <h1 className="text-4xl md:text-6xl max-w-4xl leading-tight">{service.name}</h1>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">{service.tagline}</p>
            <a
              href="tel:+33674981599"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-secondary px-7 py-4 text-lg font-extrabold text-secondary-foreground shadow-cta hover:brightness-105 transition"
            >
              <Phone className="h-5 w-5" /> Demander un devis
            </a>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl mb-5">Notre prestation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Block */}
            <aside className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Artisan certifié</p>
              <h3 className="text-2xl mb-6">Vos garanties</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-7 w-7 text-primary shrink-0" />
                  <div>
                    <p className="font-bold">Certifié RGE</p>
                    <p className="text-sm text-muted-foreground">Reconnu Garant de l'Environnement — gage de qualité et clé d'accès aux aides.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-7 w-7 text-primary shrink-0" />
                  <div>
                    <p className="font-bold">Qualibat</p>
                    <p className="text-sm text-muted-foreground">Qualification professionnelle reconnue dans le bâtiment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="h-7 w-7 text-primary shrink-0" />
                  <div>
                    <p className="font-bold">Professionnel du Gaz</p>
                    <p className="text-sm text-muted-foreground">Habilité pour l'installation et l'entretien gaz en toute sécurité.</p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Financial Aids */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3 inline-flex items-center gap-2">
                <Euro className="h-4 w-4" /> Aides financières
              </p>
              <h2 className="text-3xl md:text-4xl mb-5">Profitez de MaPrimeRénov' et des aides à la rénovation</h2>
              <p className="text-muted-foreground text-lg mb-8">
                En tant qu'artisan RGE, Anthony PRIME vous permet de bénéficier des principales aides de l'État pour financer vos travaux d'économie d'énergie.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "MaPrimeRénov'", d: "Aide de l'État ouverte à tous les propriétaires, calculée selon vos revenus et le gain énergétique." },
                { t: "CEE — Certificats d'Économies d'Énergie", d: "Prime versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'." },
                { t: "Éco-PTZ", d: "Prêt à taux zéro jusqu'à 50 000 € pour financer vos travaux de rénovation énergétique." },
                { t: "TVA réduite à 5,5%", d: "Sur les travaux d'amélioration de la performance énergétique du logement." },
                { t: "Aides locales", d: "Conseil départemental de la Manche, Région Normandie : des coups de pouce supplémentaires." },
                { t: "Accompagnement", d: "Nous vous orientons sur les démarches et les pièces à fournir pour constituer votre dossier." },
              ].map((a) => (
                <article key={a.t} className="rounded-2xl bg-card border border-border p-6">
                  <h3 className="text-lg mb-2">{a.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl mb-4">Un projet de {service.name.toLowerCase()} ?</h2>
            <p className="text-muted-foreground mb-6">Contactez Anthony pour une étude personnalisée et un devis gratuit.</p>
            <a
              href="tel:+33674981599"
              className="inline-flex items-center gap-3 rounded-xl bg-secondary px-8 py-5 text-lg font-extrabold text-secondary-foreground shadow-cta"
            >
              <Phone className="h-6 w-6" /> 06 74 98 15 99
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
