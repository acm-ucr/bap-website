import BoardMemberCard from "./BoardMemberCard";
import { BOARDDATA } from "@/data/boardData";
import PrevBoard from "./PrevBoard";

const Board = () => {
  return (
    <div className="mt-10 w-[85%]">
      <p className="mb-8 text-3xl">2024-2025 EXECUTIVE BOARD</p>
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      <PrevBoard />
    </div>
  );
};
export default Board;
