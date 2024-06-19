import { Layout } from "@/layout/layout";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DataPeta, CulturalLocation } from "@/Model/local-data";

function Galeri() {
  const [galeri, setGaleri] = useState<CulturalLocation[]>([]);

  useEffect(() => {
    DataPeta.getDataMarker().then((data) => setGaleri(data));
  }, []);

  return (
    <Layout>
      <section className="mt-16">
        <div className="grid grid-cols-4 px-24 gap-10 py-10">
          {galeri.map((data, index) => (
            <div className="w-full" key={index}>
              <div className="w-full h-[360px] rounded-lg overflow-hidden group">
                <div className="relative w-full h-full">
                  <Image
                    src={data.imageUrl}
                    width={1000}
                    height={1000}
                    alt="..."
                    className="w-full h-full object-cover absolute"
                  />
                  <div className="absolute bottom-0 w-full h-full px-4 text-center translate-y-[86%] flex flex-col items-center py-4 bg-primary-600 bg-opacity-70 transition-all ease-in-out duration-300 group-hover:translate-y-0 group-hover:bg-opacity-90">
                    <Link href={`/artikel/detail/${data.id}`}>
                      <p className="font-bold text-lg mb-4 group-hover:translate-y-16 transition-all ease-in-out duration-300">
                        {data.name}
                      </p>
                    </Link>
                    <div className="flex flex-col justify-center h-full">
                      <p className="mb-2">{data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Galeri;
