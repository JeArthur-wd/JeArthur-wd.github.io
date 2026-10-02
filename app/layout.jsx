import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./chat.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Arthur Jemba — Web Developer & Digital Sales Specialist",
  description:
    "Portfolio of Arthur Jemba: React and Express developer and outreach specialist based in Kampala, Uganda.",
};

export const viewport = { themeColor: "#07080a" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
