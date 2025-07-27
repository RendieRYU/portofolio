import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import AppWrapper from "./components/AppWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rendie Abdi Saputra - Machine Learning Engineer | Portfolio",
  description: "Passionate Machine Learning Engineer, Cryptographer, and Full Stack Developer specializing in AI, security, and modern web technologies. Portofolio profesional dengan keahlian dalam machine learning, kriptografi, dan pengembangan aplikasi.",
  keywords: "Machine Learning Engineer, Cryptographer, Mobile Developer, Web Developer, AI, Artificial Intelligence, React, Next.js, Node.js, Kriptografi, Portfolio Indonesia",
  authors: [{ name: "Rendie Abdi Saputra" }],
  creator: "Rendie Abdi Saputra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "John Doe - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@johndoe",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
