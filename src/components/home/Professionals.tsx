import Image from "next/image";
import Bakertilly from "/public/bakertilly.webp";
import RSM from "/public/rsm.webp";
import HCVT from "/public/hcvt.webp";
import PWC from "/public/pwc.webp";

const Professional = () => {
  return (
    <div>
      <div className="flex justify-center px-6 py-2 font-mono">
        <p className="w-1/2 bg-bap-brown-100 bg-opacity-40 text-center">
          FEATURED PROFESSIONALS
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="flex justify-center">
          <div className="mt-3 h-[60px] w-[273px]">
            <Image
              alt="Bakertilly"
              src={Bakertilly}
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-[100px] w-[191px]">
            <Image alt="RSM" src={RSM} />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-[120px] w-[229px]">
            <Image alt="HCVT" src={HCVT} />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-[90px] w-[117px]">
            <Image alt="PWC" src={PWC} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
