import Image from "next/image";
import diploma from "@/public/diploma.webp";
import thinking from "@/public/thinking.webp";
import handshake from "@/public/handshake.webp";
import discussion from "@/public/discussion.webp";

const Purpose = () => {
  return (
    <div className="flex w-10/12 flex-col gap-10 p-20">
      <p className="text-5xl">OUR PURPOSE</p>

      <p className="text-2xl font-light">
        Beta Alpha Psi's purpose is to cultivate professional and personal
        growth, academic excellence, and a strong sense of community among its
        members.
      </p>

      <div className="flex flex-row place-items-center bg-bap-brown-100 bg-opacity-50 p-3">
        <div className="flex flex-col items-center justify-center px-3">
          <Image all="diploma" src={diploma} className="l-40 w-40"></Image>
          <span className="text-center text-2xl">
            ACADEMIC <br />
            EXCELLENCE
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-3">
          <Image all="thinking" src={thinking} className="l-40 w-40"></Image>
          <span className="text-center text-2xl">
            PERSONAL <br />
            DEVELOPMENT
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-3">
          <Image all="handshake" src={handshake} className="l-40 w-40"></Image>
          <span className="text-center text-2xl">
            PROFESSIONAL <br />
            DEVELOPMENT
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-3">
          <Image
            all="discussion"
            src={discussion}
            className="l-40 w-40"
          ></Image>
          <span className="text-center text-2xl">
            SENSE OF <br />
            COMMUNITY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
