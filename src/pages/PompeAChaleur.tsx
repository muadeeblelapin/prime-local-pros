import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin } from "lucide-react";

const PompeAChaleur = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Section Titre - Style calqué sur le Hero de l'accueil */}
        <section className="py-20 px-4 md:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Installation & Entretien <br />
              <span className="text-primary italic">Pompe à Chaleur</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Expert chauffagiste certifié à Saint-James. Solutions d'économies d'énergie pour votre habitat dans la Manche et l'Ille-et-Vilaine.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg font-semibold">
                <Phone className="mr-2 h-5 w-5" /> 06 XX XX XX XX
              </Button>
            </div>
          </div>
        </section>

        {/* On réutilise ta barre de confiance (Marques) pour la cohérence */}
        <TrustBar />

        {/* Section Contenu & Photos - Fond gris très léger comme sur ton accueil */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos dernières installations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition-all">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    {/* Emplacement pour tes photos de chantier */}
                    <img src="/placeholder.svg" alt="Chantier" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">PAC Air-Eau</h3>
                    <p className="text-muted-foreground">Installation réalisée avec succès à Pontorson.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Infos techniques */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 italic">Pourquoi passer à la PAC ?</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Réduction immédiate de vos factures</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Éligible aux aides de l'État (RGE)</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-dashed border-border p-8 text-center">
              <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Secteur d'intervention</h3>
              <p className="text-muted-foreground">Saint-James, Avranches, Fougères et 30km autour.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PompeAChaleur;
