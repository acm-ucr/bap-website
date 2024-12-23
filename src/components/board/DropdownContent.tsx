import { MEMBER } from "@/data/prevBoardData";
import React from "react";

type Props = {
  members: MEMBER[];
};

const DropDownContent: React.FC<Props> = ({ members }) => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-4 bg-bap-brown-100 bg-opacity-30 py-4 text-center md:grid-cols-3">
      {members.map((member, index) => {
        return (
          <div
            className="flex flex-col place-items-center text-pretty px-2 md:text-lg"
            key={index}
          >
            <p className="font-bold"> {member.boardPosition} </p>
            <p> {member.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default DropDownContent;
