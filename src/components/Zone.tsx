import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const cities = [
  { name: "Avranches", slug: "avranches" },
  { name: "Pontorson", slug: "pontorson" },
  { name: "Fougères", slug: "fougeres" },
  { name: "Saint-Hilaire-du-Harcouët", slug: "saint-hilaire-du-harcouet" },
  { name: "Ducey", slug: "ducey" },
  { name: "Antrain", slug: "antrain" },
];

const Zone = () => (
  <section id="zone" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <div className="max-w-2xl mb-10">
        <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3 inline-flex items-center gap-2">
          <MapPin className="h-4 w-4" /> Local & réactif
        </p>
        <h2 className="text-3xl md:text-5xl text-foreground">Zone d'intervention : 30 km autour de Saint-James</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Un artisan de proximité pour les particuliers et professionnels du Sud-Manche et de l'Ille-et-Vilaine.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {cities.map((c) => (
          <Link
            key={c.slug}
            to={`/plombier-${c.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-5 py-3 font-semibold text-card-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition shadow-sm"
          >
            <MapPin className="h-4 w-4" /> Plombier à {c.name}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Zone;
