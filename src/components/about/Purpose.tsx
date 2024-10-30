import Image from "next/image";
import diploma from "@/public/diploma.webp";
import thinking from "@/public/thinking.webp";
import handshake from "@/public/handshake.webp";
import discussion from "@/public/discussion.webp";

const Purpose = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <p className="text-5xl">OUR PURPOSE</p>

      <p className="text-2xl font-light">
        Beta Alpha Psi's purpose is to cultivate professional and personal
        growth, academic excellence, and a strong sense of community among its
        members.
      </p>

      <div className="flex w-full justify-center">
        <div className="flex w-10/12 flex-row place-items-center justify-between bg-bap-brown-100 bg-opacity-50 p-3">
          <div className="flex flex-col items-center justify-center px-3">
            <Image alt="diploma" src={diploma} className="l-40 w-40"></Image>
            <span className="text-center text-2xl">
              ACADEMIC <br />
              EXCELLENCE
            </span>
          </div>

          <div className="flex flex-col items-center justify-center px-3">
            <Image alt="thinking" src={thinking} className="l-40 w-40"></Image>
            <span className="text-center text-2xl">
              PERSONAL <br />
              DEVELOPMENT
            </span>
          </div>

          <div className="flex flex-col items-center justify-center px-3">
            <Image
              alt="handshake"
              src={handshake}
              className="l-40 w-40"
            ></Image>
            <span className="text-center text-2xl">
              PROFESSIONAL <br />
              DEVELOPMENT
            </span>
          </div>

          <div className="flex flex-col items-center justify-center px-3">
            <Image
              alt="discussion"
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
    </div>
  );
};

export default Purpose;
