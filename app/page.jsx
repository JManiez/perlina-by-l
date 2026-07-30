import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

const GoldDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <defs>
      <linearGradient id="goldIc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#a37f2e" />
        <stop offset=".5" stopColor="#dfc172" />
        <stop offset="1" stopColor="#a37f2e" />
      </linearGradient>
    </defs>
  </svg>
);

const univers = [
  {
    title: "Soins INDIBA® visage & corps",
    desc: "La radiofréquence 448 kHz : fermeté, éclat et silhouette remodelée.",
    prix: "dès 100 €",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 5 q-8 2 -9 12 q-.4 5 -3 8 q-1.6 2 .8 2.6 l2.6 .6 q-1 3.4 1.4 4 q2.6 .6 2 3.4 q-.6 3.4 4.2 3.4 q4 0 6 -2" />
        <path d="M22 5 q9 -3 13 5 q3 7 -2 12" opacity=".75" />
        <path d="M15.5 18 q2.4 -1.6 4.4 -.3" />
      </svg>
    ),
  },
  {
    title: "Onglerie",
    desc: "Manucure soignée, vernis semi-permanent, french : des mains sublimées.",
    prix: "dès 25 €",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 34 v-12 q0 -3 3 -3 q3 0 3 3 v6" />
        <path d="M19 22 q0 -3 3 -3 q3 0 3 3 v4" opacity=".85" />
        <path d="M25 24 q0 -3 3 -3 q3 0 3 3 v4 q0 8 -9 8 h-3 q-4 0 -6 -4" opacity=".7" />
        <path d="M16 8 q2 -4 4 0 q1.6 3.4 0 6 q-2 3 -4 0 q-1.6 -2.6 0 -6z" />
      </svg>
    ),
  },
  {
    title: "Épilations femme & homme",
    desc: "Sourcils, visage, corps : une épilation douce et précise pour toutes et tous.",
    prix: "dès 10 €",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.7" strokeLinecap="round">
        <path d="M6 21 q14 -13 28 0" />
        <path d="M6 21 q14 10 28 0" opacity=".75" />
        <circle cx="20" cy="20.5" r="4.2" />
        <path d="M12 10 l1.2 -2.6 M20 8 l0 -3 M28 10 l-1.2 -2.6" opacity=".8" />
      </svg>
    ),
  },
  {
    title: "Massages spa aux huiles chaudes",
    desc: "Un moment de détente profonde dans une atmosphère douce et raffinée.",
    prix: "dès 45 €",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 8 q4 6 0 12 q-4 -6 0 -12z" />
        <path d="M10 14 q7 2 8 9 q-7 0 -8 -9z" opacity=".8" />
        <path d="M30 14 q-7 2 -8 9 q7 0 8 -9z" opacity=".8" />
        <path d="M7 25 q13 8 26 0 q-4 8 -13 8 q-9 0 -13 -8z" opacity=".7" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <GoldDefs />

      {/* HERO */}
      <div className="hero">
        <div className="container hero-grid">
          <div>
            <p className="hero-loc">La Grande-Motte · Institut de beauté</p>
            <Image
              className="hero-wordmark logo-mark"
              src="/images/logo-perlina.jpg"
              alt="Perlina By L"
              width={1200}
              height={546}
              priority
            />
            <span className="script tagline">Révélez votre beauté naturelle</span>
            <p className="lead">
              Un écrin de douceur au bord de la Méditerranée, où le savoir-faire esthétique rencontre la technologie{" "}
              <strong>INDIBA® Deep Beauty</strong>.
            </p>
            <div className="btn-row">
              <Link className="btn btn-or" href="/reservation">Prendre rendez-vous</Link>
              <Link className="btn btn-ghost" href="/soins">La carte des soins</Link>
            </div>
          </div>
          <div className="hero-illu">
            <Image
              className="logo-mark"
              src="/images/logo-illustration.jpg"
              alt="Illustration Perlina — femme au chignon entourée de perles"
              width={1400}
              height={851}
              priority
            />
          </div>
        </div>
      </div>

      {/* L'INSTITUT */}
      <section>
        <div className="container">
          <SectionTitle eyebrow="L'institut" pearls>
            Un écrin au cœur de <em>La Grande-Motte</em>
          </SectionTitle>
          <div className="mosaic">
            <Reveal as="figure" className="m-a">
              <Image src="/images/devanture.jpg" alt="Devanture de l'institut Perlina By L" fill={false} width={1200} height={1600} sizes="(max-width:860px) 100vw, 42vw" style={{ height: "100%", objectFit: "cover" }} />
              <figcaption>15 rue Frédéric Mistral</figcaption>
            </Reveal>
            <Reveal as="figure" className="m-b" delay={100}>
              <Image src="/images/salon-2.jpg" alt="L'espace onglerie de l'institut" width={1200} height={1600} sizes="(max-width:860px) 100vw, 58vw" style={{ height: "100%", objectFit: "cover" }} />
              <figcaption>L'espace onglerie</figcaption>
            </Reveal>
            <Reveal as="figure" className="m-c" delay={200}>
              <Image src="/images/salon-1.jpg" alt="L'espace d'accueil de l'institut" width={1200} height={1600} sizes="(max-width:860px) 100vw, 33vw" style={{ height: "100%", objectFit: "cover" }} />
              <figcaption>Votre espace d'accueil</figcaption>
            </Reveal>
            <Reveal as="figure" className="m-d" delay={300}>
              <Image src="/images/manucure.jpg" alt="Manucure réalisée à l'institut" width={1200} height={1600} sizes="(max-width:860px) 100vw, 25vw" style={{ height: "100%", objectFit: "cover" }} />
              <figcaption>Réalisation maison</figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDIBA */}
      <div className="indiba">
        <div className="container indiba-grid">
          <div>
            <p className="eyebrow">La technologie</p>
            <Image className="indiba-logo-img" src="/images/indiba-logo.jpg" alt="INDIBA Deep Beauty" width={400} height={163} />
            <p>
              <strong>INDIBA® EDNA PRO MAX</strong> — la radiofréquence monopolaire brevetée <strong>448&nbsp;kHz</strong>,
              référence de la régénération tissulaire. Sans douleur, sans éviction sociale, des résultats visibles dès
              les premières séances.
            </p>
            <ul className="benefits">
              <li><span className="pearl sm" /><span><b>Améliore</b> la microcirculation</span></li>
              <li><span className="pearl sm" /><span><b>Draine</b> les excès d'eau des tissus</span></li>
              <li><span className="pearl sm" /><span><b>Stimule</b> le collagène et l'élastine</span></li>
              <li><span className="pearl sm" /><span><b>Lisse et raffermit</b> la peau — visage, corps et cheveux</span></li>
            </ul>
          </div>
          <figure className="aa-card">
            <Image src="/images/aa-visage.jpg" alt="Avant / après soin visage radiofréquence INDIBA" width={1000} height={1237} sizes="(max-width:860px) 100vw, 50vw" />
            <figcaption>
              <span className="t">Soin visage radiofréquence</span>
              <span className="s">Après 1 séance</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* RÉSULTATS */}
      <section style={{ paddingTop: "var(--section)" }}>
        <div className="container">
          <SectionTitle eyebrow="Résultats">
            Des résultats <em>visibles</em>
          </SectionTitle>
          <div className="aa-grid">
            {[
              { src: "/images/aa-ventre.jpg", w: 1000, h: 999, t: "Remodelage du ventre", s: "Après 1 séance", alt: "Avant / après remodelage du ventre INDIBA" },
              { src: "/images/aa-silhouette.jpg", w: 1000, h: 1247, t: "Ventre, fesses & dos", s: "Après 3 séances", alt: "Avant / après traitement ventre, fesses et dos INDIBA" },
              { src: "/images/pedicure.jpg", w: 1200, h: 1600, t: "Beauté des pieds", s: "Réalisation Perlina", alt: "Pédicure french réalisée à l'institut" },
            ].map((a, i) => (
              <Reveal as="figure" className="aa-card" key={a.src} delay={i * 100}>
                <Image src={a.src} alt={a.alt} width={a.w} height={a.h} sizes="(max-width:860px) 100vw, 33vw" />
                <figcaption>
                  <span className="t">{a.t}</span>
                  <span className="s">{a.s}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <p className="aa-note">
            Photos INDIBA® Deep Beauty France et réalisations de l'institut. Les résultats peuvent varier selon les personnes.
          </p>
        </div>
      </section>

      {/* UNIVERS */}
      <section>
        <div className="container">
          <SectionTitle eyebrow="Nos univers" center pearls>
            Quatre univers de <em>soins</em>
          </SectionTitle>
          <div className="cards">
            {univers.map((u) => (
              <Link href="/soins" className="card" key={u.title}>
                <div className="icon-ring">{u.icon}</div>
                <h3>{u.title}</h3>
                <p>{u.desc}</p>
                <div className="sep" />
                <span className="prix">{u.prix}</span>
                <span className="lien">Découvrir</span>
              </Link>
            ))}
          </div>
          <div className="center">
            <Link className="btn btn-or" href="/soins">Voir la carte des soins</Link>
          </div>
        </div>
      </section>
    </>
  );
}
