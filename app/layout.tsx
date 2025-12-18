import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageHeader from "@/components/widget/page-header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Can Yigit - Software Developer",
  description: "Software Developer crafting elegant digital experiences. Based in Bremen, available worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
