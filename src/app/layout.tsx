import type { Metadata } from "next";
import {Geist, Geist_Mono, Manrope, Montserrat, Oswald, Playfair_Display, Rubik} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const montserrat = Rubik({
    variable: "--font-montserrat",
    subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "The Stickley Method - Transform Your Looks | Men's Self-Improvement Program",
  description: "Join TSM's exclusive community for men's appearance optimization. Master nutrition, fitness, grooming, and confidence with our comprehensive looksmaxxing program.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${montserrat.variable} antialiased`}
      >
      <Navbar/>
        {children}

      </body>
    </html>
  );
}
