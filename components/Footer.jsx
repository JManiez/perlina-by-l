import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Image className="foot-logo" src="/images/logo-perlina.jpg" alt="Perlina By L" width={1200} height={546} style={{ height: 64, width: "auto" }} />
      <nav className="foot-nav">
        <Link href="/">Accueil</Link>
        <Link href="/a-propos">À propos</Link>
        <Link href="/soins">Nos soins</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/reservation">Rendez-vous</Link>
      </nav>
      <div className="copy">
        © 2026 Perlina By L — Institut de beauté · 15 rue Frédéric Mistral, 34280 La Grande-Motte ·{" "}
        <a href="tel:+33772567489" style={{ color: "inherit" }}>07 72 56 74 89</a> · Sur rendez-vous
        <br />
        Perlina By L, SAS au capital de 500 € · RCS Montpellier 103 610 143 · TVA FR 52 103 610 143 · Technologie INDIBA® Deep Beauty
      </div>
    </footer>
  );
}
