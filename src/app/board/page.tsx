import Board from "@/components/board/Board";
import Title from "@/components/Title";
const Boards = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-11/12 justify-start">
        <Title title="MEET THE TEAM" />
      </div>
      <Board />
    </div>
  );
};
export default Boards;
