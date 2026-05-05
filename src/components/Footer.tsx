import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container py-16 grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-2xl mb-4">Anthony PRIME</h3>
        <p className="text-primary-foreground/80 leading-relaxed">
          Artisan plombier, chauffagiste et électricien. Au service des particuliers et professionnels du Sud-Manche depuis plusieurs années.
        </p>
      </div>
      <div>
        <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-secondary">Contact</h4>
        <ul className="space-y-3">
          <li>
            <a href="tel:+33674981599" className="flex items-center gap-3 hover:text-secondary transition">
              <Phone className="h-5 w-5 shrink-0" /> 06 74 98 15 99
            </a>
          </li>
          <li>
            <a href="mailto:anthonyprimelec@gmail.com" className="flex items-center gap-3 hover:text-secondary transition break-all">
              <Mail className="h-5 w-5 shrink-0" /> anthonyprimelec@gmail.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="h-5 w-5 shrink-0 mt-1" />
            <span>Parc d'Activités<br />Impasse de la croix Vincent<br />50240 Saint-James</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-secondary">Urgence ?</h4>
        <p className="mb-4 text-primary-foreground/80">Intervention rapide 7j/7 dans un rayon de 30 km.</p>
        <a
          href="tel:+33674981599"
          className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-4 font-extrabold text-secondary-foreground shadow-cta hover:brightness-105 transition"
        >
          <Phone className="h-5 w-5" /> Appeler maintenant
        </a>
      </div>
    </div>
    <div className="border-t border-primary-foreground/15">
      <div className="container py-6 text-sm text-primary-foreground/70 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Anthony PRIME — Tous droits réservés.</p>
        <p>Plomberie · Chauffage · Électricité — Saint-James (50)</p>
      </div>
    </div>
  </footer>
);

export default Footer;
