import { SecondLayout } from "@/layout/layout";
import React, { useState } from "react";
import dynamic from "next/dynamic";


const MapsContainer = dynamic(() => import("@/components/maps"), {
  ssr: true,
});

function Peta() {

  return (
    <SecondLayout>
      <section className="mt-12 pt-5 ">
          <MapsContainer  center={[-6.903272,107.5607555]} zoom={8} />
      </section>

    </SecondLayout>
  );
}

export default Peta;