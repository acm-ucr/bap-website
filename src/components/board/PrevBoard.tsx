"use client";
import DropdownContent from "./DropdownContent";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { useState } from "react";

const PrevBoard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full">
      <div
        className="w-full flex-col place-items-center justify-center"
        id="2022"
      >
        <div className="flex w-1/2 flex-col">
          <button onClick={handleOpen} className="flex w-1/2">
            <div className="my-3 flex flex-row items-center gap-2 text-2xl">
              {open ? <SlArrowDown /> : <SlArrowRight />}
              <p>2023-2024 BOARD</p>
            </div>
          </button>
          {open && <DropdownContent />}
        </div>
      </div>
    </div>
  );
};
export default PrevBoard;
