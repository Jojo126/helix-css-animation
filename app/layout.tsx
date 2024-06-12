import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helix Animation",
  description: "A CSS animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
