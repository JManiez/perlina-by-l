"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/soins", label: "Nos soins" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)} aria-label="Perlina By L — accueil">
          <Image className="logo-mark" src="/images/logo-perlina.jpg" alt="Perlina By L" width={1200} height={546} priority style={{ height: 44, width: "auto" }} />
        </Link>
        <nav>
          <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <ul className={open ? "open" : ""}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? "active" : ""} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/reservation" className="nav-cta" onClick={() => setOpen(false)}>
                Rendez-vous
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
