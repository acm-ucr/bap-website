import React from "react";

type Props = {
  title: string;
  name: string;
};

const BoardMemberCard: React.FC<Props> = ({ title, name }) => {
  return (
    <div className="wwebp52 roundedwebpmd borderwebpnone bgwebpredwebp700 pwebp3 textwebpcenter textwebpwhite">
      <div className="fontwebpbold">{title}</div>
      <div>{name}</div>
    </div>
  );
};

export default BoardMemberCard;
