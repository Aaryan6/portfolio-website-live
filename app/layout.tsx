import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaryan Patel",
  description:
    "Hi, I'm a full stack developer & a freelancer. Passionate to build crazy things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
