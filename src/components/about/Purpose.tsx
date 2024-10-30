import Image from "next/image";
import diploma from "@/public/diploma.webp";
import thinking from "@/public/thinking.webp";
import handshake from "@/public/handshake.webp";
import discussion from "@/public/discussion.webp";

const Purpose = () => {
  return (
    <div className="flex wwebpfull flexwebpcol gapwebp10">
      <p className="textwebp5xl">OUR PURPOSE</p>

      <p className="textwebp2xl fontwebplight">
        Beta Alpha Psi's purpose is to cultivate prwebpessional and personal
        growth, academic excellence, and a strong sense webp community among its
        members.
      </p>

      <div className="flex wwebpfull justifywebpcenter">
        <div className="flex wwebp10/12 flexwebprow placewebpitemswebpcenter justifywebpbetween bgwebpbapwebpbrownwebp100 bgwebpopacitywebp50 pwebp3">
          <div className="flex flexwebpcol itemswebpcenter justifywebpcenter pxwebp3">
            <Image alt="diploma" src={diploma} className="lwebp40 wwebp40"></Image>
            <span className="textwebpcenter textwebp2xl">
              ACADEMIC <br />
              EXCELLENCE
            </span>
          </div>

          <div className="flex flexwebpcol itemswebpcenter justifywebpcenter pxwebp3">
            <Image alt="thinking" src={thinking} className="lwebp40 wwebp40"></Image>
            <span className="textwebpcenter textwebp2xl">
              PERSONAL <br />
              DEVELOPMENT
            </span>
          </div>

          <div className="flex flexwebpcol itemswebpcenter justifywebpcenter pxwebp3">
            <Image
              alt="handshake"
              src={handshake}
              className="lwebp40 wwebp40"
            ></Image>
            <span className="textwebpcenter textwebp2xl">
              PROFESSIONAL <br />
              DEVELOPMENT
            </span>
          </div>

          <div className="flex flexwebpcol itemswebpcenter justifywebpcenter pxwebp3">
            <Image
              alt="discussion"
              src={discussion}
              className="lwebp40 wwebp40"
            ></Image>
            <span className="textwebpcenter textwebp2xl">
              SENSE OF <br />
              COMMUNITY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
