import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R2G Academy | Indoor Batting Cages & Baseball Training | Seminole County FL",
  description: "Premier indoor batting cages and baseball/softball training facility in Altamonte Springs, FL. Expert hitting lessons, pitching training, team sessions. Home of World Series Champions. Seminole County's top training academy.",
  keywords: "indoor batting cages Seminole County, baseball training Altamonte Springs, hitting lessons Florida, softball training Orlando, pitching lessons, team training, youth baseball, R2G Academy",
  openGraph: {
    title: "R2G Academy | Train Like Champions",
    description: "Premier indoor batting cages and baseball/softball training in Seminole County, FL. Where champions are made.",
    url: "https://r2gacademy.com",
    siteName: "R2G Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R2G Academy | Indoor Batting Cages & Training",
    description: "Premier baseball/softball training in Seminole County, FL",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://r2gacademy.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "R2G Academy",
              description: "Premier indoor batting cages and baseball/softball training facility in Seminole County, Florida",
              url: "https://r2gacademy.com",
              telephone: "(352) 298-6699",
              email: "info@r2gacademy.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1750 S. Ronald Reagan Blvd",
                addressLocality: "Altamonte Springs",
                addressRegion: "FL",
                postalCode: "32701",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.6611,
                longitude: -81.3656,
              },
              openingHours: ["Mo-Fr 14:00-22:00", "Sa-Su by appointment"],
              priceRange: "$$",
              sameAs: [],
              areaServed: [
                "Seminole County",
                "Altamonte Springs",
                "Orlando",
                "Lake Mary",
                "Sanford",
                "Winter Springs",
                "Casselberry",
                "Longwood",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Training Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Indoor Batting Cages",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hitting Lessons",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pitching Training",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Team Training Sessions",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
