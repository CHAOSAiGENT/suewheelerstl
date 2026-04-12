import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wood Refinishing St. Louis | Sue Wheeler — Since 1989",
    template: "%s | Sue Wheeler Wood Refinishing",
  },
  description:
    "St. Louis's most trusted architectural wood refinisher. Hand-stripped, never dipped. EPA Certified. 36 years. Sue answers every call personally. (314) 367-6054.",
  metadataBase: new URL("https://suewheelerstl.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wood Refinishing by Sue Wheeler",
    url: "https://suewheelerstl.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
