import Button from "@/components/button";
import Image from "next/image";
import {Layout} from "@/layout/layout";
import Background1 from "@/assets/images/background1.png";
import SliderBanner from "@/components/sliderBanner";


export default function Home() {
  return (
    <Layout>

      <section className="relative w-full">
        <div className="absolute -z-10">
          <Image
            src={Background1}
            alt="..."
            className="w-screen h-screen object-cover"
          />
        </div>
        <div className="px-10 lg:px-24 flex flex-col justify-center lg:justify-end pb-20 h-screen">
          <div className="flex flex-col justify-center lg:w-2/3 mb-20"> {/* Menambahkan margin-bottom di sini */}
            <h1 className="text-white font-semibold text-6xl leading-tight"> {/* Menambahkan leading-tight di sini */}
              Telusuri Lebih Banyak Kekayaan Budaya Indonesia,<br />Tunggal Akses Bhinneka Cerita
            </h1>
            <div className="flex justify-between mt-6">
              <div className="text-yellow-500">
                <p className="text-3xl font-bold">Artikel</p>
                <p className="text-2xl">0</p>
              </div>
              <div className="text-yellow-500">
                <p className="text-3xl font-bold">Rangkuman Budaya</p>
                <p className="text-2xl">0</p>
              </div>
              <div className="text-yellow-500">
                <p className="text-3xl font-bold">Provinsi</p>
                <p className="text-2xl">0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 text-center"
          style={{ backgroundColor: '#8F1118' }}
        >
          <div className="space-y-4 lg:pt-14 text-white">
            <h1 className="font-semibold text-4xl">
              Mengenal ke-Bhinnekaan
            </h1>
            <div className="flex justify-center w-full">
              <div className="w-[230px] h-1 bg-white mt-2 rounded-md"></div>
            </div>

            <p className="text-2xl">
              “Di Indonesia, Bhinneka Tunggal Ika bukan hanya semboyan, tetapi juga filosofi hidup yang
              menggambarkan harmoni dari keragaman budaya, agama, bahasa, dan etnis.
              Ke-Bhinnekaan mewarnai setiap aspek kehidupan di Indonesia, mulai dari seni, budaya,
              hingga kebiasaan sehari-hari.
              Dalam ke-Bhinnekaan, kita menemukan kekayaan dan keindahan yang tak terbatas,
              serta kesempatan untuk belajar dari satu sama lain.
              Oleh karena itu, melalui pengenalan dan penghayatan terhadap ke-Bhinnekaan, kita dapat memperkuat persatuan dan membangun masyarakat yang lebih inklusif dan toleran.”
            </p>

            <div className="flex justify-center">
              <Button
                href="/peta"
                text="Mulai Explorasi"
                size="xlarge"
                type="primary"
                textCustom="text-4xl lg:text-xl"
                custom="lg:w-[14rem] py-4 lg:py-2"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center py-20">
        <div className="container flex flex-col lg:flex-row justify-between  ">
          <SliderBanner />
        </div>
        <div className="flex justify-center mt-10">
          <Button
            href="/artikel"
            text="Lihat Artikel"
            size="xlarge"
            type="primary"
            textCustom="text-4xl lg:text-xl"
            custom="lg:w-[14rem] py-4 lg:py-2"
          />
        </div>
      </section>


      <section className="flex flex-col items-center py-5">
        <div className="flex flex-col gap-10 lg:flex-row justify-between my-16 px-10 lg:px-24 text-center">
          <div className="w-full  mx-auto mb150">
            <p className="text-5xl font-bold  text-primary-10 mb-7">
              Terhubung dengan Warisan,<br />
              Terinspirasi oleh Kebudayaan: Indonesia Adalah Kita Semua.
            </p>
            <p className="text-2xl font-semibold" style={{ color: '#F6A01E' }}>
              #Jadilah #ExplorerBhinneka
            </p>
          </div>
        </div>
      </section>



    </Layout >
  );
}
