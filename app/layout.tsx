import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, League_Spartan } from "next/font/google";
import Script from "next/script";
import { siteMeta } from "@/lib/content";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
  keywords: siteMeta.keywords,
  metadataBase: new URL(siteMeta.siteUrl),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    siteName: "Fetan Advertising",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-MNZC2ZQQ"
        strategy="afterInteractive"
      />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-MNZC2ZQQ');
        `}
      </Script>
      <body className={ibmPlexMono.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNZC2ZQQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
