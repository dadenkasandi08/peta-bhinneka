import SliderArtikel from "@/components/sliderArtikel";
import {Layout} from "@/layout/layout";
import React, { useState } from "react";
import CardArtikel from "@/components/cardArtikel";

function Artikel() {
  const [allArtikel, setAllArtikel] = useState("semua");
  const [currentCardPage, setCurrentCardPage] = useState<number>(1);

  const handlepagination = (e: any) => {
    setCurrentCardPage(Number(e));
    const element = document.getElementById("artikelContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArtikel = (e: any) => {
    e.preventDefault();
    setAllArtikel(e.target.innerText.toLowerCase().replace(" ", "-"));
  };

  return (
    <Layout>
      <section>
        <div className="flex justify-center items-center w-full py-4 px-24 border-y-2 my-8">
        </div>
        <div className="flex justify-center w-full px-24 pb-10 gap-6">
          <div className="w-3/4 flex flex-col">
            <SliderArtikel />
            <div id="artikelContainer" className="mt-10 flex flex-col border-b-4">
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-6 justify-center my-10">
            <div
              className="w-10 h-10 text-primary-10 border-2 grid place-items-center rounded-lg hover:bg-primary-10 hover:text-white ease-in-out transition-all cursor-pointer border-primary-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </div>
            <div className="flex gap-6">
              {[...Array(96 / 12 + 1)]
                .slice(
                  currentCardPage > 3 ? currentCardPage - 2 : 0,
                  currentCardPage > 3 ? currentCardPage + 3 : 5
                )
                .map((_, i) =>
                  currentCardPage > 3 ? (
                    <div
                      onClick={() => handlepagination(currentCardPage - 2 + i)}
                      key={i}
                      className={`w-10 h-10 text-primary-10 border-2 grid place-items-center rounded-lg hover:bg-primary-10 hover:text-white ease-in-out transition-all cursor-pointer border-primary-10 ${currentCardPage === currentCardPage - 2 + i &&
                        "bg-primary-10 text-white"
                        }`}
                    >
                      <p>{currentCardPage - 2 + i}</p>
                    </div>
                  ) : (
                    <div
                      onClick={() => handlepagination(1 + i)}
                      key={i}
                      className={`w-10 h-10 text-primary-10 border-2 grid place-items-center rounded-lg hover:bg-primary-10 hover:text-white ease-in-out transition-all cursor-pointer border-primary-10 ${currentCardPage === 1 + i && "bg-primary-10 text-white"
                        }`}
                    >
                      <p>{1 + i}</p>
                    </div>
                  )
                )}
            </div>
            <div
              className="w-10 h-10 text-primary-10 border-2 grid place-items-center rounded-lg hover:bg-primary-10 hover:text-white ease-in-out transition-all cursor-pointer border-primary-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Artikel;
