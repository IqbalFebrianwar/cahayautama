import Image from "next/image";
import Link from "next/link";
import Burger from "@/components/svg/burger.svg"
import Wa from "@/components/svg/wa.svg"
import Facebook from "@/components/svg/facebook.svg"
import Telegram from "@/components/svg/telegram.svg"

export default function Home() {
  return (
    <main className="w-full justify-center bg-gradient-to-r from-rose-700 to-pink-600">
      <div className="w-full py-20 justify-center">
        <div className="w-full flex justify-end  lg:px-96 md:px-20 sm:px-20">
          <details className="dropdown dropdown-end">
            <summary className="m-1 btn bg-transparent text-white border-0">
              <Image 
                src={Burger}
                width={40}
                height={40}
                alt="Burger"
              />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-black text-white rounded-box w-52">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/galeri">Galeri</Link>
              </li>
              <li>
                <Link href="/testimoni">Testimoni</Link>
              </li>
            </ul>
          </details>
        </div>
        <div className="justify-center w-full flex flex-col space-y-10 items-center text-center">
          <Image
            src="https://res.cloudinary.com/df6nytit6/image/upload/v1745390304/cahaya%20utama/logo_cahaya_utama_ti5lwk.png"
            width={10000}
            height={10000}
            alt="Logo"
            quality={100}
            className="w-40 rounded-full border-2 border-white"
          />
          <h1 className="font-bold text-white text-2xl uppercase">
            Cahaya Utama Jaya
          </h1>
          <h1 className="font-semibold text-gray-300 w-96 max-md:w-80 text-md">
          Cahaya Utama Jaya adalah toko yang menjual motor mini, mini ATV, dan sepeda listrik berkualitas. Kami menghadirkan pilihan kendaraan mini yang seru, tangguh, dan ramah lingkungan, cocok untuk segala usia. Dapatkan produk terbaik dengan harga bersaing dan pelayanan terpercaya hanya di Cahaya Utama Jaya!
          </h1>
        </div>
        <div className="w-full space-y-5 max-md:px-10 grid py-16 justify-center">
          <Link
            className="btn w-96 max-md:w-64 bg-gray-900 text-white backdrop-blur-lg"
            href="/galeri"
          >
            Galeri
          </Link>
          <Link
            className="btn w-96 max-md:w-64 bg-gray-900 text-white backdrop-blur-lg"
            href="/testimoni"
          >
            Testimoni
          </Link>
          <Link
            href="https://wa.me/6285399261542"
            className="btn w-96 max-md:w-64 bg-gray-900 text-white backdrop-blur-lg"
          >
            <Image 
              src={Wa}
              width={20}
              height={20}
              alt="Sosmed"
              />
            WhatsApp
          </Link>
          <Link
            href="https://www.facebook.com/share/15e6kdjtLG/"
            className="btn w-96 max-md:w-64 bg-gray-900 text-white backdrop-blur-lg"
          >
            <Image 
              src={Facebook}
              width={20}
              height={20}
              alt="Sosmed"
              />
            Facebook
          </Link>
          <Link
            href="."
            className="btn w-96 max-md:w-64 bg-gray-900 text-white backdrop-blur-lg"
          >
            <Image 
              src="https://res.cloudinary.com/df6nytit6/image/upload/v1745391474/cahaya%20utama/instagram_txfkfu.png"
              width={20}
              height={20}
              alt="Sosmed"
              />
            Instagram
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="font-semibold text-center py-5 mb-5 text-gray-300 w-96 max-md:w-80 text-sm">
          Copyright © 2025 - Cahaya Utama Jaya
        </h1>
      </div>
    </main>
  );
}
