import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { HeaderProvider } from "@/context/headerContext";

export const metadata: Metadata = {
  title: "Ayush Bisht - Portfolio",
  description: "Full Stack Developer specializing in MERN stack and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Geo-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BrushFont.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <HeaderProvider>
        <body
          className="bg-black text-white min-h-screen font-geo"
          style={{ backgroundImage: "url('/background/bg.svg')" }}
        >
          <Header />
          {children}
        </body>
      </HeaderProvider>
    </html>
  );
}
