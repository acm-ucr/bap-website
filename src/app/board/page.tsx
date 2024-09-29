import Title from "@/components/Title";
import Board from "@/components/board/Board";
import PrevBoard from "@/components/board/PrevBoard";
const Boards = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title />
      <Board />
      <PrevBoard />
    </div>
  );
};
export default Boards;
