import BoardMemberCard from "./BoardMemberCard";
import { BOARDDATA } from "@/data/boardData"

const Board = () => {
  return <div className="w-[85%] mt-10">
    <p className="text-3xl mb-8">2024-2025 EXECUTIVE BOARD</p>
    <div className="grid grid-cols-5 gap-y-10 gap-x-10">
      {BOARDDATA.map((member, index) => {
        return <BoardMemberCard title={member.boardPosition} key={index} name={member.name} image={member.img}/>
      })}
    </div>
  </div>
};
export default Board;
