import bap from "@/public/bap.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-bap flex w-full bg-bap-brown-100">
      <div className="my-6 flex flex-1 flex-row justify-between px-12">
        <div className="flex w-1/2 flex-row">
          <div className="ml-5 flex flex-row items-center gap-2">
            <Image src={bap} className="w-[9%]" alt="bap logo" />
            <p className="mb-0 text-3xl">BETA ALPHA PSI</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-1 text-right">
          <p className="mb-0 text-xl">Contact Us</p>
          <Link
            href="mailto:betaalphapsi@gmail.com"
            target="_blank"
            className="mb-0 text-lg hover:text-gray-200"
          >
            <p>betaalphapsi@gmail.com</p>
          </Link>
          <div className="flex flex-row justify-end gap-3 text-3xl">
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
