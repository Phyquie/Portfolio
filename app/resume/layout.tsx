import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Ayush Bisht - Resume",
  },
  description:
    "View the resume of Ayush Bisht, including experience, education, projects, and technical skills.",
  keywords: [
    "Ayush Bisht resume",
    "Ayush Bisht CV",
    "Ayush Bisht experience",
    "Ayush Bisht projects",
    "Ayush Bisht skills",
  ],
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Ayush Bisht - Resume",
    description:
      "View the resume of Ayush Bisht, including experience, education, projects, and technical skills.",
    url: "/resume",
    siteName: "Ayush Bisht",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ayush Bisht - Resume",
    description:
      "View the resume of Ayush Bisht, including experience, education, projects, and technical skills.",
  },
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}