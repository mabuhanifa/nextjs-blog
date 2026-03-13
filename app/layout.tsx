import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Mono, Lora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import BackToTop from "./components/BackToTop";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Dark Archive",
  description:
    "Exploring Philosophy, Code, and Art — A collection of writings, photographs, and wanderings through time and thought.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${ibmPlexMono.variable} ${lora.variable}`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Newsletter />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
