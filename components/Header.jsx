"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/soins", label: "Nos soins" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="script">Perlina</span>
          <small>By L</small>
        </Link>
        <nav aria-label="Principale">
          <button
            className="burger"
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "×" : "☰"}
          </button>
          <ul id="site-menu" className={open ? "open" : ""}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href ? "active" : ""}
                  aria-current={pathname === l.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/reservation" className="nav-cta" onClick={() => setOpen(false)}>
                Réserver
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
