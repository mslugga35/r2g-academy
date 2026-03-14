import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R2G Academy | Elite Baseball & Softball Training | Altamonte Springs FL",
  description: "Elite baseball and softball training at R2G Academy in Altamonte Springs, FL. Indoor batting cages, hitting lessons, pitching training, pro-level instruction. Ages 5-18. Call (352) 298-6699.",
  keywords: "Jemile Weeks baseball training, indoor batting cages Altamonte Springs, baseball training Seminole County, MLB player training Orlando, hitting lessons Florida, softball training, pitching lessons, youth baseball Orlando, R2G Academy, Tony Vega baseball, after school baseball program",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "R2G Academy | Elite Baseball & Softball Training",
    description: "Elite baseball and softball training at R2G Academy. Indoor batting cages, pro-level instruction, ages 5-18. Altamonte Springs, FL.",
    url: "https://r2gacademy.com",
    siteName: "R2G Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R2G Academy | MLB Pro Training in Orlando",
    description: "Elite baseball & softball training at R2G Academy. Indoor batting cages, pro instruction, ages 5-18. Altamonte Springs, FL.",
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
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "R2G Academy",
              description: "Premier indoor batting cages and baseball/softball training facility featuring instruction from former MLB player Jemile Weeks",
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
                "Oviedo",
                "Winter Park",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Training Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cage Rentals",
                      description: "Team rentals (2-hour sessions) and single cage batting practice in 63' x 26' dividable indoor batting cage with climate control",
                      price: "250",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Group Open Field Workout with Jemile Weeks",
                      description: "Elite group training from former MLB player",
                      price: "70",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pitching Training with Jahmon Taylor",
                      description: "Pitching mechanics and mental approach training with NSCA certified specialist",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fitness Assessment",
                      description: "Comprehensive fitness evaluation for ages 12-15",
                      price: "75",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Training with Tony Vega",
                      description: "Private 1-on-1 baseball training with former Duke coach",
                      price: "125",
                      priceCurrency: "USD",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {/* Person Schema - Jemile Weeks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jemile Weeks",
              jobTitle: "Baseball Trainer & Former MLB Player",
              description: "Former MLB player who played for Oakland Athletics, Baltimore Orioles, Boston Red Sox, and San Diego Padres. 12th overall pick in 2008 MLB Draft. .303 batting average as rookie. Team USA First Base Coach. Now offering elite baseball training at R2G Academy.",
              worksFor: {
                "@type": "SportsActivityLocation",
                name: "R2G Academy",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "University of Miami",
                },
                {
                  "@type": "HighSchool",
                  name: "Lake Brantley High School",
                },
              ],
              sameAs: [
                "https://en.wikipedia.org/wiki/Jemile_Weeks",
                "https://www.baseball-reference.com/players/w/weeksje01.shtml",
                "https://www.mlb.com/player/jemile-weeks-457789",
              ],
              knowsAbout: ["Baseball", "Hitting", "Infield Defense", "Baserunning", "Player Development"],
            }),
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who is Jemile Weeks and does he train at R2G Academy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Jemile Weeks is a former MLB player who played for the Oakland Athletics, Baltimore Orioles, Boston Red Sox, and San Diego Padres. He was the 12th overall pick in the 2008 MLB Draft and hit .303 as a rookie. He served as Team USA First Base Coach and coached for the New York Mets. Jemile offers skill development training at R2G Academy for $70 per 2-hour session on Saturdays and Sundays.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where is R2G Academy located?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "R2G Academy is located at 1750 S. Ronald Reagan Blvd, Altamonte Springs, FL 32701, in Seminole County. We serve the greater Orlando area including Longwood, Lake Mary, Sanford, Casselberry, Winter Springs, and Oviedo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the prices for baseball training at R2G Academy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "R2G Academy offers: Cage Rentals — team sessions at $250 for 2 hours and single cage batting practice (use code KICKOFF50 for $50 off team rentals), Group Open Field Workout with ex-MLB Player Jemile Weeks at $70 for 2 hours, After School Program at $100/week (Monday-Friday), Fitness Assessment at $75 for 45 minutes, and Private Training with Former Duke Coach Tony Vega at $125/hour.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does R2G Academy have indoor batting cages?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, R2G Academy features a 63-foot by 26-foot dividable indoor batting cage that is fully climate-controlled with air conditioning. We also have a precision-focused bullpen for pitching training. Our facility is open Monday-Friday 2PM-10PM.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What ages does R2G Academy train?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "R2G Academy trains youth athletes ages 5-18 in baseball and softball. Our After School Program serves school-age children, and our Fitness Assessment is specifically designed for ages 12-15.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I book training at R2G Academy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For Training with Tony Vega, book online at r2gacademy.com. For Skill Development with Jemile Weeks, register through the Jotform on our website. You can also call us at (352) 298-6699 or email info@r2gacademy.com.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
