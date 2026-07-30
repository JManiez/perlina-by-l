import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";

export const metadata = { title: "À propos — Perlina By L · La Grande-Motte" };

export default function APropos() {
  return (
    <section className="page-head">
      <div className="container">
        <SectionTitle eyebrow="À propos" center pearls>
          L'histoire de <em>Perlina</em>
        </SectionTitle>
        <div className="apropos-grid">
          <div className="portrait-img">
            <Image src="/images/devanture.jpg" alt="La devanture de Perlina By L à La Grande-Motte" width={1200} height={1600} sizes="(max-width:860px) 100vw, 45vw" />
          </div>
          <div>
            <h3 style={{ fontSize: "1.8rem" }}>Un écrin de beauté à La Grande-Motte</h3>
            <p style={{ marginTop: "1.1rem" }}>
              Comme la perle naît de la nacre, <strong>Perlina By L</strong> est né d'une passion : celle de révéler
              la beauté singulière de chacune. Installé au <strong>15 rue Frédéric Mistral</strong>, au cœur de
              La Grande-Motte, l'institut vous accueille sur rendez-vous dans une atmosphère douce et lumineuse,
              entre ivoire, nacre et reflets dorés.
            </p>
            <blockquote>« L'expertise beauté, entre technologie et élégance. » — Lorie, fondatrice</blockquote>
            <p>
              Fondé par <strong>Lorie</strong>, le « L » de Perlina, l'institut allie savoir-faire esthétique et
              technologies de pointe : la radiofréquence <strong>INDIBA® EDNA PRO MAX</strong>, des protocoles
              sur-mesure et des soins d'exception, dans le plus grand respect de votre peau.
            </p>
            <div className="valeurs">
              <span className="tag">Sur rendez-vous</span>
              <span className="tag">INDIBA® EDNA PRO MAX</span>
              <span className="tag">Sur-mesure</span>
              <span className="tag">Résultats</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
