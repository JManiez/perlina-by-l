import Link from "next/link";

export default function NotFound() {
  return (
    <div className="nf">
      <p className="eyebrow">Erreur 404</p>
      <h1 style={{ fontSize: "2.2rem" }}>Cette page s'est envolée comme une perle…</h1>
      <p>Elle n'existe pas ou a été déplacée.</p>
      <Link className="btn btn-or" href="/" style={{ marginTop: "1rem" }}>
        Retour à l'accueil
      </Link>
    </div>
  );
}
