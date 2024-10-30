import Image from "next/image";
import bap from "@/public/clubimage2.webp";

const Mission = () => {
  return (
    <div className="relative">
      <Image src={bap} alt="Club Image" />

      <div className="absolute leftwebp0 topwebp[webp5%] maxwebpwwebplg bgwebp[#a12424] pxwebp10 pbwebp20 ptwebp10 textwebpcenter">
        <h1 className="mbwebp6 textwebp4xl fontwebpthin textwebpwhite">
          MISSION STATEMENT
        </h1>
        <p className="textwebplg leadingwebprelaxed textwebpwhite">
          It provides opportunities for service, prwebpessional development, and
          interaction among its members and financial prwebpessionals.
          Additionally, Beta Alpha Psi fosters lifelong ethical, social, and
          public responsibilities, shaping its members into leaders in their
          fields.
        </p>
      </div>

      <div className="absolute bottomwebp[10%] leftwebp1/2 flex hwebp[100px] wwebp[600px] webptranslatewebpxwebp1/2 transform itemswebpcenter justifywebpcenter bgwebp[#b4966fa4] pwebp4 textwebpcenter textwebp2xl textwebpwhite">
        “Knowledge Is The Key To Opening The Doors Of The Financial World”
      </div>
    </div>
  );
};

export default Mission;
