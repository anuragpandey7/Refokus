import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";


const Products = () => {
  const data = [
    {
      title: "artile",
      description:
        "artile description for product with name artile name and which is just awesome how tabnine works with react conponents like",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "artile description for product with name artile name and which is just awesome how tabnine works with react conponents like",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "artile description for product with name artile name and which is just awesome how tabnine works with react conponents like",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "artile description for product with name artile name and which is just awesome how tabnine works with react conponents like",
      live: true,
      case: true,
    },
    {
      title: "artile",
      description:
        "artile description for product with name artile name and which is just awesome how tabnine works with react conponents like",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const mouseMove = (val) => {
    setPos(val * 18);
  };

  return (
    <div className="mt-16 relative overflow-x-hidden">
      {data.map((product, i) => (
        <Product
          index={i}
          mouseMove={mouseMove}
          key={product.title + Math.random()}
          product={product}
        />
      ))}
      <div className="w-full h-full  top-0 pointer-events-none absolute">
        <motion.div
          animate={{ y: pos + `rem` }}
          initial={{ y: pos, x: "-50%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className=" absolute left-[45%] w-80 h-[18rem] -translate-x-[50%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full    "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover "
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" bg-red-200 w-full h-full    "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover "
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-43.webm"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" bg-red-300 w-full h-full    "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover "
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" bg-red-400 w-full h-full    "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover "
              src="https://files.refokus.com/storage/v1/object/public/Website%20Assets/people-short.webm"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" bg-red-500 w-full h-full    "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover "
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
