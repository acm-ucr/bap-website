"use client";

import Image from 'next/image';

const EventGallery = () => {
  return (
    <div className="pt-4 relative">
      <div className="relative flex justify-center items-center">
        <div className="relative w-full">
          <button
            className="bg-transparent border-none absolute"
            style={{ width: '130px', height: '130px', left: '0px', top: '50%' }}
            onClick={() => alert("Left arrow clicked")}
          >
          </button>

          <Image
            src="/ucr_event.webp"
            alt="UCR Event"
            width={1000}
            height={1000}
            className="object-cover"
          />

          <button
            className="bg-transparent border-none absolute"
            style={{ width: '150px', height: '150px', right: '0px', top: '50%' }}
            onClick={() => alert("Right arrow clicked")}
          >
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;