import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import avatar from "../../public/me.png";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - ${DATA?.description}`,
    template: `%s | ${DATA.name} - ${DATA?.description}`,
  },
  description: DATA?.description,
  openGraph: {
    title: `${DATA.name} - ${DATA?.description}`,
    description: DATA?.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://res.cloudinary.com/dyap7epew/image/upload/v1731149278/projects/spmgiwbxwermvrzi9uoc.jpg`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} - ${DATA.description}`,
      },
    ],
  },
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
  twitter: {
    title: `${DATA.name} - ${DATA?.description}`,
    card: "summary_large_image",
    images: [
      {
        url: `https://res.cloudinary.com/dyap7epew/image/upload/v1731149278/projects/spmgiwbxwermvrzi9uoc.jpg`,
        alt: `${DATA.name} - ${DATA.description}`,
      },
    ],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dyap7epew/image/upload/v1731149278/projects/spmgiwbxwermvrzi9uoc.jpg"
        />
        <link
          rel="preload"
          href="/fonts/fonts/PostGrotesk-Book.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PostGrotesk-Bold.ttff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://misanetc.vercel.app/" />
        <meta property="og:title" content="Misan Etchie | Software Engineer" />
        <meta property="og:description" content="Software Engineer." />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dyap7epew/image/upload/v1731149278/projects/spmgiwbxwermvrzi9uoc.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Misan Etchie logo with the text 'Software Engineer'"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://misanetc.vercel.app/" />
        <meta name="twitter:title" content="Misan Etchie | Software Engineer" />
        <meta name="twitter:description" content="Software Engineer." />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dyap7epew/image/upload/v1731149278/projects/spmgiwbxwermvrzi9uoc.jpg"
        />
        <meta name="twitter:image:alt" content=" ''" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
