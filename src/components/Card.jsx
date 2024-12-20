import { motion } from "motion/react";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
const Card = ({ width, buttonVal, para, start, hover = false }) => {
  return (
    <motion.div
    whileHover={{backgroundColor : hover===true && "#7443ff",padding: "35px"}}
      className={` bg-zinc-800  hover:${hover} p-5 rounded-xl ${width} min-h-[26vw] flex flex-col justify-between`}
    >
      <div className={`w-full`}>
        <div className={` w-full flex items-center justify-between `}>
          <h1>Create</h1>
          <MdArrowRightAlt className="text-2xl" />
        </div>
        {start && (
          <h1 className="text-2xl font-medium mt-5">
            Another headinng for something.
          </h1>
        )}
      </div>
      <div className="down w-full">
        <h1 className="text-4xl font-bold tracking-tight leading-none">
          Start a Project
        </h1>
        {buttonVal && (
          <button className="rounded-full px-4 py-2 border border-zinc-500 mt-5">
            Contact us
          </button>
        )}

        {para && (
          <p className="text-sm font-light text-zinc-400 mt-5">
            Explore our page to know more
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
