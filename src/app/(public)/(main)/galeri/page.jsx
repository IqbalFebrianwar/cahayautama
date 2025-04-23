import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const AllImage = dynamic(() => import("@/components/allimage"));

export default function Galeri() {
  return (
    <main className="w-full justify-center bg-gradient-to-r from-rose-700 to-pink-600">
      <div className="w-full py-20 justify-center">
        <div className="justify-center w-full flex flex-col space-y-10 items-center text-center">
          <Image
            src="https://res.cloudinary.com/df6nytit6/image/upload/v1745390304/cahaya%20utama/logo_cahaya_utama_ti5lwk.png"
            width={10000}
            height={10000}
            alt="Logo"
            quality={100}
            className="w-40 rounded-full border-2 border-white"
          />
          <h1 className="font-bold w-96 max-md:w-80 text-white max-md:px-5 text-2xl uppercase">
            Galeri Cahaya Utama Jaya
          </h1>
        </div>
        <div className="grid space-y-10 py-10 w-full justify-center">
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390749/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.05.06_764301dc_iwx0jo.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390749/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.05.07_ec50e867_zvf8ng.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390748/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.05.33_177c1ccf_kt7eba.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390749/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.04.37_a6c2dee3_ob4fni.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390748/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.05.32_7992d499_piosrr.jpg" />
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
            Copyright © 2025 - Cahaya Utama Jaya
          </h1>
        </div>
      </div>
    </main>
  );
}
