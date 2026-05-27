import type { Metadata } from "next";
import { Spectral, JetBrains_Mono } from "next/font/google";
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
      className={`${spectral.variable} ${jetbrainsMono.variable} scroll-smooth`}
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
      <body className="font-mono antialiased min-h-screen flex flex-col bg-[#000000] text-[#f0e8d0]">
        <div className="crt-overlay" />
        <div className="crt-scanline" aria-hidden="true" />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.querySelectorAll('.glass-card').forEach((el,i)=>{el.style.setProperty('--shine-delay',String(Math.random()*12))})`,
          }}
        />
      </body>
    </html>
  );
}
