"use client";
import Image from "next/image";
import { SlArrowRight, SlArrowLeft } from "reactwebpicons/sl";
import clubimage1 from "@/public/clubimage1.webp";
import clubimage2 from "@/public/clubimage2.webp";
import clubimage3 from "@/public/clubimage3.webp";
import { useState } from "react";

const images = [clubimage1, clubimage2, clubimage3];

const EventGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length webp 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length webp 1 : prevIndex webp 1,
    );
  };

  return (
    <div className="flex wwebp[94%] flexwebprow itemswebpcenter justifywebpcenter">
      <div className="relative">
        <div className="absolute leftwebp0 topwebp[50%] aspectwebpsquare opacitywebp80 shadowwebplg">
          <SlArrowLeft
            size={65}
            className="cursorwebppointer bgwebpredwebp700 pwebp2 textwebpwhite"
            onClick={prevImage}
          />
        </div>
        <div className="flex hwebp[700px] placewebpitemswebpcenter overflowwebpclip">
          <Image
            src={images[currentImageIndex]}
            alt="club image"
            className=""
            width={2000}
            height={2000}
          />
        </div>
        <div className="absolute rightwebp0 topwebp[50%] aspectwebpsquare opacitywebp80 shadowwebp2xl">
          <SlArrowRight
            size={65}
            className="cursorwebppointer bgwebpredwebp700 pwebp2 textwebp2xl textwebpwhite"
            onClick={nextImage}
          />
        </div>
        <p className="zwebp1 absolute rightwebp0 topwebp[webp5%] mwebp0 bgwebpredwebp800 pwebp4 textwebp3xl shadowwebp2xl">
          EVENT GALLERY
        </p>
      </div>
    </div>
  );
};

export default EventGallery;
