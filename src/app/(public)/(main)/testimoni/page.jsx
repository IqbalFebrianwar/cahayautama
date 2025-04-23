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
            src="https://res.cloudinary.com/df6nytit6/image/upload/v1745390304/cahaya%20utama/logo_cahaya_utama_ti5lwk.png"
            width={10000}
            height={10000}
            alt="Logo"
            quality={100}
            className="w-40 rounded-full border-2 border-white"
          />
          <h1 className="font-bold w-96 max-md:w-80 text-white max-md:px-5 text-2xl uppercase">
            Bukti Testimoni Pelanggan Cahaya Utama Jaya
          </h1>
        </div>
        <div className="grid space-y-10 py-10 w-full justify-center">
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390753/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.17.25_dbfcd173_e9svlp.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390752/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.17.23_674295b1_hso0i4.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390752/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.17.24_4dda1ac1_udfzzq.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390751/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.17.23_8550b44b_c8d1lq.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390751/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.17.22_0f1f34e3_l3nbtd.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390750/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.17.22_7ca997de_avsbs7.jpg" />
          <AllImage imagegaleri="https://res.cloudinary.com/df6nytit6/image/upload/v1745390750/cahaya%20utama/WhatsApp_Image_2025-04-09_at_13.17.22_56a66206_xbefga.jpg" />
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
