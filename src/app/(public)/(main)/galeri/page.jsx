import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import ImageKemenangan1 from "@/components/public/static/image1.png"
import ImageKemenangan2 from "@/components/public/static/image2.png"
import ImageKemenangan3 from "@/components/public/static/image3.png"
import ImageKemenangan4 from "@/components/public/static/image4.png"
import ImageKemenangan5 from "@/components/public/static/image5.png"
import Logo from "@/components/public/static/logo.png"

const AllImage = dynamic(() => import("@/components/allimage"));

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
          <AllImage 
            imagegaleri={ImageKemenangan1}
          />
          <AllImage 
            imagegaleri={ImageKemenangan2}
          />
          <AllImage 
            imagegaleri={ImageKemenangan3}
          />
          <AllImage 
            imagegaleri={ImageKemenangan4}
          />
          <AllImage 
            imagegaleri={ImageKemenangan5}
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
