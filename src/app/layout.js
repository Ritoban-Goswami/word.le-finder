import { Oswald } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Word(le) Finder - Your Ultimate Companion for Wordle Game Strategies",
  description: "Elevate your Wordle gaming experience with Word(le) Finder! Customize word suggestions based on length, known letters, and absent letters. Access a comprehensive word database for optimized gameplay. Try it now and master Wordle like never before!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
