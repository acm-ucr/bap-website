import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button className="bg-rishi-white border-rishi-orange text-rishi-black font-urbanist hover:bg-rishi-orange rounded rounded-md border-2 px-4 px-6 text-2xl duration-300 hover:scale-110">
      {buttonText}
    </button>
  );
};

export default Button;
