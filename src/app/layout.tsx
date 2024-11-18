import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import GoogleAnalytics from '@/components/google-analytics';
import { GoogleTagManager } from '@next/third-parties/google';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PoYuChen's Website",
  description: "寫點東西在網路上留點痕跡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw">
      <GoogleTagManager gtmId="GTM-NRFLHNHG" />
      <GoogleAnalytics/>
      <body className={inter.className}>
        <div className="min-h-screen">
          <Nav/>
          <div className="container mx-auto px-4">
          {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
