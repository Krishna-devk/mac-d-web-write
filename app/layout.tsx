import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "McDonald's® India | Official Website",
  description: "McDonald's India – Enjoy our burgers, wraps, fries, desserts and beverages. Find a restaurant near you or order McDelivery today.",
  keywords: "McDonald's India, McDelivery, McAloo Tikki, Maharaja Mac, Happy Meal, restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
