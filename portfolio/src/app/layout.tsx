import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lalithkumar Goud | Full Stack Developer",
  description:
    "3 years building enterprise-grade web applications. Expert in React.js, Next.js, Node.js & .NET. Delivered 6+ projects with 40% performance improvements.",
  keywords: [
    "React",
    "Next.js",
    "Full Stack Developer",
    "Node.js",
    ".NET",
    "TypeScript",
    "Lalithkumar Goud",
  ],
  openGraph: {
    title: "Lalithkumar Goud | Full Stack Developer",
    description:
      "Expert Full Stack Developer — React.js, Next.js, Node.js, .NET",
    type: "website",
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
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Clash+Display:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
