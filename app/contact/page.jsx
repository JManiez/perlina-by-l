import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";

export const metadata = { title: "Contact — Perlina By L · La Grande-Motte" };

export default function Contact() {
  return (
    <section className="page-head">
      <div className="container">
        <SectionTitle eyebrow="Contact" center pearls>
          Venez nous <em>rencontrer</em>
        </SectionTitle>

        <div className="contact-grid">
          <div>
            <div className="info-bloc">
              <h3><span className="pearl sm" /> L'institut</h3>
              <div className="info-line"><b>Adresse</b><span>15 rue Frédéric Mistral<br />34280 La Grande-Motte</span></div>
              <div className="info-line"><b>Téléphone</b><span><a href="tel:+33772567489">07 72 56 74 89</a></span></div>
              <div className="info-line"><b>Accueil</b><span>Uniquement sur rendez-vous</span></div>
            </div>
            <div className="info-bloc">
              <h3><span className="pearl sm" /> Prendre rendez-vous</h3>
              <p style={{ fontSize: ".95rem" }}>
                Par téléphone ou SMS au 07 72 56 74 89, ou via notre{" "}
                <Link href="/reservation" style={{ color: "var(--or-fonce)" }}>formulaire de demande de rendez-vous</Link>.
                Nous vous confirmons votre créneau au plus vite.
              </p>
              <div className="btn-row" style={{ marginTop: "1.4rem" }}>
                <a className="btn btn-or" href="tel:+33772567489">Appeler l'institut</a>
                <a className="btn btn-ghost" href="sms:+33772567489">Envoyer un SMS</a>
              </div>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              title="Perlina By L sur la carte"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=15+Rue+Fr%C3%A9d%C3%A9ric+Mistral,+34280+La+Grande-Motte&output=embed"
              style={{ height: 480 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
