import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "../../components/Navigation/Navbar";
import { Footer } from "@/components/Footer/footer";
import "@/app/globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xolace Inc",
  description: "Welcome to Xolace Inc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`min-h-screen bg-gray-500 ${bricolageGrotesque.className}`}>
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
