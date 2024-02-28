import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png"
import Burger from "@/components/svg/burger.svg"
import Wa from "@/components/svg/wa.svg"
import Facebook from "@/components/svg/facebook.svg"
import Telegram from "@/components/svg/telegram.svg"

export default function Home() {
  return (
    <main className="w-full justify-center bg-gradient-to-tr from-rose-900 via-black to-red-900">
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
                <Link href="/galeri">Koleksi</Link>
              </li>
            </ul>
          </details>
        </div>
        <div className="justify-center w-full flex flex-col space-y-10 items-center text-center">
          <Image
            src={Logo}
            width={10000}
            height={10000}
            alt="Logo"
            quality={100}
            className="w-40 rounded-full border-2 border-white"
          />
          <h1 className="font-bold text-white text-2xl uppercase">
            Fightercock Bogor
          </h1>
          <h1 className="font-semibold text-gray-300 w-96 max-md:w-80 text-md">
           FIGHTERCOCK GUNUNG PUTRI BOGOR 🐓👑 <br /> PENGHOBI, PETARUNG DAN PETERNAK
          </h1>
          <h1 className="font-semibold text-gray-300 w-96 max-md:w-80 text-md">
            SIAP KIRIM KE SELURUH INDONESIA!! <br /> #TARUNG DULU BARU CURHAT 😎
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
            href="/"
          >
            Koleksi Amunisi Fightercock
          </Link>
          <Link
            href="https://wa.me/87784848585/"
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
            href="https://www.facebook.com/profile.php?id=100095224391392&mibextid=PtKPJ9"
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
            href="https://t.me/+6zwlwev5now2NzQ1"
            className="btn w-96 max-md:w-64 bg-gray-900 text-white backdrop-blur-lg"
          >
            <Image 
              src={Telegram}
              width={20}
              height={20}
              alt="Sosmed"
              />
            Telegram
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="font-semibold text-center py-5 mb-5 text-gray-300 w-96 max-md:w-80 text-sm">
          Copyright © 2024 - Fightercock Bogor
        </h1>
      </div>
    </main>
  );
}
