import React, { useEffect, useState } from "react";
import Image from "next/image";

function SliderArtikel() {
  const contents = [
    {
      url: "https://www.rukita.co/stories/wp-content/uploads/2022/11/Shutterstock.jpg",
      title: "Angklung",
      desc: "Angklung adalah alat musik tradisional Sunda yang terbuat dari bambu. Alat musik ini dimainkan dengan cara digoyangkan sehingga menghasilkan bunyi yang bergetar.",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09Vi0eLl26pX_COUPDgm85ftM1jXSfhcMfg&s",
      title: "Wayang Golek",
      desc: "Wayang Golek adalah seni pertunjukan boneka tradisional Sunda yang menggunakan boneka kayu untuk menceritakan berbagai kisah, terutama cerita epik Ramayana dan Mahabharata.",
    },

    {
      url: "https://kudjang.wordpress.com/wp-content/uploads/2018/02/tari-sampiung-300x195.jpg?w=640",
      title: "Sampiung",
      desc: "Tari Sampiung adalah tarian tradisional yang berasal dari daerah Sunda, Jawa Barat. Tarian ini menggambarkan kegiatan sehari-hari masyarakat Sunda.",
    },
    {
      url: "https://sultantv.co/wp-content/uploads/2023/06/tari-ketuk-tilu-3.jpg",
      title: "Ketuk Tilu",
      desc: "Ketuk Tilu adalah tarian tradisional Sunda yang biasanya dilakukan dalam acara-acara perayaan dan upacara adat. Tarian ini diiringi oleh alat musik tradisional seperti kendang, rebab, dan gong.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % contents.length;
      setCurrentIndex(newIndex);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? contents.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === contents.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-full flex-col ">
      <div className="object-cover bg-cover flex justify-center items-center relative ">
        <Image
          src={contents[currentIndex].url}
          alt="article"
          width={1000}
          height={1000}
          decoding="sync"
          className="duration-500 w-full z-10 aspect-[2/1] brightness-75 object-cover rounded-xl "
          loading="eager"
        />
        <div className="bg-gradient-to-t from-slate-900 via-transparent to-transparent h-full w-full z-10 absolute bottom-0"></div>
        <button
          onClick={prevSlide}
          className="text-4xl p-6 absolute text-white z-20 left-0 hover:bg-slate-200 hover:bg-opacity-20 h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="text-4xl p-6 absolute text-white z-20 right-0 hover:bg-slate-200 hover:bg-opacity-20 h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="absolute z-10 w-full px-10 bottom-8 ">
          <p className="text-2xl text-white font-bold  drop-shadow-lg">
            {contents[currentIndex].desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SliderArtikel;
