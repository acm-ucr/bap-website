import bap from "@/public/clubimage3.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mb-8 flex w-full flex-col text-left">
      <h1 className="mb-4 text-3xl font-semibold text-white sm:font-extralight">
        ABOUT US
      </h1>

      <div className="flex flex-col gap-4 md:flex-row">
        <p className="text-lg leading-relaxed">
          Founded in 1919, Beta Alpha Psi is an honors organization for
          financial information students and professionals. There are over 300
          chapters on college and university campuses with over 300,000 members
          initiated since Beta Alpha Psi's formation. We are not a fraternity or
          sorority but an honors organization. UC Riverside’s Nu Rho Chapter was
          founded in Winter 2015 under the presidency of Luke Hatch.
        </p>

        <div className="h-50 w-100 relative bg-gradient-to-l from-transparent to-red-950">
          <Image src={bap} className="max-w-md" alt="image" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent from-60% to-bap-brown-400 to-100%"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
