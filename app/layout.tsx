import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Iserlohn Roosters | Offizielle Website | DEL Eishockey",
    template: "%s | Iserlohn Roosters",
  },
  description:
    "Offizielle Website der Iserlohn Roosters. News, Spielplan, Kader, Tickets und alles rund um DEL-Eishockey aus dem Sauerland.",
  keywords: [
    "Iserlohn Roosters",
    "DEL",
    "Eishockey",
    "Iserlohn",
    "Sauerland",
    "Deutsche Eishockey Liga",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Iserlohn Roosters",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsTeam",
              name: "Iserlohn Roosters",
              alternateName: "Roosters",
              sport: "Ice Hockey",
              memberOf: {
                "@type": "SportsOrganization",
                name: "Deutsche Eishockey Liga (DEL)",
              },
              url: "https://www.iserlohn-roosters.de",
              logo: "https://www.iserlohn-roosters.de/logo.png",
              foundingDate: "1959",
              location: {
                "@type": "Place",
                name: "Eissporthalle am Seilersee",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Seilerseestraße 105",
                  addressLocality: "Iserlohn",
                  postalCode: "58636",
                  addressCountry: "DE",
                },
              },
              telephone: "+49-2371-9519510",
              email: "info@iserlohn-roosters.de",
              sameAs: [
                "https://www.facebook.com/iserlohnroosters",
                "https://www.instagram.com/iserlohnroosters",
                "https://twitter.com/ECIserlohn",
                "https://www.youtube.com/@iserlohnroosters",
              ],
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
