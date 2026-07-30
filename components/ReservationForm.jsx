"use client";
import { useState } from "react";

const TEL = "+33772567489";

export default function ReservationForm() {
  const [data, setData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    setData(Object.fromEntries(f.entries()));
  }

  if (data) {
    const msg =
      `Bonjour, je souhaite prendre rendez-vous chez Perlina By L.\n` +
      `Soin : ${data.soin}\n` +
      `Date souhaitée : ${data.date}${data.moment ? ` (${data.moment})` : ""}\n` +
      `Nom : ${data.nom}\n` +
      (data.remarque ? `Remarque : ${data.remarque}\n` : "");
    return (
      <div className="resa-confirm">
        <h3>Votre demande est prête</h3>
        <p>Vérifiez le récapitulatif, puis envoyez-le nous — nous vous confirmons le créneau au plus vite.</p>
        <div className="recap">
          {data.soin}
          <br />
          {data.date} {data.moment && `· ${data.moment}`}
          <br />
          {data.nom} · {data.tel}
          {data.remarque && (
            <>
              <br />
              « {data.remarque} »
            </>
          )}
        </div>
        <div className="btn-row" style={{ marginTop: 0 }}>
          <a className="btn btn-or" href={`sms:${TEL}?&body=${encodeURIComponent(msg)}`}>
            Envoyer par SMS
          </a>
          <a className="btn btn-ghost" href={`tel:${TEL}`}>
            Appeler l'institut
          </a>
        </div>
        <p style={{ fontSize: ".82rem", marginTop: "1.4rem", color: "#9a8467" }}>
          <button onClick={() => setData(null)} style={{ background: "none", border: "none", color: "inherit", textDecoration: "underline", cursor: "pointer", font: "inherit" }}>
            Modifier ma demande
          </button>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="r-soin">Le soin souhaité</label>
        <select id="r-soin" name="soin" required defaultValue="">
          <option value="" disabled>— Sélectionner un soin —</option>
          <optgroup label="Onglerie">
            <option>Manucure simple</option>
            <option>Manucure + vernis basic</option>
            <option>Manucure + vernis semi-permanent</option>
            <option>Manucure + semi-permanent french</option>
          </optgroup>
          <optgroup label="INDIBA® EDNA PRO MAX">
            <option>Soin visage INDIBA (30 min)</option>
            <option>Cure visage INDIBA (6 séances + 1 offerte)</option>
            <option>Soin corps INDIBA (1 zone)</option>
            <option>Cure corps INDIBA (10 séances)</option>
          </optgroup>
          <optgroup label="Massages spa aux huiles chaudes">
            <option>Massage 30 min</option>
            <option>Massage 45 min</option>
            <option>Massage 1 h</option>
          </optgroup>
          <optgroup label="Épilations">
            <option>Épilation femme</option>
            <option>Épilation homme</option>
          </optgroup>
          <option>Autre / je ne sais pas encore</option>
        </select>
      </div>

      <div className="f2">
        <div>
          <label htmlFor="r-date">Date souhaitée</label>
          <input id="r-date" name="date" type="date" required />
        </div>
        <div>
          <label htmlFor="r-moment">Moment préféré</label>
          <select id="r-moment" name="moment">
            <option>Indifférent</option>
            <option>Matin</option>
            <option>Midi</option>
            <option>Après-midi</option>
          </select>
        </div>
      </div>

      <div className="f2">
        <div>
          <label htmlFor="r-nom">Prénom & nom</label>
          <input id="r-nom" name="nom" required placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="r-tel">Téléphone</label>
          <input id="r-tel" name="tel" type="tel" required placeholder="06 …" />
        </div>
      </div>
      <div>
        <label htmlFor="r-rem">Remarque (optionnel)</label>
        <textarea id="r-rem" name="remarque" style={{ minHeight: 80 }} placeholder="Première visite, femme enceinte, zone à traiter…" />
      </div>

      <button className="btn btn-or" type="submit" style={{ justifySelf: "center", marginTop: ".5rem" }}>
        Préparer ma demande
      </button>
    </form>
  );
}
