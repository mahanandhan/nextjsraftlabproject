import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Cricket Players Directory",
  description: "SEO friendly cricket players directory built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 text-gray-900"
      >
        {children}
      </body>
    </html>
  );
}
