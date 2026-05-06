import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Phone, MapPin, ArrowLeft, Droplets, Flame, Zap, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";

// City metadata — extend this map to add new city pages.
export const CITIES: Record<string, { name: string; intro: string }> = {
  avranches: { name: "Avranches", intro: "Plombier chauffagiste électricien à Avranches et alentours." },
  ducey: { name: "Ducey", intro: "Plomberie, chauffage et électricité à Ducey-Les Chéris." },
  pontorson: { name: "Pontorson", intro: "Artisan multi-services à Pontorson, baie du Mont-Saint-Michel." },
  fougeres: { name: "Fougères", intro: "Interventions rapides à Fougères et son agglomération." },
  "saint-hilaire-du-harcouet": { name: "Saint-Hilaire-du-Harcouët", intro: "Dépannage et installations à Saint-Hilaire-du-Harcouët." },
  pontaubault: { name: "Pontaubault", intro: "Plombier chauffagiste à Pontaubault et vallée de la Sélune." },
  antrain: { name: "Antrain", intro: "Artisan de confiance à Antrain et secteur." },
};

const services = [
  { icon: Droplets, title: "Plomberie" },
  { icon: Flame, title: "Chauffage" },
  { icon: Zap, title: "Électricité" },
  { icon: Wrench, title: "Dépannage 7j/7" },
];

const CityPage = () => {
  const { city: slug = "" } = useParams();
  const city = CITIES[slug];

  useEffect(() => {
    if (city) {
      document.title = `Plombier Chauffagiste à ${city.name} — Anthony PRIME`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", `Plombier, chauffagiste et électricien à ${city.name}. Intervention rapide par Anthony PRIME, basé à Saint-James (50240).`);
    }
  }, [city]);

  if (!city) {
    // Backwards-compat: support old /plombier-:slug param name as well
    return <Navigate to="/" replace />;
  }

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
              <MapPin className="h-4 w-4" /> {city.name}
            </div>
            <h1 className="text-4xl md:text-6xl max-w-4xl leading-tight">
              Plombier Chauffagiste à {city.name}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">{city.intro}</p>
            <a
              href="tel:+33674981599"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-secondary px-7 py-4 text-lg font-extrabold text-secondary-foreground shadow-cta hover:brightness-105 transition"
            >
              <Phone className="h-5 w-5" /> 06 74 98 15 99
            </a>
          </div>
        </section>

        <TrustBar />

        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl mb-3">Nos services à {city.name}</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Anthony PRIME, basé à Saint-James (50240), intervient à {city.name} pour tous vos besoins en plomberie, chauffage et électricité.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-2xl border border-border p-6 bg-card hover:shadow-elegant transition">
                  <Icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">À {city.name} et dans un rayon de 30 km.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl mb-4">Une urgence à {city.name} ?</h2>
            <p className="text-muted-foreground mb-6">Appelez Anthony directement, intervention rapide 7j/7.</p>
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

export default CityPage;
