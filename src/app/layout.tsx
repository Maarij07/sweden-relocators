import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

// Primary font for body text, buttons, and UI elements
const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Secondary font for headings and emphasis text
const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sweden Relocators - Expert Immigration & Relocation Services",
  description: "Professional relocation services to Sweden. We offer complete immigration solutions including residence & work permits, home finding, school pre-search, and integration services.",
  keywords: "Sweden immigration, relocation services, work permit, residence permit, family reunification, visa application",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Sweden Relocators - Expert Immigration & Relocation Services",
    description: "Professional relocation services to Sweden with expert advice and comprehensive support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.variable} ${barlow.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
