import { Phone, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-plumbing.jpg";

const Hero = () => (
  <section className="relative isolate overflow-hidden">
    <img
      src={heroImg}
      alt="Artisan plombier chauffagiste intervenant sur une chaudière à Saint-James"
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
        Anthony PRIME : Plomberie, Chauffage & Électricité à Saint-James
      </h1>
      <p className="mt-6 text-lg md:text-2xl max-w-2xl text-primary-foreground/90 font-medium">
        Dépannage rapide et installations aux normes dans le Sud-Manche et l'Ille-et-Vilaine.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="tel:+33674981599"
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-5 text-lg font-extrabold text-secondary-foreground shadow-cta hover:brightness-105 transition"
        >
          <Phone className="h-6 w-6" /> 06 74 98 15 99
        </a>
        <a
          href="#services"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-background/10 backdrop-blur border-2 border-primary-foreground/40 px-8 py-5 text-lg font-bold text-primary-foreground hover:bg-background/20 transition"
        >
          Voir les services
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
