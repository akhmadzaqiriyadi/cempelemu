import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sate Kambing Muda Cempe Lemu | Spesialis Sate Kambing Muda Khas Tegal",
  description:
    "Nikmati sajian sate kambing muda pilihan dari Cempe Lemu — lembut, juicy, dan otentik khas Tegal. Tersedia di 3 cabang: Tegal, Adiwerna, dan Exit Tol Slawi. Pesan sekarang!",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  keywords: [
    "sate kambing muda",
    "cempe lemu",
    "sate khas tegal",
    "restoran kambing tegal",
    "gulai kambing",
    "tongseng kambing",
  ],
  openGraph: {
    title: "Sate Kambing Muda Cempe Lemu",
    description: "Spesialis Sate Kambing Muda Khas Tegal — Lembut, Juicy & Otentik.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
