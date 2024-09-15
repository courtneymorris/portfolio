import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootstrapClient";
import "./styles/base.scss";

import { Poppins } from "next/font/google";
import { Sacramento } from "next/font/google";
import { Euphoria_Script } from "next/font/google";
import { Inria_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  preload: true,
  fallback: ["Poppins"],
});

const euphoriaScript = Euphoria_Script({
  subsets: ["latin"],
  weight: "400",
});

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Courtney Morris",
  description: "Courtney Morris Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="`${poppins.className} ${sacramento.className} ${euphoriaScript.className} ${inriaSans.className}`"
    >
      <body>
        <BootstrapClient />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
