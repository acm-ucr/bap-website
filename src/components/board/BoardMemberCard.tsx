import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  name: string;
  image: StaticImageData;
};

const BoardMemberCard: React.FC<Props> = ({ title, name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded border-none bg-bap-brown-100 bg-opacity-40 p-3 text-center text-white">
      <div className="z-0 flex h-full w-full flex-col place-items-center">
        <div className="h-3/4 w-full place-items-center">
          <Image
            src={image}
            alt="boardPic"
            className="z-0 aspect-square h-full rounded object-cover"
          />
        </div>
        <div className="z-10 -mt-4 w-[85%] rounded bg-bap-red-200 p-3 shadow-3xl">
          <p className="text-xs font-bold lg:text-sm xl:text-base">{title}</p>
          <p className="text-xs lg:text-sm xl:text-base">{name}</p>
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
