import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const displayFont = Outfit({ 
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Nexus Studio — Digital Agency for Ads, Design & Development",
  description: "Meta Ads, Google Ads, Video Editing, UI/UX, and SaaS — everything your brand needs, under one roof.",
  openGraph: {
    title: "Nexus Studio — Digital Agency",
    description: "Everything your brand needs, under one roof.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] font-[family-name:var(--font-body)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
