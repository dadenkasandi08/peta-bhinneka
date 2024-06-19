import { Layout } from "@/layout/layout";
import React from "react";
import Image from "next/image";
import profil1 from "@/assets/images/daden.jpg";
import profil2 from "@/assets/images/dhyah.jpg";

function Tentang() {
  return (
    <Layout>
      <section className="mx-32 py-24 px-32  text-center flex flex-col justify-center gap-6">
        <p className="text-3xl font-bold text-secondary-800">
          Tentang <span className="text-primary-600">Peta Bhineka</span>
        </p>
        <div className="flex justify-start-end">
          <p className="text-lg text-left max-w-[1050px]">
            <span className="text-3xl font-bold text-primary-600">
              Peta Bhineka
            </span>{" "}
            adalah portal budaya digital yang didedikasikan untuk memperkenalkan
            dan melestarikan kekayaan budaya Indonesia. Kami percaya bahwa
            warisan budaya adalah harta yang harus dijaga dan dikenali oleh
            setiap generasi. Melalui platform ini, kami berupaya memberikan
            informasi yang komprehensif, edukatif, dan inspiratif mengenai
            tradisi, seni, bahasa, kuliner, serta kearifan lokal yang ada di
            tanah NKRI.
            <br />
            <br />
            Tujuan kami adalah untuk menjadi sumber referensi utama bagi siapa
            saja yang ingin belajar lebih dalam tentang budaya Indonesia, baik
            itu pelajar, peneliti, wisatawan, maupun masyarakat umum. Kami juga
            berharap dapat menjadi platform yang menginspirasi kebanggaan akan
            identitas budaya dan memotivasi pelestarian tradisi lokal di tengah
            arus globalisasi. Mari bersama-sama menjelajahi keindahan dan
            keragaman budaya Indonesia di Peta Bhineka, dan jadilah bagian dari
            upaya kami untuk melestarikan warisan budaya Nusantara.
          </p>
        </div>
      </section>
      <section className="mx-32 py-16 px-32  text-center flex flex-col justify-center gap-6">
        <p className="text-3xl font-bold text-secondary-800">
          Kreator Peta Bhinneka
        </p>
        <div className="grid grid-cols-2 px-24 gap-10 items-center py-10">
          <div className="w-full">
            <div className="w-full h-[360px] rounded-lg overflow-hidden group">
              <div className="relative w-full h-full">
                <Image
                  src={profil1}
                  width={1000}
                  height={1000}
                  alt="..."
                  className="w-full h-full object-cover absolute"
                />
                <div className="absolute bottom-0 w-full h-full px-4 text-center translate-y-[86%] flex flex-col items-center py-4 bg-primary-600 bg-opacity-70 transition-all ease-in-out duration-300 group-hover:translate-y-0 group-hover:bg-opacity-90">
                  <p className="font-bold text-lg mb-4 group-hover:translate-y-16 transition-all ease-in-out duration-300">
                    Daden Kasandi | Universitas Mataram
                  </p>
                  <div className="flex flex-col justify-center h-full">
                    <p className="mb-2">UI/UX Designer, Android Developer, Front-end Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[360px] rounded-lg overflow-hidden group">
              <div className="relative w-full h-full">
                <Image
                  src={profil2}
                  width={1000}
                  height={1000}
                  alt="..."
                  className="w-full h-full object-cover absolute"
                />
                <div className="absolute bottom-0 w-full h-full px-4 text-center translate-y-[86%] flex flex-col items-center py-4 bg-primary-600 bg-opacity-70 transition-all ease-in-out duration-300 group-hover:translate-y-0 group-hover:bg-opacity-90">
                  <p className="font-bold text-lg mb-4 group-hover:translate-y-16 transition-all ease-in-out duration-300">
                    Mardhyah Fathania Izzati | Universitas Negeri Padang
                  </p>
                  <div className="flex flex-col justify-center h-full">
                    <p className="mb-2">Flutter Developer, Front-end Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Tentang;
