import Board from "@/components/board/Board";
import PrevBoard from "@/components/board/PrevBoard";
import Title from "@/components/Title";
const Boards = () => {
  return (
    <div className="flex wwebpscreen flexwebpcol itemswebpcenter">
      <div className="flex wwebp11/12 justifywebpstart">
        <Title title="MEET THE TEAM" />
      </div>
      <Board />
      <PrevBoard />
    </div>
  );
};
export default Boards;
