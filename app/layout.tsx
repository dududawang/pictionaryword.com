import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pictionary Word Generator - Free Drawing Game Words",
  description: "Generate random words for Pictionary instantly. Easy, medium, and hard difficulties with built-in timer. Perfect for parties and family game nights.",
  keywords: ["pictionary", "word generator", "drawing game", "party games", "family games", "random words", "game night"],
  authors: [{ name: "Pictionary Word Generator" }],
  creator: "Pictionary Word Generator",
  publisher: "Pictionary Word Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pictionary-word-generator.vercel.app",
    siteName: "Pictionary Word Generator",
    title: "Pictionary Word Generator - Free Drawing Game Words",
    description: "Generate random words for Pictionary instantly. Easy, medium, and hard difficulties with built-in timer. Perfect for parties and family game nights.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pictionary Word Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pictionary Word Generator - Free Drawing Game Words",
    description: "Generate random words for Pictionary instantly. Easy, medium, and hard difficulties with built-in timer.",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9PT4QLGRTX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9PT4QLGRTX');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
