import { Newsreader, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./chat.css";

const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Arthur Jemba — Full-Stack Web Developer",
  description:
    "Portfolio of Arthur Jemba, a full-stack web developer in Kampala, Uganda, building with React, Next.js, FastAPI and Docker.",
};

export const viewport = { themeColor: "#f6f2ea" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
