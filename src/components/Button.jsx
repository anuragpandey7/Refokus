import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title="Get Started"}) => {
  return (
    <div className="max-w-40 bg-zinc-100 text-black px-3 py-2 rounded-full flex items-center gap-4  ">
      <span className="text-sm font-medium ">{title}</span>
      <IoIosReturnRight className="text-xl" />
    </div>
  );
};

export default Button;
