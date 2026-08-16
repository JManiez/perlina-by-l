"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./gsap/register";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/soins", label: "Nos soins" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const overlay = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useGSAP(
    () => {
      if (!open || !overlay.current) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          overlay.current.querySelectorAll("a"),
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: "power3.out" }
        );
      });
    },
    { dependencies: [open], scope: overlay }
  );

  return (
    <header className={`site-header${solid || open ? " is-solid" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)} aria-label="Perlina By L — accueil">
          <span className="script">Perlina</span>
          <small>By L</small>
        </Link>
        <nav aria-label="Principale">
          <button
            className={`burger${open ? " is-open" : ""}`}
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul id="site-menu" className="desktop">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href ? "active" : ""}
                  aria-current={pathname === l.href ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/reservation" className="nav-cta">
                Rendez-vous
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div ref={overlay} className={`menu-overlay${open ? " open" : ""}`} hidden={!open}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/reservation" className="nav-cta-lg" onClick={() => setOpen(false)}>
          Prendre rendez-vous
        </Link>
      </div>
    </header>
  );
}
