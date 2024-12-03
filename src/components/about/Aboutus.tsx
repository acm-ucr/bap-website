import bap from "@/public/clubimage3.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mb-8 flex w-full animate-fade-down flex-col text-left animate-once">
      <p className="mb-8 text-4xl text-white">ABOUT US</p>

      <div className="flex flex-col gap-4 md:flex-row">
        <p className="text-2xl font-light leading-relaxed lg:w-1/2">
          Founded in 1919, Beta Alpha Psi is an honors organization for
          financial information students and professionals. There are over 300
          chapters on college and university campuses with over 300,000 members
          initiated since Beta Alpha Psi's formation. We are not a fraternity or
          sorority but an honors organization. UC Riverside’s Nu Rho Chapter was
          founded in Winter 2015 under the presidency of Luke Hatch.
        </p>

        <div className="relative bg-gradient-to-l from-transparent to-red-950 lg:w-1/2">
          <Image
            src={bap}
            className="max-w-full md:max-w-md lg:w-full lg:max-w-full"
            alt="image"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent from-60% to-bap-brown-400 to-100%"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
