import { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Royal Stone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}