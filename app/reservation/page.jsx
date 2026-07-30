import SectionTitle from "../../components/SectionTitle";
import ReservationForm from "../../components/ReservationForm";

export const metadata = { title: "Demande de rendez-vous — Perlina By L · La Grande-Motte" };

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
        <div style={{ marginTop: "3rem" }}>
          <ReservationForm />
        </div>
        <div className="notice">
          <strong>Bientôt :</strong> la réservation en ligne en temps réel, connectée à l'agenda de l'institut, avec
          paiement sécurisé. En attendant, chaque demande est confirmée personnellement — c'est aussi ça, le sur-mesure.
        </div>
      </div>
    </section>
  );
}
