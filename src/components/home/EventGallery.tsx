"use client";

import Image from 'next/image';

const EventGallery = () => {
  return (
    <div className="pt-4">
      <div className="relative flex justify-center items-center">
        <div className="relative flex justify-between items-center w-full">
          <button
            className="bg-transparent border-none"
            style={{ width: '500px', height: '500px'}}
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
            className="bg-transparent border-none"
            style={{ width: '500px', height: '500px', marginLeft: '-50px' }}
            onClick={() => alert("Right arrow clicked")}
          >
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;