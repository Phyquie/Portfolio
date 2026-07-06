import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { HeaderProvider } from "@/context/headerContext";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayush Bisht | Full Stack Developer",
    template: "%s | Ayush Bisht",
  },
  description:
    "Ayush Bisht is a full stack developer specializing in web development, app developemnt and ui/ux design. Explore his portfolio, projects, resume, and contact information.",
  applicationName: "Ayush Bisht",
  authors: [{ name: "Ayush Bisht" }],
  creator: "Ayush Bisht",
  publisher: "Ayush Bisht",
  keywords: [
    "Ayush Bisht",
    "Ayush Bisht Full Stack Developer",
    "Ayush Bisht developer",
    "Ayush Bisht portfolio",
    "web developer",
    "frontend developer",
    "full stack developer",
    "MERN stack",
    "Next.js developer",
    "React developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ayush Bisht",
    title: "Ayush Bisht | Full Stack Developer",
    description:
      "Ayush Bisht is a full stack developer specializing in web development, app development and ui/ux design. Explore his portfolio, projects, resume, and contact information.",
  },
  twitter: {
    card: "summary",
    title: "Ayush Bisht | Full Stack Developer",
    description:
      "Ayush Bisht is a full stack developer specializing in web development, app development and ui/ux design. Explore his portfolio, projects, resume, and contact information.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
