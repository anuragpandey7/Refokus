import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {
  const [workImage, setWorkImage] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "47%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "58%",
      left: "43%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "55%",
      left: "60%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    const imageShowAndHide = (arr) => {
      setWorkImage((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? {...item,isActive: true}
            : {...item,isActive: false}
        )
      );
    };

    switch (Math.floor(data * 100)) {
      case 0:
        imageShowAndHide([]);
        break;
      case 1:
        imageShowAndHide([0, 1]);
        break;
      case 2:
        imageShowAndHide([0, 1, 2]);
        break;
      case 3:
        imageShowAndHide([0, 1, 2, 3]);
        break;
      case 4:
        imageShowAndHide([0, 1, 2, 3, 4]);
        break;
      case 5:
        imageShowAndHide([0, 1, 2, 3, 4, 5]);
        break;
    }
  });
  return (
    <div className="w-full mt-2">
      <div className=" relative max-w-screen-lg mx-auto  text-center">
        <h1 className="text-[30vw]  font-medium  leading-none tracking-tight select-none">
          work
        </h1>
        <div className="w-full top-0 absolute  h-full">
          {workImage.map(
            (image, i) =>
              image.isActive && (
                <img
                  key={i}
                  className="-translate-x-[50%] -translate-y-[50%] absolute w-48 rounded-lg object-cover"
                  style={{ top: image.top, left: image.left }}
                  src={image.url}
                  alt="..."
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
