import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  Flame,
  Euro,
  CheckCircle2,
  AlertTriangle,
  Droplets,
  Zap,
  Wrench,
  Thermometer,
  Snowflake,
  Mountain,
  Bath,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroImg from "@/assets/hero-plumbing.jpg";

const PHONE = "06 74 98 15 99";
const TEL = "tel:+33674981599";

type Service = {
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  realizations: { title: string; location: string ; image?: string}[];
  showAids?: boolean;
  showBrands?: boolean;
  emergency?: boolean;
};

export const SERVICES: Record<string, Service> = {
  plomberie: {
    name: "Plomberie",
    tagline: "Sanitaires, fuites, raccordements — un savoir-faire reconnu.",
    description:
      "Recherche de fuite, rénovation de salle de bain, installation de sanitaires, raccordements eau & évacuations. Anthony PRIME intervient avec rigueur et propreté chez les particuliers et professionnels.",
    bullets: [
      "Recherche de fuite non destructive",
      "Pose de chauffe-eau et adoucisseurs",
      "Réparations rapides garanties",
    ],
    icon: Droplets,
    realizations: [
      { title: "Recherche de fuite", location: "Avranches (50)" },
      { title: "Pose chauffe-eau", location: "Saint-James (50)" },
      { title: "Réalisation d'une salle de bains complette (+ murs et sol)", location: "Granville (50)", image: "/realisations/salle-de-bains-Granville.jpg" },
    ],
  },
  chauffage: {
    name: "Chauffage",
    tagline: "Chaudières, PAC, planchers chauffants : confort toute l'année.",
    description:
      "Installation, entretien et dépannage de tous types de systèmes de chauffage : pompes à chaleur, chaudières gaz, fioul ou bois. Conseil personnalisé pour optimiser votre confort et votre facture.",
    bullets: [
      "Entretien annuel obligatoire",
      "Diagnostic et remplacement de chaudière",
      "Mise en route et réglages",
    ],
    icon: Flame,
    showBrands: true,
    realizations: [
      { title: "Chaudière gaz à condensation", location: "Fougères (35)" },
      { title: "Plancher chauffant", location: "Ducey (50)" },
      { title: "Entretien annuel", location: "Saint-James (50)" },
    ],
  },
  electricite: {
    name: "Électricité",
    tagline: "Mise en conformité, dépannage et rénovation électrique.",
    description:
      "Tableau électrique, prises, éclairage, mise aux normes NF C 15-100 : Anthony PRIME prend en charge tous vos travaux électriques en toute sécurité.",
    bullets: [
      "Diagnostic et mise en conformité",
      "Rénovation complète d'installation",
      "Dépannage rapide",
    ],
    icon: Zap,
    realizations: [
      { title: "Tableau électrique neuf", location: "Saint-James (50)" },
      { title: "Mise aux normes", location: "Antrain (35)" },
      { title: "Éclairage extérieur", location: "Pontaubault (50)" },
    ],
  },
  "depannage-urgence": {
    name: "Dépannage d'urgence",
    tagline: "Une intervention rapide 7j/7 dans le Sud-Manche.",
    description:
      "Fuite d'eau, panne de chauffage, coupure électrique : Anthony PRIME se déplace en urgence dans un rayon de 30 km autour de Saint-James pour sécuriser et réparer votre installation.",
    bullets: [
      "Disponible 7j/7 en cas d'urgence",
      "Intervention dans un rayon de 30 km",
      "Devis transparent avant travaux",
    ],
    icon: Wrench,
    emergency: true,
    realizations: [
      { title: "Fuite sous évier", location: "Avranches (50)" },
      { title: "Panne chaudière hivernale", location: "Fougères (35)" },
      { title: "Coupure tableau électrique", location: "Saint-James (50)" },
    ],
  },
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
    icon: Thermometer,
    showAids: true,
    showBrands: true,
    realizations: [
      { title: "PAC Air/Eau Daikin", location: "Pontorson (50)" },
      { title: "PAC Air/Air Mitsubishi", location: "Fougères (35)" },
      { title: "Remplacement chaudière fioul", location: "Saint-James (50)" },
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
    icon: Snowflake,
    showAids: true,
    showBrands: true,
    realizations: [
      { title: "Système air/eau", location: "Avranches (50)" },
      { title: "Ballon thermodynamique", location: "Ducey (50)" },
      { title: "Rénovation chauffage", location: "Antrain (35)" },
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
    icon: Mountain,
    showAids: true,
    showBrands: true,
    realizations: [
      { title: "Captage horizontal", location: "Saint-Hilaire (50)" },
      { title: "PAC géothermique", location: "Saint-James (50)" },
      { title: "Plancher chauffant", location: "Pontaubault (50)" },
    ],
  },
  "renovation-salle-de-bains": {
    name: "Rénovation salle de bains",
    tagline: "Un espace sur-mesure, clé en main.",
    description:
      "De la dépose à la pose des finitions, Anthony PRIME prend en charge la rénovation complète de votre salle de bains : plomberie, carrelage, électricité, mobilier.",
    bullets: [
      "Conception personnalisée et devis détaillé",
      "Douche à l'italienne, baignoire, sanitaires PMR",
      "Coordination de tous les corps de métier",
    ],
    icon: Bath,
    realizations: [
      { title: "Douche à l'italienne", location: "Avranches (50)" },
      { title: "Salle de bain PMR", location: "Fougères (35)" },
      { title: "Rénovation complète", location: "Saint-James (50)" },
    ],
  },
};

const BRANDS = ["Daikin", "Atlantic", "Mitsubishi", "Saunier Duval", "De Dietrich", "Viessmann"];

const ServicePage = () => {
  const { serviceName: slug = "" } = useParams();
  const service = SERVICES[slug];

  useEffect(() => {
    if (service) {
      document.title = `${service.name} à Saint-James (50240) — Anthony PRIME`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta)
        meta.setAttribute(
          "content",
          `${service.name} à Saint-James et alentours : ${service.tagline} Artisan RGE — devis gratuit.`,
        );
    }
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO — same identity as Index */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt={`${service.name} à Saint-James par Anthony PRIME`}
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="container relative py-20 md:py-32 text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/95 text-secondary-foreground px-4 py-2 text-sm font-bold mb-6">
              <MapPin className="h-4 w-4" /> Saint-James (50240) — Sud-Manche & Ille-et-Vilaine
            </div>
            <h1 className="text-4xl md:text-6xl font-black max-w-4xl leading-tight">
              {service.name} à Saint-James (50240) et alentours
            </h1>
            <p className="mt-6 text-lg md:text-2xl max-w-2xl text-primary-foreground/90 font-medium">
              {service.tagline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={TEL}
                className={`inline-flex items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-5 text-lg font-extrabold text-secondary-foreground shadow-cta hover:brightness-105 transition ${service.emergency ? "md:text-xl md:px-10 md:py-6 ring-4 ring-secondary/40 animate-pulse" : ""}`}
              >
                <Phone className="h-6 w-6" /> {service.emergency ? `Urgence — ${PHONE}` : PHONE}
              </a>
              <Link
                to="/#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-background/10 backdrop-blur border-2 border-primary-foreground/40 px-8 py-5 text-lg font-bold text-primary-foreground hover:bg-background/20 transition"
              >
                Tous les services
              </Link>
            </div>
          </div>
        </section>

        {service.emergency && (
          <section className="bg-secondary text-secondary-foreground">
            <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-bold text-lg flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" /> Une urgence ? Appelez immédiatement.
              </p>
              <a href={TEL} className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 font-extrabold shadow-elegant">
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
            </div>
          </section>
        )}

        <TrustBar />

        {/* Description + Trust block */}
        <section className="py-20 bg-background">
          <div className="container grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3 inline-flex items-center gap-2">
                <Icon className="h-4 w-4" /> Notre prestation
              </p>
              <h2 className="text-3xl md:text-4xl mb-5">{service.name} — savoir-faire local</h2>
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

            <aside className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Artisan certifié</p>
              <h3 className="text-2xl mb-6">Vos garanties</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-7 w-7 text-primary shrink-0" />
                  <div>
                    <p className="font-bold">Certifié RGE</p>
                    <p className="text-sm text-muted-foreground">Reconnu Garant de l'Environnement — clé d'accès aux aides.</p>
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
                    <p className="text-sm text-muted-foreground">Habilité pour l'installation et l'entretien gaz.</p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Realizations — same card style as Services */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Réalisations</p>
              <h2 className="text-3xl md:text-4xl text-foreground">Nos derniers chantiers {service.name.toLowerCase()}</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Un aperçu de nos interventions récentes dans le Sud-Manche et l'Ille-et-Vilaine.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/*
              {service.realizations.map((r, i) => (
                <article
                  key={i}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
                >*/}
                  {/* Suppression de l'opacity-60 et du gradient qui masquaient l'image */}
                 {/* <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={r.image || "/placeholder.svg"}
                      alt={`${r.title} — chantier ${r.location}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    {/* Badge de localisation stylé */} {/*
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                      <MapPin className="h-3 w-3" /> {r.location}
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Chantier réalisé avec soin par Anthony PRIME.
                    </p>
                  </div>
                </article>
              ))}
              */}
              {service.realizations.map((r, i) => (
                <article
                  key={i}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="block w-full aspect-video bg-muted overflow-hidden cursor-zoom-in"
                        aria-label={`Agrandir : ${r.title}`}
                      >
                        <img
                          src={r.image || "/placeholder.svg"}
                          alt={`${r.title} — chantier ${r.location}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl p-2 bg-background">
                      <img
                        src={r.image || "/placeholder.svg"}
                        alt={`${r.title} — chantier ${r.location}`}
                        className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                  <div className="p-6">
                    <h3 className="text-lg text-card-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {r.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Brand partners */}
        {service.showBrands && (
          <section className="py-16 bg-background">
            <div className="container">
              <div className="max-w-2xl mb-8">
                <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Marques partenaires</p>
                <h2 className="text-2xl md:text-3xl">Des équipements de référence</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {BRANDS.map((b) => (
                  <div
                    key={b}
                    className="rounded-xl border border-border bg-card px-5 py-6 text-center font-bold text-card-foreground hover:shadow-elegant transition"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Financial Aids */}
        {service.showAids && (
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
                  { t: "MaPrimeRénov'", d: "Aide de l'État, calculée selon vos revenus et le gain énergétique." },
                  { t: "CEE — Certificats d'Économies d'Énergie", d: "Prime versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'." },
                  { t: "Éco-PTZ", d: "Prêt à taux zéro jusqu'à 50 000 € pour vos travaux de rénovation énergétique." },
                  { t: "TVA réduite à 5,5%", d: "Sur les travaux d'amélioration de la performance énergétique." },
                  { t: "Aides locales", d: "Conseil départemental de la Manche, Région Normandie." },
                  { t: "Accompagnement", d: "Nous vous orientons sur les démarches et les pièces à fournir." },
                ].map((a) => (
                  <article key={a.t} className="rounded-2xl bg-card border border-border p-6">
                    <h3 className="text-lg mb-2">{a.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 bg-background">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl mb-4">Un projet de {service.name.toLowerCase()} ?</h2>
            <p className="text-muted-foreground mb-6">Contactez Anthony pour une étude personnalisée et un devis gratuit.</p>
            <a
              href={TEL}
              className="inline-flex items-center gap-3 rounded-xl bg-secondary px-8 py-5 text-lg font-extrabold text-secondary-foreground shadow-cta hover:brightness-105 transition"
            >
              <Phone className="h-6 w-6" /> {PHONE}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
