import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://archanawebdeveloper.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Archana Web Developer | Jasa Pembuatan Website Profesional Klaten Jawa Tengah",
    template: "%s | Archana Web Developer",
  },
  description:
    "Jasa pembuatan website profesional di Klaten, Jawa Tengah. Spesialis website company profile, landing page bisnis, web app custom, sistem informasi, dan UI/UX design. Harga mulai Rp 500.000, garansi kepuasan 100%, hosting 1 tahun gratis.",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan website klaten",
    "jasa pembuatan website jawa tengah",
    "jasa website murah",
    "web developer klaten",
    "web developer indonesia",
    "jasa landing page",
    "jasa landing page bisnis",
    "jasa pembuatan web app",
    "jasa sistem informasi",
    "jasa ui ux design",
    "jasa website company profile",
    "jasa website toko online",
    "jasa pembuatan website profesional",
    "archana web developer",
    "archana",
    "pembuatan website surakarta",
    "pembuatan website solo",
    "pembuatan website yogyakarta",
    "freelance web developer indonesia",
    "next js developer indonesia",
    "react developer indonesia",
  ],
  authors: [{ name: "Archana Web Developer", url: siteUrl }],
  creator: "Archana Web Developer",
  publisher: "Archana Web Developer",
  category: "Web Development Services",
  applicationName: "Archana Web Developer",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "id-ID": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Archana Web Developer",
    title:
      "Archana Web Developer | Jasa Pembuatan Website Profesional Klaten Jawa Tengah",
    description:
      "Jasa pembuatan website modern, cepat, dan profesional. Spesialis website company profile, landing page, web app, sistem informasi, dan UI/UX design dengan harga terjangkau dan kualitas premium.",
    images: [
      {
        url: "/hero-mockup.png",
        width: 1200,
        height: 630,
        alt: "Archana Web Developer - Jasa Pembuatan Website Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Archana Web Developer | Jasa Pembuatan Website Profesional",
    description:
      "Jasa pembuatan website modern dan profesional di Klaten, Jawa Tengah. Mulai Rp 500.000.",
    images: ["/hero-mockup.png"],
    creator: "@archanawebdev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Tambahkan kode verifikasi Google Search Console di sini setelah verifikasi
    // google: "your-google-verification-code",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Archana Web Developer",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Jasa pembuatan website profesional, landing page, web app, sistem informasi, dan UI/UX design di Klaten, Jawa Tengah.",
    email: "archanaaditama@gmail.com",
    telephone: "+62895363076706",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Klaten",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    sameAs: ["https://wa.me/62895363076706"],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "Archana Web Developer",
    image: `${siteUrl}/logo.png`,
    url: siteUrl,
    telephone: "+62895363076706",
    email: "archanaaditama@gmail.com",
    priceRange: "Rp 500.000 - Rp 5.000.000+",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Klaten",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.7058,
      longitude: 110.6064,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "30",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Indonesia",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Jasa Pembuatan Website",
    provider: {
      "@type": "Organization",
      name: "Archana Web Developer",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Archana Web Developer",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Company Profile",
            description:
              "Website profesional yang merepresentasikan brand bisnis Anda dengan desain modern.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Page Bisnis",
            description:
              "Landing page high-converting untuk mengubah pengunjung menjadi pelanggan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web App Custom",
            description:
              "Aplikasi web custom sesuai kebutuhan bisnis dengan teknologi modern.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sistem Informasi",
            description:
              "Sistem informasi terintegrasi untuk mengelola data dan proses bisnis.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description:
              "Desain antarmuka intuitif dan menarik untuk pengalaman pengguna terbaik.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "Archana Web Developer",
    description:
      "Jasa pembuatan website profesional di Klaten, Jawa Tengah.",
    inLanguage: "id-ID",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Berapa biaya pembuatan website di Archana Web Developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harga pembuatan website di Archana Web Developer mulai dari Rp 500.000 untuk paket Starter (landing page), Rp 2.000.000 untuk paket Professional (website 5-7 halaman), dan Rp 5.000.000+ untuk paket Enterprise (web app custom dan sistem informasi).",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama proses pembuatan website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Proses pembuatan website bervariasi tergantung kompleksitas project. Landing page biasanya selesai dalam 3-7 hari, website company profile 1-2 minggu, sedangkan web app custom dan sistem informasi membutuhkan 3-6 minggu.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah sudah termasuk hosting dan domain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, semua paket sudah termasuk hosting selama 1 tahun. Domain dapat disediakan sesuai permintaan.",
        },
      },
      {
        "@type": "Question",
        name: "Teknologi apa yang digunakan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami menggunakan tech stack modern seperti Next.js, React, TypeScript, Tailwind CSS, dan teknologi terbaru lainnya untuk memastikan website cepat, aman, dan SEO friendly.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah ada garansi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, kami memberikan garansi kepuasan 100% dan revisi unlimited untuk paket Professional dan Enterprise. Free maintenance 3-6 bulan setelah project selesai.",
        },
      },
    ],
  };

  return (
    <html lang="id" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
