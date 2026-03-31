import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ferel - Real-time Market Intelligence, Powered by AI",
  description: "Master the Indian markets with AI-analyzed news and global macro insights delivered to your fingertips.",
  keywords: ["AI", "financial intelligence", "market analysis", "Indian stocks", "NSE", "BSE", "trading"],
  authors: [{ name: "Ferelvian" }],
  openGraph: {
    title: "Ferel - AI-Powered Financial Intelligence",
    description: "Real-time market intelligence powered by AI",
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
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
