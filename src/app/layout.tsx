import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ferel - Market Intelligence Terminal | AI-Powered Trading Intelligence",
  description: "Institutional-grade market intelligence for active traders, portfolio managers, and institutional desks. AI-curated macro and geopolitical news with impact scoring and actionable context.",
  keywords: ["market intelligence", "trading terminal", "AI news", "macro analysis", "geopolitical intelligence", "institutional trading", "portfolio management", "Indian markets", "NSE", "BSE", "financial intelligence"],
  authors: [{ name: "Ferelvian" }],
  openGraph: {
    title: "Ferel - The Market Intelligence Terminal",
    description: "AI-curated macro and geopolitical intelligence for professionals who move markets.",
    type: "website",
  },
  verification: {
    google: "gwJEkic5PbVWrM3Hv4rfKSLIKnGZ1y270R1Bes5ZfqQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
