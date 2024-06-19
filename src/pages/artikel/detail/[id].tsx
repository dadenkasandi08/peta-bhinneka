// import { useRouter } from "next/router";
// import { GetServerSideProps } from "next";
// import {Layout} from "@/layout/layout";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import BgDetail from "@/assets/images/artikel/3.png";
// import { DataPeta, CulturalLocation } from "@/Model/local-data";

// const DetailPage: GetServerSideProps = async (context) => {
//   const { id } = context.params as { id: string };
//   const [culture, setCulture] = useState<CulturalLocation>();

//   useEffect(()=>{
//     DataPeta.getDetail(id).then((data) => setCulture(data));
//   }, [id])

//   return (
//     <Layout>
//       <section>
//         <div className="flex justify-between items-center w-full py-4 px-24 border-y-2 my-8">
//         </div>
//         <div className="flex flex-col w-full items-center px-24 pb-10 gap-2">
//           <div className="flex justify-between gap-2 px-24 items-start">
//             <p className="text-5xl font-bold leading-snug text-start">
//               {culture?.name}
//             </p>
//           </div>
//           <div className="flex flex-col items-start w-full px-24 text-lg">
//             {culture?.description}
//           </div>
//           <div className="w-full h-[600px] overflow-hidden flex flex-col items-end px-10 gap-2">
//             <Image
//               src={culture!.imageUrl}
//               width={900}
//               height={900}
//               alt="jo"
//               className="object-cover w-full"
//             />
//           </div>
//           <div className="flex flex-col gap-4 px-24 text-justify text-lg border-y-4 py-4 mt-4">
//             <p className="font-bold my-2">
//               {culture?.article}
//             </p>

//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default DetailPage;
import { GetServerSideProps } from "next";
import { Layout } from "@/layout/layout";
import React from "react";
import Image from "next/image";
import { DataPeta, CulturalLocation } from "@/Model/local-data";

type DetailPageProps = {
  culture: CulturalLocation;
};

const DetailPage: React.FC<DetailPageProps> = ({ culture }) => {
  return (
    <Layout>
      <section>
        <div className="flex justify-between items-center w-full py-4 px-24 border-y-2 my-8"></div>
        <div className="flex flex-col w-full items-center px-64 pb-10 gap-2">
          <div className="w-full overflow-hidden flex flex-col items-center gap-4">
            <p className="text-5xl font-bold leading-snug text-start">
              {culture.name}
            </p>
            <Image
              src={culture.imageUrl}
              width={600}
              height={600}
              alt={culture.name}
              className="object-cover rounded-md"
            />
            <p className="my-2">{culture.article}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const culture = await DataPeta.getDetail(id);

  return {
    props: {
      culture,
    },
  };
};

export default DetailPage;
