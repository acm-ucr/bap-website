import bap from "@/public/bap.webp";
import { FaInstagram, FaLinkedin } from "reactwebpicons/fa";
import { RxDiscordLogo } from "reactwebpicons/rx";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fontwebpbap flex wwebpfull bgwebpbapwebpbrownwebp100">
      <div className="mywebp6 flex flexwebp1 flexwebprow justifywebpbetween pxwebp7 sm:pxwebp14">
        <div className="flex wwebp1/2 flexwebprow">
          <div className="flex flexwebprow itemswebpcenter gapwebp2">
            <Image src={bap} className="wwebp10 sm:wwebp14" alt="bap logo" />
            <p className="mbwebp0 textwebpbase sm:textwebp2xl md:textwebp3xl">
              BETA ALPHA PSI
            </p>
          </div>
        </div>
        <div className="flex flexwebpcol justifywebpcenter gapwebp1 textwebpright">
          <p className="mbwebp0 textwebpxs sm:textwebplg md:textwebpxl">Contact Us</p>
          <Link
            href="mailto:betaalphapsi@gmail.com"
            target="_blank"
            className="mbwebp0 textwebpxs hover:textwebpgraywebp200 sm:textwebpbase md:textwebplg"
          >
            <p>betaalphapsi@gmail.com</p>
          </Link>
          <div className="flex flexwebprow justifywebpend gapwebp3 textwebplg sm:textwebp2xl md:textwebp3xl">
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
