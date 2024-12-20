import { motion } from "motion/react";
import React from "react";
const Marquee = ({ imageUrls, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear",duration:40,  repeat: Infinity }}
        className="flex flex-shrink-0 py-10 gap-32 pr-20"
      >
        {imageUrls.map((img, i) => (
          <img className="w-40 " key={i} src={`${img}`} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 py-5 gap-20 pr-20"
      >
        {imageUrls.map((img, i) => (
          <img className="w-40 " key={i} src={`${img}`} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
