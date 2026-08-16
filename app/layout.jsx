import "./globals.css";
import { Great_Vibes, Cormorant_Garamond, Jost } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500"],
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
  openGraph: {
    title: "Perlina By L — Institut de beauté · La Grande-Motte",
    description: "Venez découvrir la technologie INDIBA® Deep Beauty et révéler votre beauté naturelle.",
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Perlina By L",
    images: [{ url: "/images/salon-1.jpg", width: 1200, height: 1600, alt: "Perlina By L" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${greatVibes.variable} ${cormorant.variable} ${jost.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
