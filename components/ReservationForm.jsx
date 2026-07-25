"use client";
import { useState } from "react";

const SALON_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
const CRENEAUX = [
  { h: "9 h 30" }, { h: "10 h 30" }, { h: "11 h 30", off: true },
  { h: "14 h" }, { h: "15 h" }, { h: "16 h", off: true },
  { h: "17 h" }, { h: "18 h" },
];
const STEPS = ["Soin", "Date & heure", "Coordonnées", "Confirmation"];

export default function ReservationForm() {
  const [slot, setSlot] = useState("15 h");
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const soin = String(fd.get("soin") || "");
    const date = String(fd.get("date") || "");
    const avec = String(fd.get("avec") || "");
    const nom = String(fd.get("nom") || "");
    const tel = String(fd.get("tel") || "");
    const email = String(fd.get("email") || "");
    const rem = String(fd.get("remarque") || "");
    if (SALON_EMAIL) {
    const subject = encodeURIComponent(`Réservation Perlina — ${nom} — ${date} ${slot}`);
    const body = encodeURIComponent(
      `Demande de réservation\n\n` +
      `Soin : ${soin}\nDate : ${date}\nCréneau : ${slot}\nAvec : ${avec}\n\n` +
      `Nom : ${nom}\nTéléphone : ${tel}\nEmail : ${email}\n\n` +
      `Remarque :\n${rem || "(aucune)"}\n`
    );
    window.location.href = `mailto:${SALON_EMAIL}?subject=${subject}&body=${body}`;
    }
    setDone(true);
  }

  return (
    <>
      <div className="steps" aria-hidden={done ? "true" : undefined}>
        {STEPS.map((s, i) => (
          <span key={s} style={{ display: "flex" }}>
            {i > 0 && <span className="step-sep" />}
            <span className={`step ${done || i < 2 ? "done" : ""}`}>
              <span className="num">{i + 1}</span>
              <span className="lbl">{s}</span>
            </span>
          </span>
        ))}
      </div>

      {done ? (
        <div className="resa-confirm">
          <span className="script" style={{ fontSize: "2.6rem" }}>Merci !</span>
          <p style={{ marginTop: ".9rem" }}>
            Votre demande de réservation est prête à être envoyée par email.<br />
            Nous vous confirmons le créneau dès réception — ou appelez le{" "}
            <a href="tel:+33772567489" style={{ color: "var(--or-fonce)" }}>07 72 56 74 89</a>.
          </p>
          <button className="btn btn-ghost" style={{ marginTop: "1.6rem" }} type="button" onClick={() => setDone(false)}>
            Nouvelle réservation
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="r-soin">Choisissez votre soin</label>
            <select id="r-soin" name="soin" required defaultValue="">
              <option value="" disabled>— Sélectionner un soin —</option>
              <optgroup label="Onglerie">
                <option>Manucure simple · 25 €</option>
                <option>Manucure + vernis basic · 35 €</option>
                <option>Manucure + vernis semi-permanent · 45 €</option>
                <option>Manucure + semi-permanent french · 48 €</option>
              </optgroup>
              <optgroup label="INDIBA® EDNA PRO MAX">
                <option>Soin visage · 30 min · 100 €</option>
                <option>Soin visage · cure 6 séances + 1 offerte · 600 €</option>
                <option>Soin corps · 1 zone · 120 €</option>
                <option>Soin corps · cure 10 séances · 1 000 €</option>
              </optgroup>
              <optgroup label="Massages spa aux huiles chaudes">
                <option>Massage · 30 min · 45 €</option>
                <option>Massage · 45 min · 70 €</option>
                <option>Massage · 1 h · 85 €</option>
              </optgroup>
              <optgroup label="Épilations">
                <option>Épilation femme · dès 10 €</option>
                <option>Épilation homme · dès 15 €</option>
              </optgroup>
            </select>
          </div>

          <div className="f2">
            <div>
              <label htmlFor="r-date">Date souhaitée</label>
              <input id="r-date" name="date" type="date" required />
            </div>
            <div>
              <label htmlFor="r-avec">Avec</label>
              <select id="r-avec" name="avec" defaultValue="Sans préférence">
                <option>Sans préférence</option>
                <option>Lorie — fondatrice</option>
              </select>
            </div>
          </div>

          <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
            <legend style={{ fontSize: ".78rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--brun)", marginBottom: ".4rem" }}>
              Créneaux disponibles
            </legend>
            <div className="creneaux" role="radiogroup" aria-label="Créneau horaire">
              {CRENEAUX.map((c) => (
                <button
                  key={c.h}
                  type="button"
                  disabled={!!c.off}
                  aria-pressed={slot === c.h}
                  className={`creneau ${c.off ? "off" : ""} ${slot === c.h ? "sel" : ""}`}
                  onClick={() => !c.off && setSlot(c.h)}
                >
                  {c.h}
                </button>
              ))}
            </div>
            <input type="hidden" name="creneau" value={slot} />
          </fieldset>

          <div className="f2">
            <div>
              <label htmlFor="r-nom">Prénom &amp; nom</label>
              <input id="r-nom" name="nom" required autoComplete="name" placeholder="Votre nom" />
            </div>
            <div>
              <label htmlFor="r-tel">Téléphone</label>
              <input id="r-tel" name="tel" type="tel" required autoComplete="tel" placeholder="06 …" />
            </div>
          </div>
          <div>
            <label htmlFor="r-email">Email</label>
            <input id="r-email" name="email" type="email" required autoComplete="email" placeholder="votre@email.fr" />
          </div>
          <div>
            <label htmlFor="r-rem">Remarque (optionnel)</label>
            <textarea id="r-rem" name="remarque" style={{ minHeight: 80 }} placeholder="Première visite, femme enceinte, zone à traiter…" />
          </div>

          <button className="btn btn-or" type="submit" style={{ justifySelf: "center", marginTop: ".5rem" }}>
            Confirmer ma réservation
          </button>
        </form>
      )}
    </>
  );
}
