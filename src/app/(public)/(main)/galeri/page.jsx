import Image from "next/image";
import Logo from "@/assets/image/logo.jpeg";
import Link from "next/link";
import Image1 from "@/assets/image/image1.jpeg";
import Image2 from "@/assets/image/image2.jpeg";
import Image3 from "@/assets/image/image3.jpeg";
import Image4 from "@/assets/image/image4.jpeg";
import Image5 from "@/assets/image/image5.jpeg";

export default function Galeri() {
  return (
    <main className="w-full justify-center bg-gradient-to-tr from-rose-900 via-black to-red-900">
      <div className="w-full py-20 justify-center">
        <div className="justify-center w-full flex flex-col space-y-10 items-center text-center">
          <Image
            src={Logo}
            width={10000}
            height={10000}
            alt="Logo"
            quality={100}
            className="w-40 rounded-full border-2 border-white"
          />
          <h1 className="font-bold w-96 max-md:w-80 text-white max-md:px-5 text-2xl uppercase">
            Galeri Kemenangan Fightercock Gunung Putri Bogor
          </h1>
        </div>
        <div className="grid space-y-10 py-10 w-full justify-center">
          <Image
            src={Image1}
            width={1000}
            height={1000}
            quality={100}
            alt="image album"
            className="max-w-md max-md:w-80"
          />
          <Image
            src={Image2}
            width={1000}
            height={1000}
            quality={100}
            alt="image album"
            className="max-w-md max-md:w-80"
          />
          <Image
            src={Image3}
            width={1000}
            height={1000}
            quality={100}
            alt="image album"
            className="max-w-md max-md:w-80"
          />
          <Image
            src={Image4}
            width={1000}
            height={1000}
            quality={100}
            alt="image album"
            className="max-w-md max-md:w-80"
          />
          <Image
            src={Image5}
            width={1000}
            height={1000}
            quality={100}
            alt="image album"
            className="max-w-md max-md:w-80"
          />
        </div>
        <div className="w-full space-y-5 max-md:px-10 grid py-16 justify-center">
          <Link
            className="btn w-96 max-md:w-64 bg-gray-900 text-white backdrop-blur-lg"
            href="/"
          >
            Kembali
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <h1 className="font-semibold text-center py-5 mb-5 text-gray-300 w-96 max-md:w-80 text-sm">
            Copyright © 2024 - Fightercock Bogor
          </h1>
        </div>
      </div>
    </main>
  );
}
