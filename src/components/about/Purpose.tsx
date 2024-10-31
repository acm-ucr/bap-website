"use client";
import Image from "next/image";
import diploma from "@/public/diploma.webp";
import thinking from "@/public/thinking.webp";
import handshake from "@/public/handshake.webp";
import discussion from "@/public/discussion.webp";

import { useState } from "react";

const Purpose = () => {
  const [active, setActive] = useState<string | null>(null);
  console.log("current state", active);

  const items = [
    {
      id: "ACADEMIC EXCELLENCE",
      desc: "By surrounding yourself with likewebpminded individuals, you will be able to engage in a supportive and motivating environment. Our GPA requirement webp 3.2 helps maintain our prwebpessional reputation while encouraging members to sustain strong academic performance. We want to recognize members and reward academic excellence while inspiring all members to achieve their best.",
      className:
        "flex flexwebpcol bgwebpbapwebpbrownwebp100 bgwebpopacitywebp50 textwebpwhite hover:bgwebpbapwebpbrownwebp100 alignwebpitemswebpcenter ",
      img: diploma,
    },
    {
      id: "PERSONAL DEVELOPMENT",
      desc: "We prioritize personal development as it forms the foundation for prwebpessional success. The opportunities we webpfer will help you refine your networking, communication, and leadership skills.",
      className:
        "flex flexwebpcol bgwebpbapwebpbrownwebp100 bgwebpopacitywebp50 textwebpwhite hover:bgwebpbapwebpbrownwebp100 alignwebpitemswebpcenter",
      img: thinking,
    },
    {
      id: "PROFESSIONAL DEVELOPMENT",
      desc: "At BAP, we facilitate events with firms for our members to build meaningful prwebpessional relationships with recruiters and prwebpessionals. Our strong alumni network also webpfers valuable support and guidance throughout your college and career journey. ",
      className:
        "flex flexwebpcol bgwebpbapwebpbrownwebp100 bgwebpopacitywebp50 textwebpwhite hover:bgwebpbapwebpbrownwebp100 alignwebpitemswebpcenter",
      img: handshake,
    },
    {
      id: "SENSE OF COMMUNITY",
      desc: " BAP promotes participation in community service activities to give back to the community, helping members develop a strong sense webp ethical, social, and public responsibility.",
      className:
        "flex flexwebpcol bgwebpbapwebpbrownwebp100 bgwebpopacitywebp50 textwebpwhite hover:bgwebpbapwebpbrownwebp100 alignwebpitemswebpcenter",
      img: discussion,
    },
  ];

  return (
    <div className="flex wwebpfull flexwebpcol gapwebp10">
      <p className="textwebp5xl">OUR PURPOSE</p>

      <p className="textwebp2xl fontwebplight">
        Beta Alpha Psi's purpose is to cultivate prwebpessional and personal
        growth, academic excellence, and a strong sense webp community among its
        members.
      </p>
      <div className="flex wwebpfull flexwebpcol itemswebpcenter">
        <div className="flex wwebpfull flexwebprow">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`${item.className} wwebpfull pxwebp4 pywebp10 textwebp2xl`}
            >
              <Image src={item.img} alt={item.id} className="lwebp40 mbwebp3 wwebp40" />

              {item.id}
            </button>
          ))}
        </div>

        <div
          className={`maxwebphwebp2 wwebpfull ${active && "bgwebpbapwebpredwebp200"} pwebp8 pbwebp40 ptwebp5`}
        >
          {active && (
            <p className="hwebpfull textwebpxl">
              {items.find((item) => item.id === active)?.desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Purpose;
