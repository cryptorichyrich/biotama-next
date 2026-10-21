export interface AboutPrinciple {
  title: string;
  body: string;
}

export interface AboutCopy {
  heading: string;
  epigraph: string;
  paragraphs: string[];
  principles: AboutPrinciple[];
}

export const aboutCopy: { en: AboutCopy; id: AboutCopy } = {
  en: {
    heading: "How I think about systems",
    epigraph:
      "Architecture is the set of decisions that are expensive to change. My job is to make that cost visible, then choose deliberately.",
    paragraphs: [
      "I am a system architect. For more than a decade I have worked where money moves and downtime is not abstract: payment integrations under PCI-DSS discipline, brokerage platforms and trading operations, ERP rollouts, and AI systems that run in production.",
      "Architecture is not a diagram or a stack. It is the set of decisions that are expensive to reverse: where the boundaries sit, which contracts the parts speak, how data flows, and what happens when something fails. My job is to make those decisions explicit, choose the set that fits the business, and write down why.",
      "I stay hands-on, because a design the team cannot build is not a design. React, Next.js, Astro, Node, Python, SQL, Docker, CI/CD. And I measure architecture the only way that matters: by how cheaply the team can change it.",
    ],
    principles: [
      {
        title: "Systems over features",
        body: "Model boundaries, data flows, and failure modes before code. Features are easy to add; bad seams are expensive to remove.",
      },
      {
        title: "Trade-offs over hype",
        body: "Every choice has a cost. I make the cost explicit and pick what fits the business, not what is trending.",
      },
      {
        title: "Strategy first",
        body: "Invest where the business differentiates, buy or borrow the rest. Architecture follows the win condition.",
      },
      {
        title: "Built to change",
        body: "Reversible decisions, recorded rationale, boring technology where it counts. The system should get cheaper to evolve, not more expensive.",
      },
    ],
  },
  id: {
    heading: "Cara saya memikirkan sistem",
    epigraph:
      "Arsitektur adalah keputusan yang mahal untuk diubah. Tugas saya membuat biaya itu terlihat, lalu memilih dengan sadar.",
    paragraphs: [
      "Saya seorang arsitek sistem. Lebih dari satu dekade saya bekerja di tempat uang bergerak dan downtime bukan hal abstrak: integrasi pembayaran dengan disiplin PCI-DSS, platform brokerage dan operasi trading, rollout ERP, serta sistem AI yang berjalan di produksi.",
      "Arsitektur bukan diagram atau stack. Arsitektur adalah kumpulan keputusan yang mahal untuk dibalik: di mana batas sistem berada, kontrak apa yang dipakai antar bagian, bagaimana data mengalir, dan apa yang terjadi ketika sesuatu gagal. Tugas saya adalah membuat keputusan itu eksplisit, memilih set yang cocok dengan bisnis, dan menuliskan alasannya.",
      "Saya tetap hands-on, karena desain yang tidak bisa dibangun oleh tim bukanlah desain. React, Next.js, Astro, Node, Python, SQL, Docker, CI/CD. Dan saya mengukur arsitektur dengan satu cara: seberapa murah tim bisa mengubahnya.",
    ],
    principles: [
      {
        title: "Sistem di atas fitur",
        body: "Modelkan batas, aliran data, dan mode kegagalan sebelum menulis kode. Fitur mudah ditambah; seam yang salah mahal dihapus.",
      },
      {
        title: "Trade-off di atas hype",
        body: "Setiap pilihan punya biaya. Saya membuat biaya itu eksplisit dan memilih yang cocok dengan bisnis, bukan yang sedang tren.",
      },
      {
        title: "Strategi dulu",
        body: "Investasi di tempat bisnis berbeda; sisanya beli atau pinjam. Arsitektur mengikuti kondisi kemenangan.",
      },
      {
        title: "Dibangun untuk berubah",
        body: "Keputusan yang bisa dibalik, alasan tercatat, teknologi yang membosankan di titik yang menentukan. Sistem harus makin murah dievolusi, bukan makin mahal.",
      },
    ],
  },
};
