import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/base.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
