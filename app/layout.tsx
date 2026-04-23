import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminium Costing App",
  description: "Calculate aluminium costing easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
