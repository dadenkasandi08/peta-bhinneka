import {Layout} from "@/layout/layout";
import React from "react";


function Tentang() {
  return (
    <Layout>
      <div>

        <div className="py-24 px-32  text-center flex flex-col justify-center gap-6">
          <p className="text-3xl font-bold text-secondary-800">
            Tentang <span className="text-primary-600">Peta Bhineka</span>
          </p>
          <div className="flex justify-start">
            <p className="text-2xl text-left max-w-[1050px]">
              <span className="text-3xl font-bold text-primary-600">Peta Bhineka</span>{" "}
              adalah  portal budaya digital yang didedikasikan untuk memperkenalkan dan melestarikan kekayaan budaya Jawa Barat. Kami percaya bahwa warisan budaya adalah harta yang harus dijaga dan dikenali oleh setiap generasi. Melalui platform ini, kami berupaya memberikan informasi yang komprehensif, edukatif, dan inspiratif mengenai tradisi, seni, bahasa, kuliner, serta kearifan lokal yang ada di tanah Sunda.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <p className="text-2xl text-right max-w-[1050px]">

              Tujuan kami adalah untuk menjadi sumber referensi utama bagi siapa saja yang ingin belajar lebih dalam tentang budaya Jawa Barat, baik itu pelajar, peneliti, wisatawan, maupun masyarakat umum. Kami juga berharap dapat menjadi platform yang menginspirasi kebanggaan akan identitas budaya dan memotivasi pelestarian tradisi lokal di tengah arus globalisasi.
            </p>
          </div>
          <div className="flex justify-start">
            <p className="text-2xl text-left max-w-[1050px]">
              Mari bersama-sama menjelajahi keindahan dan keragaman budaya Jawa Barat di Peta Bhineka, dan jadilah bagian dari upaya kami untuk melestarikan warisan budaya Nusantara.

            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Tentang;
