import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin } from "lucide-react";

const PompeAChaleur = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section Service */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Installation & Entretien de Pompe à Chaleur
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert chauffagiste à <span className="text-primary font-semibold">Saint-James (50240)</span>. 
            Réduisez vos factures d'énergie avec des solutions aérothermiques performantes adaptées au Sud-Manche et à l'Ille-et-Vilaine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary text-black hover:bg-yellow-500">
              <Phone className="mr-2 h-5 w-5" /> Appeler le 06 XX XX XX XX
            </Button>
          </div>
        </div>
      </section>

      {/* Section Photos de chantiers - ICI TU METTRAS TES PHOTOS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos Réalisations Récentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bloc Photo 1 */}
            <div className="rounded-lg overflow-hidden border border-primary/20 bg-secondary">
              <div className="h-64 bg-gray-800 flex items-center justify-center text-gray-500">
                {/* Remplace l'URL src par le chemin de ta photo une fois uploadée */}
                <img src="/placeholder.svg" alt="Installation PAC Saint-James" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-primary">Installation PAC Air-Eau - Atlantic</p>
                <p className="text-sm text-gray-400">Chantier réalisé à Pontorson (50)</p>
              </div>
            </div>

            {/* Bloc Photo 2 */}
            <div className="rounded-lg overflow-hidden border border-primary/20 bg-secondary">
              <div className="h-64 bg-gray-800 flex items-center justify-center text-gray-500">
                <img src="/placeholder.svg" alt="Remplacement chaudière PAC" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-primary">Remplacement Chaudière Fuel</p>
                <p className="text-sm text-gray-400">Chantier réalisé à Avranches (50)</p>
              </div>
            </div>

            {/* Bloc Photo 3 */}
            <div className="rounded-lg overflow-hidden border border-primary/20 bg-secondary">
              <div className="h-64 bg-gray-800 flex items-center justify-center text-gray-500">
                <img src="/placeholder.svg" alt="Entretien PAC Daikin" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-primary">Entretien Annuel</p>
                <p className="text-sm text-gray-400">Maintenance sur PAC Daikin à Fougères (35)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Marques */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Pourquoi nous confier votre projet ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary h-6 w-6 mt-1" />
                <span><strong className="text-white">Économies :</strong> Jusqu'à 70% de réduction sur votre facture de chauffage.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary h-6 w-6 mt-1" />
                <span><strong className="text-white">Aides d'État :</strong> Accompagnement MaPrimeRénov' et CEE.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary h-6 w-6 mt-1" />
              </li>
            </ul>
            <div className="p-6 bg-black rounded-lg border border-primary/30">
              <h3 className="text-xl font-bold mb-4 text-primary italic">Marques installées :</h3>
              <p className="text-gray-300 leading-relaxed">
                Atlantic, Mitsubishi Electric, Daikin, Samsung, Saunier Duval, De Dietrich, Yack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention spécifique */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center border-t border-gray-800 pt-16">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 italic text-primary">Intervention Rapide 30 km autour de Saint-James</h2>
          <p className="text-gray-400">
            Nous nous déplaçons à Montjoie-Saint-Martin, Saint-Laurent-de-Terregatte, Pontorson, 
            Avranches, Ducey, Pontaubault, mais aussi sur Fougères, Le Ferré et Poilley.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PompeAChaleur;
