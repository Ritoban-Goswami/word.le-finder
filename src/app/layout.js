import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Word(le) Finder - Your Ultimate Companion for Wordle Game Strategies",
  description: "Elevate your Wordle gaming experience with Word(le) Finder! Customize word suggestions based on length, known letters, and absent letters. Access a comprehensive word database for optimized gameplay. Try it now and master Wordle like never before!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
