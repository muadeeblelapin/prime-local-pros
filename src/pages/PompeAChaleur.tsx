import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PompeAChaleur = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Utilise les mêmes couleurs que l'accueil */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Installation & Entretien de <span className="text-primary">Pompe à Chaleur</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert chauffagiste à Saint-James (50240). 
            Réduisez vos factures d'énergie avec des solutions aérothermiques performantes adaptées au Sud-Manche et à l'Ille-et-Vilaine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground">
              <Phone className="mr-2 h-5 w-5" /> 06 XX XX XX XX
            </Button>
          </div>
        </div>
      </section>

      {/* Section Photos - Style "Card" comme tes services */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { loc: "Pontorson (50)", type: "PAC Air-Eau - Atlantic" },
              { loc: "Avranches (50)", type: "Relève de chaudière" },
              { loc: "Fougères (35)", type: "Entretien annuel" }
            ].map((chantier, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <img src="/placeholder.svg" alt={chantier.type} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="font-bold text-lg mb-1">{chantier.type}</p>
                  <p className="text-muted-foreground italic">{chantier.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Marques */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi nous choisir ?</h2>
              <ul className="space-y-4">
                {[
                  "Économies d'énergie jusqu'à 70%",
                  "Accompagnement MaPrimeRénov' & CEE",
                  "SAV et entretien de proximité",
                  "Certifié RGE (Reconnu Garant de l'Environnement)"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
              <h3 className="text-xl font-bold mb-4">Marques partenaires</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atlantic, Mitsubishi Electric, Daikin, Samsung, Saunier Duval, De Dietrich, Elm Leblanc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone de chalandise */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Intervention autour de Saint-James</h2>
          <p className="text-muted-foreground">
            Nous intervenons rapidement à Montjoie-Saint-Martin, Pontorson, 
            Avranches, Ducey, Fougères et tout le canton.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PompeAChaleur;
