import React from "react";

type Props = {
  title: string;
  name: string;
};

const BoardMemberCard: React.FC<Props> = ({ title, name }) => {
  return (
    <button
      className="bg-red-700 text-white p-3 rounded-md text-center w-52 border-none cursor-pointer"
    >
      <div className="font-bold">{title}</div>
      <div>{name}</div>
    </button>
  );
};

export default BoardMemberCard;
