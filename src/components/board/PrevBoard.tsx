"use client";
import DropdownContent from "./DropdownContent";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { PREVBOARDDATA, PREVBOARDTYPE } from "@/data/prevBoardData";

const PrevBoard = () => {
  const [openData, setOpen] = useState<PREVBOARDTYPE[] | []>(PREVBOARDDATA);

  const handleOpen = (id: string) => {
    // console.log(openData);
    const newOpen = openData.map((board) => {
      if (board.year == id) {
        return {
          year: board.year,
          open: !board.open,
          members: board.members,
        };
      } else {
        return {
          year: board.year,
          open: board.open,
          members: board.members,
        };
      }
    });
    setOpen(newOpen);
  };

  return (
    <div className="flex w-full flex-col justify-start">
      {PREVBOARDDATA.map((board, index) => {
        return (
          <div className="w-full flex-col" key={index}>
            <div className="flex w-full flex-col">
              <button
                onClick={(e) => handleOpen(e.currentTarget.id)}
                className="flex w-full"
                id={board.year}
              >
                <div className="my-4 flex flex-row items-center gap-2 text-2xl">
                  {openData[index].open ? <SlArrowDown /> : <SlArrowRight />}
                  <div className="text-3xl">
                    <p>{board.year} BOARD</p>
                  </div>
                </div>
              </button>
              {openData[index].open && (
                <DropdownContent members={board.members} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PrevBoard;
