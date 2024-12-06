import Image from "next/image";
import bap from "@/public/clubimage2.webp";

const Mission = () => {
  return (
    <div className="md:relative flex flex-col items-center w-full">
      <div className="md:absolute left-0 top-[-10%] mb-[-10%] md:my-0 z-10 md:w-3/4 w-[90%] rounded-sm bg-[#a12424] px-4 py-4 text-center shadow-5xl md:max-w-lg md:px-10 md:pb-20 md:pt-10">
        <h1 className="mb-2 text-2xl font-thin text-white md:mb-6 md:text-4xl">
          MISSION STATEMENT
        </h1>
        <p className="text-sm leading-relaxed text-white md:text-lg">
          It provides opportunities for service, professional development, and
          interaction among its members and financial professionals.
          Additionally, Beta Alpha Psi fosters lifelong ethical, social, and
          public responsibilities, shaping its members into leaders in their
          fields.
        </p>
      </div>
      <Image
        className="h-[400px] w-full object-cover md:h-auto"
        src={bap}
        alt="Club Image"
      />

      <div className="md:absolute bottom-[10%] my-[-10%] md:my-0 left-1/2 flex h-[100px] w-[70%] md:-translate-x-1/2 
        transform items-center justify-center md:bg-[#b4966fa4] bg-[#b4966f] p-4 text-center text-lg text-white 
        md:text-2xl shadow-5xl md:shadow-none font-semibold md:font-normal">
        “Knowledge Is The Key To Opening The Doors Of The Financial World”
      </div>
    </div>
  );
};

export default Mission;
