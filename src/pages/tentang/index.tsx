import {Layout} from "@/layout/layout";
import React from "react";


function Tentang() {
  return (
    <Layout>
        <section className="mx-32 py-24 px-32  text-center flex flex-col justify-center gap-6">
          <p className="text-3xl font-bold text-secondary-800">
            Tentang <span className="text-primary-600">Peta Bhineka</span>
          </p>
          <div className="flex justify-start-end">
            <p className="text-lg text-left max-w-[1050px]">
              <span className="text-3xl font-bold text-primary-600">Peta Bhineka</span>{" "}
              adalah  portal budaya digital yang didedikasikan untuk memperkenalkan dan melestarikan kekayaan budaya Indonesia. Kami percaya bahwa warisan budaya adalah harta yang harus dijaga dan dikenali oleh setiap generasi. Melalui platform ini, kami berupaya memberikan informasi yang komprehensif, edukatif, dan inspiratif mengenai tradisi, seni, bahasa, kuliner, serta kearifan lokal yang ada di tanah NKRI.
            <br />
            <br />
              Tujuan kami adalah untuk menjadi sumber referensi utama bagi siapa saja yang ingin belajar lebih dalam tentang budaya Indonesia, baik itu pelajar, peneliti, wisatawan, maupun masyarakat umum. Kami juga berharap dapat menjadi platform yang menginspirasi kebanggaan akan identitas budaya dan memotivasi pelestarian tradisi lokal di tengah arus globalisasi. Mari bersama-sama menjelajahi keindahan dan keragaman budaya Indonesia di Peta Bhineka, dan jadilah bagian dari upaya kami untuk melestarikan warisan budaya Nusantara.
            </p>
          </div>
        </section>
        <section className="mx-32 py-16 px-32  text-center flex flex-col justify-center gap-6">
          <p className="text-3xl font-bold text-secondary-800">
           Kreator Peta Bhinneka
          </p>
        </section>
    </Layout>
  );
}

export default Tentang;
