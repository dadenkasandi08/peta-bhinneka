import SliderArtikel from "@/components/sliderArtikel";
import { Layout } from "@/layout/layout";
import React, { useState, useEffect } from "react";
import { DataPeta, CulturalLocation } from "@/Model/local-data";
import Link from "next/link";
import Image from "next/image";

function Artikel() {
  const [articles, setArticles] = useState<CulturalLocation[]>([]);

  useEffect(() => {
    DataPeta.getDataMarker().then((data) => setArticles(data));
  }, []);

  return (
    <Layout>
      <section>
        <div className="flex justify-center items-center w-full py-4 px-24 border-y-2 my-8"></div>
        <div className="flex justify-center w-full px-24 pb-10 gap-6">
          <div className="w-3/4 flex flex-col">
            <SliderArtikel />
            <div
              id="artikelContainer"
              className="mt-10 flex flex-col "
            >
              {articles.map((artikel, index) => (
                <Link
                  key={index}
                  href={`/artikel/detail/${artikel.id}`}
                  className="w-full flex gap-6 border-t-2 hover:bg-slate-50"
                >
                  <div className="w-1/2 flex flex-col gap-2 py-4 px-2 justify-center">
                    <p className="font-bold text-2xl line-clamp-3">
                      {artikel.name}
                    </p>
                    <p className="line-clamp-5">
                      {artikel.article}
                    </p>
                    <p className="font-bold">{artikel.type}</p>
                  </div>
                  <div className="w-1/2 py-4 flex items-center">
                    <Image
                      src={artikel.imageUrl}
                      width={1000}
                      height={1000}
                      alt="jo"
                      className="w-full object-cover h-[250px] rounded-md"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Artikel;
