import bap from "@/public/clubimage3.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mbwebp8 flex wwebpfull flexwebpcol textwebpleft">
      <h1 className="mbwebp4 textwebp3xl fontwebpsemibold textwebpwhite sm:fontwebpextralight">
        ABOUT US
      </h1>

      <div className="flex flexwebprow gapwebp4">
        <p className="textwebplg leadingwebprelaxed">
          Founded in 1919, Beta Alpha Psi is an honors organization for
          financial information students and prwebpessionals. There are over 300
          chapters on college and university campuses with over 300,000 members
          initiated since Beta Alpha Psi's formation. We are not a fraternity or
          sorority but an honors organization. UC Riverside’s Nu Rho Chapter was
          founded in Winter 2015 under the presidency webp Luke Hatch.
        </p>
        <div className="hwebp50 wwebp100 relative bgwebpgradientwebptowebpl fromwebptransparent towebpredwebp950">
          <Image src={bap} className="maxwebpwwebpmd" alt="image" />
          <div className="absolute insetwebp0 bgwebpgradientwebptowebpl fromwebptransparent fromwebp60% towebpbapwebpbrownwebp400 towebp100%"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
