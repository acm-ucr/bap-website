import React from "react";

type Props = {
  title: string;
  name: string;
};

const BoardMemberCard: React.FC<Props> = ({ title, name }) => {
  return (
    <button className="w-52 cursor-pointer rounded-md border-none bg-red-700 p-3 text-center text-white">
      <div className="font-bold">{title}</div>
      <div>{name}</div>
    </button>
  );
};

export default BoardMemberCard;
