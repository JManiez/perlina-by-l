import SectionTitle from "../../components/SectionTitle";
import ReservationForm from "../../components/ReservationForm";
import FadeIn from "../../components/gsap/FadeIn";

export const metadata = { title: "Demande de rendez-vous" };

export default function Reservation() {
  return (
    <section className="page-head">
      <div className="container resa-wrap">
        <SectionTitle
          eyebrow="Rendez-vous"
          center
          pearls
          lead="Indiquez vos disponibilités : Lorie vous confirme personnellement votre créneau par SMS ou par téléphone."
        >
          Demander un <em>rendez-vous</em>
        </SectionTitle>
        <FadeIn>
          <div style={{ marginTop: "3.2rem" }}>
            <ReservationForm />
          </div>
          <div className="notice">
            <strong>Bientôt :</strong> la réservation en ligne en temps réel, connectée à l&apos;agenda de
            l&apos;institut, avec paiement sécurisé. En attendant, chaque demande est confirmée personnellement — c&apos;est
            aussi ça, le sur-mesure.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
