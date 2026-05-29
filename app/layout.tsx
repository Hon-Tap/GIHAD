import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "GIHAD | Global Intervention for Health and Agricultural Development",
  description:
    "GIHAD is dedicated to improving health, agriculture, sustainability, and community empowerment initiatives.",
  keywords: [
    "GIHAD",
    "Health",
    "Agriculture",
    "NGO",
    "South Sudan",
    "Community Development",
    "Sustainability",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-white text-zinc-900 antialiased">
        <div className="flex min-h-screen flex-col">
          
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </div>
      </body>
    </html>
  );
}