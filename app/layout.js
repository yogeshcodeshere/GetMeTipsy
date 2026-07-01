
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GetMeTipsy - supporting creators",
  description: "GetMeTipsy - project funding app that takes money from users with meaningful messages",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden  ">
        <SessionWrapper>


        <Navbar/>
        

          <div className="absolute inset-0 z-0 pointer-events-none bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#f006670d_1px,transparent_1px),linear-gradient(to_bottom,#f006670d_1px,transparent_1px)] bg-size-[14px_24px]" />
          <div className="flex-1 z-10 relative">

            {children}
          </div>

        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
