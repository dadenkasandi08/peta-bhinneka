import React from "react";
import Image, { StaticImageData } from "next/image";

function CardGaleri({
  modal,
  setIsModal,
  dataGaleri,
  setId,
}: {
  modal: boolean;
  setIsModal: any;
  dataGaleri: {
    id: number;
    judul: string;
    lokasi: string;
    jenis: string;
    harga: string;
    penyelenggara: string;
    jumlah: string;
    foto: string;
    tanggal: string;
    deskripsi: string;
    link: StaticImageData;
  };
  setId: any;
}) {
  const handleModal = () => {
    setIsModal(!modal);
    setId(dataGaleri.id);
  };
  return (
    <div className="w-full">
      <div className="w-full h-[360px] rounded-lg overflow-hidden group">
        <div className="relative w-full h-full">
          <Image
            src={
              dataGaleri.link
            }
            width={1000}
            height={1000}
            alt="..."
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute bottom-0 w-full h-full px-4 text-center translate-y-[86%] flex flex-col items-center py-4 bg-primary-600 bg-opacity-70 transition-all ease-in-out duration-300 group-hover:translate-y-0 group-hover:bg-opacity-90">
            <p className="font-bold text-lg mb-4 group-hover:translate-y-16 transition-all ease-in-out duration-300">
              Loang Baloq, Kota Mataram
            </p>
            <div className="flex flex-col justify-center h-full">
              <p className="font-bold">Jenis Bibit Pohon</p>
              <p className="mb-2">Mangrove Rhizophora</p>
              <p className="font-bold">Jumlah Bibit Ditanam</p>
              <p className="mb-2">1075</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGaleri;
