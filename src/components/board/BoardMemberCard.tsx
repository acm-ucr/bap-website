import React from "react";

type Props = {
  title: string;
  name: string;
};

const BoardMemberCard: React.FC<Props> = ({ title, name }) => {
  return (
    <div className="w-52 rounded-md border-none bg-red-700 p-3 text-center text-white">
      <div className="font-bold">{title}</div>
      <div>{name}</div>
    </div>
  );
};

export default BoardMemberCard;
