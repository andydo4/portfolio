import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Andrew Do",
  description: "Portfolio website of Andrew Do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/person.svg" />
      </head>
      <body
        className={`${instrumentSans.variable} font-sans antialiased`}
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
