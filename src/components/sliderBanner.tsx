import React, { useEffect, useState } from "react";
import Image from "next/image";
import Banner1 from "@/assets/images/banner1.jpg";
import Banner2 from "@/assets/images/banner2.jpg";
import Banner3 from "@/assets/images/banner3.jpg";
import Banner4 from "@/assets/images/banner4.png";

const SliderBanner = () => {
  const contents = [
    {
      url: Banner1,
      title: "Tari topeng khas Cirebon",
    },

    {
      url: Banner2,
      title: "Alat musik khas Jawa Barat",
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % contents.length;
      setCurrentIndex(newIndex);
    }, 6000);

    return () => clearInterval(interval);
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
    <div className="w-full flex flex-col justify-center items-center mt-10 px-4 md:px-0">
      <h2 className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#8F1118' }}>Artikel Terbaru</h2>
      <div className="w-[230px] h-1 bg-red-700 mt-2 rounded-md "></div>
      <div className="relative w-full max-w-screen-lg h-64 sm:h-72 md:h-96 lg:h-104 xl:h-110 mt-6">
        <Image
          src={contents[currentIndex].url}
          alt=""
          className="duration-500 w-full h-full brightness-75 object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="text-4xl p-2 sm:p-4 md:p-6 text-white z-20 hover:bg-slate-200 hover:bg-opacity-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
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
            className="text-4xl p-2 sm:p-4 md:p-6 text-white z-20 hover:bg-slate-200 hover:bg-opacity-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="absolute z-10 text-center w-full bottom-0">
          <div className="bg-gray-200 bg-opacity-50 p-2">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
              {contents[currentIndex].title}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">

        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
