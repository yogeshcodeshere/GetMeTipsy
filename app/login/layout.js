import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Login - GetMeTipsy",
  description: "GetMeTipsy - project funding app that takes money from users with meaningful messages",
};

export default function RootLayout({ children }) {
  return (<>
  {children}
  </>
  );
}
