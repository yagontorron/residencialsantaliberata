import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#concepto", label: "Concepto" },
  { href: "#lugar", label: "El lugar" },
  { href: "#viviendas", label: "Viviendas" },
  { href: "#calidades", label: "Calidades" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(244,239,234,0.92)" : "rgba(244,239,234,0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(92,78,65,0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Residencial Santa Liberata" className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:block font-serif text-base tracking-[0.25em] uppercase text-ink-strong">
            Residencial Santa Liberata
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.7rem] tracking-[0.25em] uppercase text-ink hover:text-ink-strong transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary !py-3 !px-5 !text-[0.65rem]">
            Solicitar dossier
          </a>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="w-6 h-px bg-ink-strong" />
          <span className="w-6 h-px bg-ink-strong" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border">
          <div className="px-6 py-8 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.25em] uppercase text-ink-strong"
              >
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Solicitar dossier
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
