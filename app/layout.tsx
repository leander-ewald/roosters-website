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
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
