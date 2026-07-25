import "./globals.css";
import { Great_Vibes, Cormorant_Garamond, Jost } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perlina-by-l.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Perlina By L — Institut de beauté · La Grande-Motte",
    template: "%s · Perlina By L",
  },
  description:
    "Perlina By L, institut de beauté à La Grande-Motte. Technologie INDIBA® Deep Beauty, onglerie, massages, épilations. 15 rue Frédéric Mistral — sur rendez-vous au 07 72 56 74 89.",
  keywords: [
    "institut de beauté",
    "La Grande-Motte",
    "INDIBA",
    "onglerie",
    "épilation",
    "massage",
    "Perlina By L",
  ],
  openGraph: {
    title: "Perlina By L — Institut de beauté · La Grande-Motte",
    description:
      "Venez découvrir la technologie INDIBA® Deep Beauty et révéler votre beauté naturelle.",
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Perlina By L",
    images: [{ url: "/images/devanture.jpg", width: 1200, height: 1600, alt: "Perlina By L" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perlina By L — Institut de beauté · La Grande-Motte",
    description: "INDIBA® Deep Beauty, onglerie, massages et épilations à La Grande-Motte.",
    images: ["/images/devanture.jpg"],
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Perlina By L",
  description:
    "Institut de beauté à La Grande-Motte — INDIBA® Deep Beauty, onglerie, massages, épilations.",
  url: siteUrl,
  telephone: "+33772567489",
  address: {
    "@type": "PostalAddress",
    streetAddress: "15 rue Frédéric Mistral",
    addressLocality: "La Grande-Motte",
    postalCode: "34280",
    addressCountry: "FR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    description: "Uniquement sur rendez-vous",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${greatVibes.variable} ${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
