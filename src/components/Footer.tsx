import bap from "@/public/bap.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="font-bap flex w-full bg-bap-brown-100 pb-6 pt-12">
      <div className="my-12 flex flex-1 flex-row justify-between px-16">
        <div className="flex w-1/2 flex-row items-end">
          <div className="flex flex-row items-center pl-5">
            <Image src={bap} className="mr-4 w-1/6 text-3xl" alt="bap logo" />
            <p className="text-6xl">BETA ALPHA PSI</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-right">
          <p className="text-4xl">Contact Us</p>
          <a
            href="mailto:betaalphapsi@gmail.com"
            target="_blank"
            className="text-3xl hover:text-gray-200"
          >
            betaalphapsi@gmail.com
          </a>
          <div className="flex flex-row justify-end gap-4 text-6xl">
            <FaInstagram />
            <RxDiscordLogo />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
