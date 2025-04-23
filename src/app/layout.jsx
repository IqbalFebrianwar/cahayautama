import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Cahaya Utama Jaya",
  description: "Cahaya Utama Jaya adalah toko yang menjual motor mini, mini ATV, dan sepeda listrik berkualitas. Kami menghadirkan pilihan kendaraan mini yang seru, tangguh, dan ramah lingkungan, cocok untuk segala usia. Dapatkan produk terbaik dengan harga bersaing dan pelayanan terpercaya hanya di Cahaya Utama Jaya!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
