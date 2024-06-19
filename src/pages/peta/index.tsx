import { SecondLayout } from "@/layout/layout";
import React, { useState } from "react";
import dynamic from "next/dynamic";


const MapsContainer = dynamic(() => import("@/components/maps"), {
  ssr: true,
});

function Peta() {

  return (
    <SecondLayout>
      <section>
        <div className="mt-12 pt-5 ">
          <MapsContainer center={[-6.9404287, 107.2600301]} zoom={9} />
        </div>
      </section>

    </SecondLayout>
  );
}

export default Peta;