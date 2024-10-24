import bap from "@/public/clubimage3.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mb-8 flex w-[80%] flex-col text-left">
      <h1 className="mb-4 text-3xl font-semibold text-white sm:font-extralight">
        ABOUT US
      </h1>

      <div className="flex flex-row gap-4">
        <p className="text-lg leading-relaxed">
          Founded in 1919, Beta Alpha Psi is an honors organization for
          financial information students and professionals. There are over 300
          chapters on college and university campuses with over 300,000 members
          initiated since Beta Alpha Psi's formation. We are not a fraternity or
          sorority but an honors organization. UC Riverside’s Nu Rho Chapter was
          founded in Winter 2015 under the presidency of Luke Hatch.
        </p>
        <Image src={bap} className="max-w-md" alt="image" />
      </div>
    </div>
  );
};

export default AboutUs;
