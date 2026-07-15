import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, League_Spartan } from "next/font/google";
import { siteMeta } from "@/lib/content";
import "./globals.css";

const leagueSpartan = League_Spartan({
  weight: ["800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  );
}
