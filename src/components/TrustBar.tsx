import { ShieldCheck, Award, Flame } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "RGE", sub: "Reconnu Garant de l'Environnement" },
  { icon: Award, label: "Qualibat", sub: "Qualification bâtiment" },
  { icon: Flame, label: "Professionnel du Gaz", sub: "Installation & entretien gaz" },
];

const TrustBar = () => (
  <section aria-label="Certifications" className="py-12 bg-background border-y border-border">
    <div className="container">
      <p className="text-center text-sm font-bold uppercase tracking-wider text-muted-foreground mb-8">
        Artisan certifié & assuré
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {badges.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <p className="font-extrabold text-foreground">{label}</p>
              <p className="text-sm text-muted-foreground">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
