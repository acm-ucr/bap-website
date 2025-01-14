"use client";

import { EventProps } from "react-big-calendar";
import { useState, useRef } from "react";

const CustomEvent = (props: EventProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dialogRef.current?.showModal();
    // setIsOpen(true);
  };

  const handleClose = () => {
    dialogRef.current?.close();
    // setIsOpen(false);
  };

  const formatTime = (date: Date | undefined) => {
    return (
      date?.toLocaleTimeString(navigator.language, {
        hour: "numeric",
        minute: "2-digit",
      }) || "12 AM"
    );
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="group relative flex cursor-pointer justify-center rounded-md bg-bap-red-200 bg-opacity-25 p-1 text-center text-sm font-medium text-black transition-colors hover:bg-opacity-40"
      >
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {formatTime(props.event.start)} {props.title}
        </p>
      </div>

      <dialog
        ref={dialogRef}
        className="w-11/12 max-w-md rounded-lg p-0 backdrop:bg-black backdrop:bg-opacity-50 sm:w-full"
        onClose={handleClose}
      >
        <div className="relative flex flex-col">
          <div className="bg-bap-red-200 bg-opacity-25 p-4">
            <h3 className="text-xl font-semibold">{props.title}</h3>
            <p className="mt-1 text-sm text-gray-600">
              {formatTime(props.event.start)} - {formatTime(props.event.end)}
            </p>
          </div>

          <div className="p-4">
            {props.title && <p className="text-gray-700">{props.title}</p>}
          </div>

          <button
            onClick={handleClose}
            className="absolute right-2 top-2 rounded-full p-2 text-gray-600 hover:bg-black hover:bg-opacity-10"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </dialog>
    </>
  );
};

export default CustomEvent;
