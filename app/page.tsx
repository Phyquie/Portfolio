import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: {
    absolute: "Ayush Bisht - Full Stack Developer",
  },
  description:
    "Ayush Bisht is a full stack developer specializing in web development, app development, and UI/UX design. Explore his portfolio, projects, resume, and contact information.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ayush Bisht - Full Stack Developer",
    description:
      "Ayush Bisht is a full stack developer specializing in web development, app development, and UI/UX design. Explore his portfolio, projects, resume, and contact information.",
    url: "/",
    siteName: "Ayush Bisht",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ayush Bisht - Full Stack Developer",
    description:
      "Ayush Bisht is a full stack developer specializing in web development, app development, and UI/UX design. Explore his portfolio, projects, resume, and contact information.",
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayush Bisht",
  jobTitle: "Full Stack Developer",
  url: siteUrl,
  sameAs: [siteUrl],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <div className="h-[90vh] flex flex-col justify-between">
        <main className="flex flex-col items-start justify-center flex-1 px-4 md:px-8 lg:px-24 xl:px-48 mt-8 md:mt-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-2 select-none leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              Ayush Bisht
            </span>
          </h1>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8 select-none">
            Developer
          </h2>
        </main>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mb-8 px-4">
          <a
            href="/resume"
            className="px-4 md:px-8 py-3 md:py-4 rounded-2xl border-2 border-green-400 bg-black bg-opacity-60 text-green-300 font-bold text-sm md:text-lg shadow-lg hover:bg-green-900 hover:text-white transition-all duration-200 text-center"
            style={{ boxShadow: "0 0 16px 2px #00ffbb55" }}
          >
            ● Recruiters, Click Here!
          </a>
          <a
            href="/about"
            className="px-4 md:px-8 py-3 md:py-4 rounded-2xl border-2 border-yellow-400 bg-black bg-opacity-60 text-yellow-200 font-bold text-sm md:text-lg shadow-lg hover:bg-yellow-900 hover:text-white transition-all duration-200 text-center"
            style={{ boxShadow: "0 0 16px 2px #ffe06655" }}
          >
            ● Everyone Else, Click Here!
          </a>
        </div>
      </div>
    </>
  );
}