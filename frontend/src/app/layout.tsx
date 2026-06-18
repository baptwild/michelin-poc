import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./michelin-poc.css";
import Header from "@/components/Header/Header";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const michelin = localFont({
  src: "./fonts/Michelin-Bold.woff2",
  variable: "--font-michelin",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Michelin",
  description: "Michelin POC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${notoSans.variable} ${michelin.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
