import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

// Apply the generated class name
const fontClassName = workSans.className || "family__Work_Sans_a2025e";

export const metadata: Metadata = {
  title: "Keven Hernandez - Software Engineer",
  description:
    "Software Engineer specializing in scalable and distributed systems. Army National Guard Avionic Mechanic.",
  authors: [{ name: "Keven Hernandez" }],
  keywords: [
    "Software Engineer",
    "Developer",
    "Go",
    "C#",
    ".NET",
    "Full Stack",
    "Keven Hernandez",
  ],
  openGraph: {
    title: "Keven Hernandez - Software Engineer",
    description:
      "Software Engineer specializing in scalable and distributed systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keven Hernandez - Software Engineer",
    description:
      "Software Engineer specializing in scalable and distributed systems.",
    creator: "@eskevv",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={fontClassName}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
