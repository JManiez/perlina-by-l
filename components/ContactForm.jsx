"use client";
import { useState } from "react";

const SALON_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const nom = String(fd.get("nom") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const msg = String(fd.get("message") || "").trim();
    if (!nom || !email) {
      setError("Merci de renseigner votre nom et votre email.");
      return;
    }
    if (SALON_EMAIL) {
      const subject = encodeURIComponent(`Contact Perlina — ${nom}`);
      const body = encodeURIComponent(
        `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${msg || "(aucun)"}\n`
      );
      window.location.href = `mailto:${SALON_EMAIL}?subject=${subject}&body=${body}`;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <p
        style={{
          fontFamily: "var(--font-serif), 'Cormorant Garamond', Georgia, serif",
          fontSize: "1.15rem",
          color: "var(--brun-fonce)",
        }}
      >
        Merci !{" "}
        {SALON_EMAIL
          ? "Votre client mail va s&apos;ouvrir pour envoyer le message."
          : "Nous avons bien reçu votre demande."}{" "}
        Vous pouvez aussi nous joindre au{" "}
        <a href="tel:+33772567489" style={{ color: "var(--or-fonce)" }}>
          07 72 56 74 89
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="f2">
        <div>
          <label htmlFor="c-nom">Nom</label>
          <input id="c-nom" name="nom" required autoComplete="name" placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="c-email">Email</label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="votre@email.fr"
          />
        </div>
      </div>
      <div>
        <label htmlFor="c-msg">Message</label>
        <textarea id="c-msg" name="message" placeholder="Votre message…" />
      </div>
      {error && (
        <p role="alert" style={{ color: "#a35a2e", fontSize: ".9rem" }}>
          {error}
        </p>
      )}
      <button className="btn btn-or" type="submit" style={{ justifySelf: "start" }}>
        Envoyer
      </button>
    </form>
  );
}
