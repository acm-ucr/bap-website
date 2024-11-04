import Board from "@/components/board/Board";
import PrevBoard from "@/components/board/PrevBoard";
const Boards = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Board />
      <PrevBoard />
    </div>
  );
};
export default Boards;
