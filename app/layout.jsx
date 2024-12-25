import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/sidebar/SideBar";
import Footer from "@/components/layout/footer/Footer";
import Social from "@/components/layout/social/Social";
import ScrollToTop from "@/components/layout/scroll-top/ScrollTop";

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
        <Social />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
