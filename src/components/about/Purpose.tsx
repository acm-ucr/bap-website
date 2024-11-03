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
      desc: "By surrounding yourself with like-minded individuals, you will be able to engage in a supportive and motivating environment. Our GPA requirement of 3.2 helps maintain our professional reputation while encouraging members to sustain strong academic performance. We want to recognize members and reward academic excellence while inspiring all members to achieve their best.",
      className:
        "flex flex-col bg-bap-brown-100 bg-opacity-50 text-white hover:bg-bap-brown-100 align-items-center ",
      img: diploma,
    },
    {
      id: "PERSONAL DEVELOPMENT",
      desc: "We prioritize personal development as it forms the foundation for professional success. The opportunities we offer will help you refine your networking, communication, and leadership skills.",
      className:
        "flex flex-col bg-bap-brown-100 bg-opacity-50 text-white hover:bg-bap-brown-100 align-items-center",
      img: thinking,
    },
    {
      id: "PROFESSIONAL DEVELOPMENT",
      desc: "At BAP, we facilitate events with firms for our members to build meaningful professional relationships with recruiters and professionals. Our strong alumni network also offers valuable support and guidance throughout your college and career journey. ",
      className:
        "flex flex-col bg-bap-brown-100 bg-opacity-50 text-white hover:bg-bap-brown-100 align-items-center",
      img: handshake,
    },
    {
      id: "SENSE OF COMMUNITY",
      desc: " BAP promotes participation in community service activities to give back to the community, helping members develop a strong sense of ethical, social, and public responsibility.",
      className:
        "flex flex-col bg-bap-brown-100 bg-opacity-50 text-white hover:bg-bap-brown-100 align-items-center",
      img: discussion,
    },
  ];

  return (
    <div className="flex w-10/12 flex-col gap-10 p-20">
      <p className="text-5xl">OUR PURPOSE</p>

      <p className="text-2xl font-light">
        Beta Alpha Psi's purpose is to cultivate professional and personal
        growth, academic excellence, and a strong sense of community among its
        members.
      </p>

      <div className="md:max-w-8xl max-w-full flex-col items-center md:flex md:w-full">
        <div className="flex w-full flex-wrap justify-center">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`${item.className} h-auto w-full px-7 py-10 md:w-1/4 md:text-lg lg:text-2xl`}
            >
              <Image
                src={item.img}
                alt={item.id}
                className="mb-3 h-auto w-full sm:w-36 md:w-40"
              />

              {item.id}
            </button>
          ))}
        </div>

        <div className="md:flex md:w-full">
          {active && (
            <p className="bg-bap-red-200 p-8 text-base sm:text-base md:p-16 md:text-xl">
              {items.find((item) => item.id === active)?.desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Purpose;
