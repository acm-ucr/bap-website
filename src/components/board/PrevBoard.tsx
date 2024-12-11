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
    <div className="flex w-full justify-start">
      <div className="w-full flex-col" id="2022">
        <div className="flex w-full flex-col">
          <button onClick={handleOpen} className="flex w-1/2">
            <div className="my-4 flex flex-row items-center gap-2 text-2xl">
              {open ? <SlArrowDown /> : <SlArrowRight />}
              <div className="text-3xl">
                <p>2023-2024 BOARD</p>
              </div>
            </div>
          </button>
          {open && <DropdownContent />}
        </div>
      </div>
    </div>
  );
};
export default PrevBoard;
