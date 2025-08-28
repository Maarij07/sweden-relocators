import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
