import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { WorkShowcase } from "@/components/work-showcase";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { BlogPreview } from "@/components/blog-preview";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const siteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Bio Lumbantoruan",
      givenName: "Bio",
      familyName: "Lumbantoruan",
      jobTitle: "Solutions Architect & Fintech Engineer",
      description:
        "Solutions architect for systems where failure is expensive: payments, platforms, and AI in production. Trade-offs over hype; decisions recorded.",
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
        "Solution Architecture",
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
        { "@type": "CollegeOrUniversity", name: "Swiss German University" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Bio Lumbantoruan",
      url: "https://biotama.cv",
      description:
        "Portfolio and blog of Bio Lumbantoruan — Solutions Architect & Fintech Engineer",
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
  ];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <WorkShowcase />
        <Skills />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
