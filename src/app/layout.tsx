import type { Metadata } from "next";
import { Spectral, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ShineInitializer } from "@/components/ShineInitializer";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biotama.cv"),
  title: {
    default: "Bio Lumbantoruan — System Architect & Fintech Engineer",
    template: "%s | Bio Lumbantoruan",
  },
  description:
    "Architect of payment systems, microservices, and scalable fintech infrastructure. 14+ years designing systems that move money across 69 countries.",
  keywords: [
    "System Architect",
    "Fintech Engineer",
    "Payment Gateway Architecture",
    "PCI-DSS Compliance",
    "Microservices Design",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Jakarta Fintech",
    "Indonesia Software Architect",
    "Senior Backend Engineer",
    "Financial Systems Design",
    "Distributed Systems",
    "API Design",
    "Node.js Backend",
  ],
  authors: [{ name: "Bio Lumbantoruan" }],
  creator: "Bio Lumbantoruan",
  publisher: "Bio Lumbantoruan",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    siteName: "Bio Lumbantoruan",
    title: "Bio Lumbantoruan — System Architect & Fintech Engineer",
    description:
      "Architect of payment systems, microservices, and scalable fintech infrastructure. 14+ years designing systems that move money across 69 countries.",
    url: "https://biotama.cv",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Bio Lumbantoruan — System Architect & Fintech Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bio Lumbantoruan — System Architect & Fintech Engineer",
    description:
      "Architect of payment systems, microservices, and scalable fintech infrastructure. 14+ years designing systems that move money across 69 countries.",
    images: ["/og-image.svg"],
    creator: "@biolumbantoruan",
  },
  alternates: {
    canonical: "https://biotama.cv",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${jetbrainsMono.variable} scroll-smooth`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Bio Lumbantoruan",
                givenName: "Bio",
                familyName: "Lumbantoruan",
                jobTitle: "System Architect & Fintech Engineer",
                description:
                  "Architect of payment systems, microservices, and scalable fintech infrastructure. 14+ years designing systems that move money across 69 countries.",
                url: "https://biotama.cv",
                sameAs: [
                  "https://linkedin.com/in/biolumbantoruan",
                  "https://github.com/cryptorichyrich",
                  "https://x.com/biolumbantoruan",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Jakarta",
                  addressCountry: "ID",
                },
                knowsAbout: [
                  "System Architecture",
                  "Fintech Engineering",
                  "Payment Gateways",
                  "PCI-DSS Compliance",
                  "Full Stack Development",
                  "Microservices",
                  "Docker",
                  "React",
                  "Node.js",
                  "FastAPI",
                  "PostgreSQL",
                  "GraphQL",
                  "Distributed Systems",
                  "API Design",
                ],
                alumniOf: [
                  { "@type": "CollegeOrUniversity", name: "Universitas Indonesia" },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Bio Lumbantoruan",
                url: "https://biotama.cv",
                description:
                  "Portfolio and blog of Bio Lumbantoruan — System Architect & Fintech Engineer",
                inLanguage: "en-US",
                publisher: {
                  "@type": "Person",
                  name: "Bio Lumbantoruan",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Home",
                url: "https://biotama.cv",
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://biotama.cv" },
                    { "@type": "ListItem", position: 2, name: "About", item: "https://biotama.cv/#about" },
                    { "@type": "ListItem", position: 3, name: "Experience", item: "https://biotama.cv/#experience" },
                    { "@type": "ListItem", position: 4, name: "Projects", item: "https://biotama.cv/#projects" },
                    { "@type": "ListItem", position: 5, name: "Skills", item: "https://biotama.cv/#skills" },
                    { "@type": "ListItem", position: 6, name: "Blog", item: "https://biotama.cv/blog" },
                  ],
                },
              },
            ]),
          }}
        />
      </head>
      <body className="font-mono antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <div className="crt-overlay" />
          <div className="crt-scanline" aria-hidden="true" />
          {children}
        </ThemeProvider>
        <ShineInitializer />
      </body>
    </html>
  );
}
