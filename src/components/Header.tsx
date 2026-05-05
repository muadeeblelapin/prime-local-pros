import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const PHONE = "06 74 98 15 99";
const TEL = "tel:+33674981599";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#zone", label: "Zone d'intervention" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex h-16 md:h-20 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 font-extrabold text-lg md:text-xl">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">AP</span>
          <span className="text-foreground">Anthony <span className="text-primary">PRIME</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={TEL}
          className="hidden md:inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 font-bold text-secondary-foreground shadow-cta hover:brightness-105 transition"
        >
          <Phone className="h-4 w-4" /> {PHONE}
        </a>
        <button aria-label="Menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
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
