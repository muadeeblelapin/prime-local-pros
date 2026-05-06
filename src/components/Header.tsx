import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PHONE = "06 74 98 15 99";
const TEL = "tel:+33674981599";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#zone", label: "Zone d'intervention" },
    { href: "/#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex h-16 md:h-20 items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg md:text-xl">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">AP</span>
          <span className="text-foreground hidden sm:inline">Anthony <span className="text-primary">PRIME</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        {/* High-contrast yellow CTA, visible on all screens */}
        <a
          href={TEL}
          aria-label={`Appeler Anthony PRIME au ${PHONE}`}
          className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-3 md:px-5 md:py-3 font-extrabold text-secondary-foreground shadow-cta hover:brightness-105 transition ring-2 ring-secondary/40"
        >
          <Phone className="h-5 w-5" />
          <span className="hidden sm:inline">{PHONE}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
        <button aria-label="Menu" className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container flex flex-col py-4 gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 font-semibold">
                {l.label}
              </a>
            ))}
            <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-4 font-bold text-secondary-foreground shadow-cta">
              <Phone className="h-5 w-5" /> Appeler {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
