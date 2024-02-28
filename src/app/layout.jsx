import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Fightercock Bogor",
  description: "Team Fightercock Bogor adalah sebuah tim yang berdedikasi untuk pertarungan ayam laga. Berbasis di Bogor, Jawa Barat, tim ini memiliki fokus pada konservasi dan pengembangan ayam laga.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
