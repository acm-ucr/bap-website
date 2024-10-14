import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button className="bg-rishi-white duration-300 border-rishi-orange text-rishi-black font-urbanist border-2 px-6 rounded-md px-4 rounded text-2xl hover:bg-rishi-orange hover:scale-110">
      {buttonText}
    </button>
  );
};

export default Button;