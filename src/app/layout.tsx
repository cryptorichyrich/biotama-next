import type { Metadata } from "next";
import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bio Lumbantoruan — System Architect & Fintech Engineer",
  description:
    "I design systems that move money, connect markets, and scale under pressure. System Architect and Fintech Engineer based in Jakarta, Indonesia.",
  keywords: [
    "System Architect",
    "Fintech Engineer",
    "Full Stack Developer",
    "Payment Gateway",
    "PCI-DSS",
    "Jakarta",
    "Indonesia",
  ],
  authors: [{ name: "Bio Lumbantoruan" }],
  openGraph: {
    title: "Bio Lumbantoruan — System Architect & Fintech Engineer",
    description:
      "I design systems that move money, connect markets, and scale under pressure.",
    type: "website",
    locale: "en_US",
    siteName: "Bio Lumbantoruan",
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
      className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bio Lumbantoruan",
              jobTitle: "System Architect & Fintech Engineer",
              description:
                "I design systems that move money, connect markets, and scale under pressure.",
              url: "https://biolumbantoruan.com",
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
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-[#05070a] text-[#eaf1f8]`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
