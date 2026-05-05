import { Droplets, Flame, Zap, Wrench, type LucideIcon } from "lucide-react";

type Service = { icon: LucideIcon; title: string; desc: string };

const services: Service[] = [
  { icon: Droplets, title: "Plomberie", desc: "Rénovation de salle de bain, recherche de fuite, sanitaires, raccordements." },
  { icon: Flame, title: "Chauffage", desc: "Installation et entretien de pompes à chaleur et chaudières (gaz, fioul, bois)." },
  { icon: Zap, title: "Électricité", desc: "Mise en conformité, dépannage électrique, tableau, prises et éclairage." },
  { icon: Wrench, title: "Dépannage d'urgence", desc: "Intervention rapide 7j/7 sur fuite, panne de chauffage ou coupure électrique." },
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
    </div>
  </section>
);

export default Services;
