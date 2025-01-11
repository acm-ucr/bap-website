import Image from "next/image";
import bap from "@/public/gallery/clubimage2.webp";

const Mission = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b to-black md:relative">
      <div className="left-0 top-[-10%] z-10 mb-[-10%] w-[90%] rounded-sm bg-[#a12424] px-4 py-4 text-center shadow-5xl md:absolute md:my-0 md:w-3/4 md:max-w-lg md:px-10 md:pb-20 md:pt-10">
        <h1 className="mb-2 text-2xl font-thin text-white md:mb-6 md:text-4xl">
          MISSION STATEMENT
        </h1>
        <p className="text-lg leading-relaxed text-white">
          BAP provides opportunities for service, professional development, and
          interaction among its members and financial professionals.
          Additionally, Beta Alpha Psi fosters lifelong ethical, social, and
          public responsibilities, shaping its members into leaders in their
          fields.
        </p>
      </div>
      <div className="relative w-full">
        <Image
          className="h-[400px] w-full object-cover md:h-auto"
          src={bap}
          alt="Club Image"
        />
        <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent from-60% to-bap-brown-400 to-100%"></div>
      </div>

      <div className="sm:text-md bottom-[10%] left-1/2 my-[-10%] flex h-[16%] w-[70%] transform items-center justify-center bg-[#b4966f] p-4 text-center text-xs text-white shadow-5xl sm:bg-[#b4966fa4] md:absolute md:my-0 md:h-[25%] md:-translate-x-1/2 md:text-lg md:font-normal md:shadow-none">
        Joining BAP has truly shaped my college experience! Through BAP, I’ve
        built a strong community and met my closest friends at UCR. Serving as
        President has also helped me grow both personally and professionally,
        making my time here incredibly fulfilling.” - Alison Wu, President 2023
        - 2024
      </div>
    </div>
  );
};

export default Mission;
