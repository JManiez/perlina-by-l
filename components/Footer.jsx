import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="script">Perlina</div>
      <div className="foot-sub">By L</div>
      <div className="orn">
        <span className="pearl sm" />
        <span className="pearl" />
        <span className="pearl sm" />
      </div>
      <nav className="foot-nav" aria-label="Pied de page">
        <Link href="/">Accueil</Link>
        <Link href="/a-propos">À propos</Link>
        <Link href="/soins">Nos soins</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/reservation">Réservation</Link>
      </nav>
      <p style={{ marginTop: "1rem" }}>
        <a href="tel:+33772567489" style={{ color: "var(--or-fonce)", letterSpacing: ".12em", textDecoration: "none" }}>
          07 72 56 74 89
        </a>
      </p>
      <div className="copy">
        © {new Date().getFullYear()} Perlina By L — Institut de beauté · 15 rue Frédéric Mistral, 34280 La Grande-Motte · Sur rendez-vous
        <br />
        Perlina By L, SAS au capital de 500 € · RCS Montpellier 103 610 143 · TVA FR 52 103 610 143 · Technologie INDIBA® Deep Beauty
      </div>
    </footer>
  );
}
