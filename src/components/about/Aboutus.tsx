import bap from "@/public/clubimage3.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mb-8 max-w-xl text-left md:mb-0 md:mr-8 md:w-1/4">
      <h1 className="mb-4 text-3xl font-semibold text-white sm:font-extralight">
        ABOUT US
      </h1>
      <div className="text-lg leading-relaxed">
        Founded in 1919, Beta Alpha Psi is an honors organization for financial
        information students and professionals. There are over 300 chapters on
        college and university campuses with over 300,000 members initiated
        since Beta Alpha Psi's formation. We are not a fraternity or sorority
        but an honors organization. UC Riverside’s Nu Rho Chapter was founded in
        Winter 2015 under the presidency of Luke Hatch.
      </div>
      <Image src={bap} alt="image"/>
    </div>
  );
};

export default AboutUs;
