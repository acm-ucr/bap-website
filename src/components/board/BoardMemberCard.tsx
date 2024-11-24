import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  name: string;
  image: StaticImageData
};

const BoardMemberCard: React.FC<Props> = ({ title, name, image }) => {
  return (
    <div className="rounded border-none p-3 bg-bap-brown-100 bg-opacity-40 text-center text-white flex 
      flex-col justify-center items-center">
      <div className="h-full w-full z-0 flex flex-col place-items-center">
        <div className="h-3/4 w-full place-items-center">
          <Image src={image} alt="boardPic" className=" h-full aspect-square object-cover z-0 rounded"/>
        </div>
        <div className=" bg-bap-red-200 rounded -mt-4 shadow-3xl z-10 p-3 w-[85%]">
          <p className="font-bold">{title}</p>
          <p>{name}</p>
        </div>
      </div>
      {/* <div className=" w-full mt-6 mb-3">
        <p className="">{department?}</p>
        <p>{email?}</p>
      </div> */}
    </div>
  );
};

export default BoardMemberCard;
