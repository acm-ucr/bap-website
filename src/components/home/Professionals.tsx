import Image from "next/image";
import Bakertilly from "/public/brands/bakertilly.webp";
import RSM from "/public/brands/rsm.webp";
import HCVT from "/public/brands/hcvt.webp";
import PWC from "/public/brands/pwc.webp";
import Deloitte from "/public/brands/deloitte.webp";
import EY from "/public/brands/ey.webp";
import BDO from "/public/brands/bdo.webp";

const Professional = () => {
  return (
    <div>
      <div className="flex justify-center px-6 py-2 font-mono">
        <p className="w-1/2 bg-bap-brown-100 bg-opacity-40 py-2 text-center text-2xl font-thin">
          OUR ALUMNIS ARE AT
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="flex justify-center">
          <div className="h-[120px] w-[235px]">
            <Image alt="Deloitte" src={Deloitte} />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="-mt-6 h-[90px] w-[90px]">
            <Image alt="EY" src={EY} />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-1 h-[120px] w-[140px]">
            <Image alt="BDO" src={BDO} />
          </div>
        </div>
      </div>
      <div className="flex justify-center px-6 py-2 font-mono">
        <p className="bg-bap-brown-100 bg-opacity-40 px-4 py-2 text-center text-2xl font-thin">
          And More!
        </p>
      </div>
    </div>
  );
};

export default Professional;
