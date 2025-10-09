import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "../../components/Navigation/Navbar";
import { Footer } from "@/components/Footer/footer";
import "@/app/globals.css";
import orgSchema from "@/constants/seo/orgSchema";
import faqSchema from "@/constants/seo/faqSchema";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://xolace.app",
  },
  title: {
    template: "%s · Xolace Inc",
    default: "Xolace Inc",
  },
  applicationName: "Xolace",
  authors: [{ name: "Xolace Inc.", url: "https://xolaceinc.app/about#mission-vision" }],
  description:
    "Xolace is a safe hybrid platform for sharing your thoughts, connecting with supportive peers, and accessing professional mental health care — designed to help you share, connect, and heal.",
  keywords: [
    "Xolace",
    "Mental Health",
    "Social Support",
    "Peer Connection",
    "Therapy",
    "Self-expression",
    "Emotional Wellbeing",
    "Community",
    "Mental Health Awareness",
  ],
  openGraph: {
    title: "Xolace | Share, Connect & Heal",
    description:
      "A safe social platform for sharing your thoughts and connecting with supportive peers and professionals.",
    url: "https://xolace.app",
    siteName: "Xolace",
    images: [
      {
        url: "https://xolace.app/assets/images/xolace-og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Xolace social platform preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xolace | Share, Connect & Heal",
    description:
      "A safe social platform for sharing your thoughts and connecting with supportive peers and professionals.",
    site: "@xolaceapp",
    creator: "@xolaceapp",
    images: [
      {
        url: "https://xolace.app/assets/images/xolace-og-banner.webp",
        alt: "Xolace OG image preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout(
  {
    children,
  }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 ${bricolageGrotesque.className}`}
    >
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </head>
    <body>
    <Navbar />
    {children}
    <Footer />
    </body>
    </html>
  );
}
