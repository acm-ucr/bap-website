import daniel from "@/public/board/danielAlmendarez.webp";
import tanya from "@/public/board/tanyaTang.webp";
import anna from "@/public/board/annaWu.webp";
import jack from "@/public/board/jackWebber.webp";
import lucas from "@/public/board/lucasMoo.webp";
import merari from "@/public/board/merariZamora.webp";
import cody from "@/public/board/codyNguyen.webp";
import amanda from "@/public/board/amandaHsieh.webp";
import phuong from "@/public/board/phuongHo.webp";
import isabella from "@/public/board/isabellaWu.webp";
import allen from "@/public/board/allenLien.webp";
import andrew from "@/public/board/andrewMartinez.webp";
import { StaticImageData } from "next/image";

export type BOARDTYPE = {
  name: string;
  img: StaticImageData;
  boardPosition: string;
};

export const BOARDDATA: BOARDTYPE[] = [
  {
    boardPosition: "Faculty Advisor",
    name: "Daniel Almendarez",
    img: daniel,
  },
  {
    boardPosition: "Senior Advisor",
    name: "Tanya Tang",
    img: tanya,
  },
  {
    boardPosition: "President",
    name: "Anna Wu",
    img: anna,
  },
  {
    boardPosition: "Executive Vice President",
    name: "Jack Webber",
    img: jack,
  },
  {
    boardPosition: "VP of Membership",
    name: "Lucas Moo",
    img: lucas,
  },
  {
    boardPosition: "VP of Correspondence",
    name: "Merari Zamora",
    img: merari,
  },
  {
    boardPosition: "VP of Finance",
    name: "Cody Nguyen",
    img: cody,
  },
  {
    boardPosition: "VP of Marketing",
    name: "Amanda Hsieh",
    img: amanda,
  },
  {
    boardPosition: "VP of External Affairs",
    name: "Phuong Ho",
    img: phuong,
  },
  {
    boardPosition: "VP of Internal Affairs",
    name: "Isabella Wu",
    img: isabella,
  },
  {
    boardPosition: "VP of Professional Development",
    name: "Allen Lien",
    img: allen,
  },
  {
    boardPosition: "VP of Alumni Relations",
    name: "Andrew Martinez",
    img: andrew,
  },
];

export default BOARDDATA;
