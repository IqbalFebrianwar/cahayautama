import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const AllImage = dynamic(() => import("@/components/allimage"));

export default function Galeri() {
  return (
    <main className="w-full justify-center bg-gradient-to-tr from-rose-900 via-black to-red-900">
      <div className="w-full py-20 justify-center">
        <div className="justify-center w-full flex flex-col space-y-10 items-center text-center">
          <Image
            src="/logo.png"
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
          <AllImage 
            imagegaleri="/image1.png"
          />
          <AllImage 
            imagegaleri="/image2.png"
          />
          <AllImage 
            imagegaleri="/image3.png"
          />
          <AllImage 
            imagegaleri="/image4.png"
          />
          <AllImage 
            imagegaleri="/image5.png"
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
