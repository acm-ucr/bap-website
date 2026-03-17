import daniel from "@/public/board/Daniel_Almendarez.webp";
import jack from "@/public/board/Jack_Webber.webp";
import merari from "@/public/board/Merari_Zamora.webp";
import anna from "@/public/board/Anna_Wu.webp";
import lucas from "@/public/board/Lucas_Moo.webp";
import alex from "@/public/board/Alex_Situ.webp";
import roy from "@/public/board/Roy_Waldrop.webp";
import joshua from "@/public/board/Joshua_Nguyen.webp";
import ian from "@/public/board/Ian_Slobodien.webp";
import anthony from "@/public/board/Anthony_Chiu.webp";
import coco from "@/public/board/Coco_Yang.webp";
import julian from "@/public/board/Julian_Chang.webp";
import jayden from "@/public/board/Jayden_Lee.webp";
import ivan from "@/public/board/Ivan_Liu.webp";
import angad from "@/public/board/Angad_Deodhar.webp";
import john from "@/public/board/John_Zhou.webp";
import edward from "@/public/board/Edward_Kim.webp";
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
    name: "Jack Webber",
    img: jack,
  },
  {
    boardPosition: "Senior Advisor",
    name: "Merari Zamora",
    img: merari,
  },
  {
    boardPosition: "President",
    name: "Anna Wu",
    img: anna,
  },
  {
    boardPosition: "Executive Vice President",
    name: "Lucas Moo",
    img: lucas,
  },
  {
    boardPosition: "Co-VP of Membership",
    name: "Alex Situ",
    img: alex,
  },
  {
    boardPosition: "Co-VP of Membership",
    name: "Roy Waldrop",
    img: roy,
  },
  {
    boardPosition: "VP of Correspondence",
    name: "Joshua Nguyen",
    img: joshua,
  },
  {
    boardPosition: "VP of Finance",
    name: "Ian Slobodien",
    img: ian,
  },
  {
    boardPosition: "Co-VP of Marketing",
    name: "Anthony Chiu",
    img: anthony,
  },
  {
    boardPosition: "Co-VP of Marketing",
    name: "Coco Yang",
    img: coco,
  },
  {
    boardPosition: "VP of External Affairs",
    name: "Julian Chang",
    img: julian,
  },
  {
    boardPosition: "Co-VP of Internal Affairs",
    name: "Jayden Lee",
    img: jayden,
  },
  {
    boardPosition: "Co-VP of Internal Affairs",
    name: "Ivan Liu",
    img: ivan,
  },
  {
    boardPosition: "Co-VP of Professional Development",
    name: "Angad Deodhar",
    img: angad,
  },
  {
    boardPosition: "Co-VP of Professional Development",
    name: "John Zhou",
    img: john,
  },
  {
    boardPosition: "VP of Alumni Relations",
    name: "Edward Kim",
    img: edward,
  },
];

export default BOARDDATA;
