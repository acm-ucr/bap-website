"use client";
import Image from "next/image";
import diploma from "@/public/icons/diploma.webp";
import thinking from "@/public/icons/thinking.webp";
import handshake from "@/public/icons/handshake.webp";
import discussion from "@/public/icons/discussion.webp";

import { useRef, useState, useEffect } from "react";

const Purpose = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <div className="flex w-full flex-col gap-8 pb-20">
      <p className="text-4xl">OUR PURPOSE</p>

      <p className="text-2xl font-light">
        Beta Alpha Psi's purpose is to cultivate professional and personal
        growth, academic excellence, and a strong sense of community among its
        members.
      </p>
      <div
        className="md:max-w-8xl max-w-full flex-col items-center md:flex md:w-full"
        ref={sectionRef}
      >
        <div className="grid w-full grid-cols-2 flex-wrap justify-center md:flex">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`${item.className} ${isVisible ? "animate-fade-right" : "opacity-0"} h-auto w-full px-7 py-10 md:w-1/4 md:text-lg lg:text-2xl`}
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <Image
                src={item.img}
                alt={item.id}
                className="mb-3 h-auto w-[50%] sm:w-36 md:w-40"
              />

              {item.id}
            </button>
          ))}
        </div>

        <div className="flex w-full">
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
