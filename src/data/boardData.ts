import daniel from "@/public/board/danielAlmendarezFacultyAdvisor.webp";
import alison from "@/public/board/alisonWuPresident.webp";
import anna from "@/public/board/annaWuVpOfMarketing.webp";
import chris from "@/public/board/chrisAmaroVpOfMembership.webp";
import rachel from "@/public/board/rachaelChenVpOfCorrespondence.webp";
import ivan from "@/public/board/ivanChenVpOfFinance.webp";
import jacqueline from "@/public/board/jacquelineCejaVpOfExternalAffairs.webp";
import matthew from "@/public/board/matthewLamVpOfInternalAffairs.webp";
import tanya from "@/public/board/tanyaTangExecutiveVicePresident.webp";
import kylie from "@/public/board/kylieFungSeniorAdvisor.webp";
import { StaticImageData } from "next/image";

export type BOARDTYPE = {
  name: string;
  img: StaticImageData;
  boardPosition: string;
  title: string;
  email: string;
};

export const BOARDDATA: BOARDTYPE[] = [
  {
    boardPosition: "Faculty Advisor",
    name: "Daniel Almendarez",
    title: "Department of Business",
    email: "123@gmail.com",
    img: daniel,
  },
  {
    boardPosition: "President",
    name: "Alison Wu",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: alison,
  },
  {
    boardPosition: "Executive Vice President",
    name: "Tanya Tang",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: tanya,
  },
  {
    boardPosition: "VP of Marketing",
    name: "Anna Wu",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: anna,
  },
  {
    boardPosition: "VP of Membership",
    name: "Chris Amaro",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: chris,
  },
  {
    boardPosition: "VP of Correspondence",
    name: "Rachel Chen",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: rachel,
  },
  {
    boardPosition: "VP of Finance",
    name: "Ivan Chen",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: ivan,
  },
  {
    boardPosition: "VP of External Affairs",
    name: "Jacqueline Ceja",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: jacqueline,
  },
  {
    boardPosition: "VP of Internal Affairs",
    name: "Matthew Lam",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: matthew,
  },
  {
    boardPosition: "Senior Advisor",
    name: "Kylie Fung",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: kylie,
  },
];

export default BOARDDATA;
