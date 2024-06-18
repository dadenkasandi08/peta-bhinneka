import Layout from "@/layout/layout";
import React, { useState } from "react";
import dynamic from "next/dynamic";


const MapsContainer = dynamic(() => import("@/components/maps"), {
  ssr: false,
});

function Peta() {

  return (
    <Layout>
      <section>
        <div className="flex justify-between px-24 py-6 text-center">W
        </div>
      </section>
      <section>
        <div className="flex flex-col px-24 py-10 justify-center items-center bg-secondary-200">
          <p className="text-3xl font-bold">  Peta Jawa Barat</p>
          <div className="w-[200px] h-1 bg-black rounded-lg mb-10 mt-4" />
          <MapsContainer center={[-8.583069, 116.320251]} zoom={10} />
        </div>
      </section>

    </Layout>
  );
}

export default Peta;