import BoardMemberCard from "./BoardMemberCard";
import { BOARDDATA } from "@/data/boardData";

const Board = () => {
  return (
    <div className="mt-10 w-[85%]">
      <p className="mb-8 text-3xl">2024-2025 EXECUTIVE BOARD</p>
      <div className="grid grid-cols-5 gap-x-10 gap-y-10">
        {BOARDDATA.map((member, index) => {
          return (
            <BoardMemberCard
              title={member.boardPosition}
              key={index}
              name={member.name}
              image={member.img}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Board;
