import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/sidebar/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DEV NEX",
  description: "PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideBar />
        {children}
      </body>
    </html>
  );
}