import Layout from "@/layout/layout";
import Map from "@/components/maps";

function Peta() {
  const position: [number, number] = [51.505, -0.09];

  return (
    <Layout>
      <div>

        <div className="py-24 px-32  text-center flex flex-col justify-center gap-6">
          <Map center={position} zoom={13}></Map>
          <div className="flex justify-start">
            <p className="text-2xl text-left max-w-[1050px]">
              <span className="text-3xl font-bold text-primary-600">Peta Bhineka</span>{" "}INI ISINYA PETA            </p>
          </div>



        </div>

      </div>
    </Layout>
  );
}

export default Peta;
