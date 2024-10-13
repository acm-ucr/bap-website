"use client";
import Image from "next/image";

const EventGallery = () => {
  return (
    <div className="select-none flex-col">
      <h2 className="text-center text-2xl font-semibold">Event Gallery</h2>

      <div className="pt-4" />

      {/* Main Event Image with Button Overlays */}
      <div className="relative flex justify-center items-center">
        {/* Main Image */}
        <div className="relative">
          <Image
            src="/ucr_event.png"
            alt="UCR Event"
            width={1000}
            height={1000}
            className="object-cover"
          />
          
          {/* Left Button */}
          <button
            className="absolute left-15 top-1/2 transform -translate-y-1/2 bg-transparent border-none"
            style={{ width: '130px', height: '130px' }}
            onClick={() => alert("Left arrow clicked")}
          >
            <span className="sr-only">Previous Event</span>
          </button>

          {/* Right Button */}
          <button
            className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-transparent border-none"
            style={{ width: '150px', height: '150px' }}
            onClick={() => alert("Right arrow clicked")}
          >
            <span className="sr-only">Next Event</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
