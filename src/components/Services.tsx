import { Droplets, Flame, Zap, Wrench, Thermometer, Snowflake, Mountain, Bath, ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type Service = { icon: LucideIcon; title: string; desc: string; to?: string };

const services: Service[] = [
  { icon: Droplets, title: "Plomberie", desc: "Rénovation de salle de bain, recherche de fuite, sanitaires, raccordements." },
  { icon: Flame, title: "Chauffage", desc: "Installation et entretien de pompes à chaleur et chaudières (gaz, fioul, bois)." },
  { icon: Zap, title: "Électricité", desc: "Mise en conformité, dépannage électrique, tableau, prises et éclairage." },
  { icon: Wrench, title: "Dépannage d'urgence", desc: "Intervention rapide 7j/7 sur fuite, panne de chauffage ou coupure électrique." },
];

const specialties: Service[] = [
  { icon: Thermometer, title: "Pompe à chaleur", desc: "Installation et entretien de PAC air/eau et air/air, éligibles aux aides.", to: "/pompe-a-chaleur" },
  { icon: Snowflake, title: "Aérothermie", desc: "Captez l'énergie de l'air pour chauffer votre maison.", to: "/services/aerothermie" },
  { icon: Mountain, title: "Géothermie", desc: "Une chaleur stable et durable issue du sol.", to: "/services/geothermie" },
  { icon: Bath, title: "Rénovation salle de bains", desc: "Conception sur-mesure et travaux clé en main.", to: "/services/renovation-salle-de-bains" },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Nos prestations</p>
        <h2 className="text-3xl md:text-5xl text-foreground">Un artisan, tous vos besoins techniques</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          De la rénovation complète au dépannage urgent, Anthony PRIME intervient chez vous avec professionnalisme.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="group rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl text-card-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl mb-8">Spécialités énergies renouvelables & rénovation</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map(({ icon: Icon, title, desc, to }) => (
            <Link
              key={title}
              to={to!}
              className="group rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground mb-5 group-hover:scale-110 transition-transform">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg text-card-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-bold text-primary group-hover:gap-2 transition-all">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
