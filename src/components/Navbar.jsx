import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 flex items-center justify-between border-b-[1px] border-b-zinc-700">
      <div className="nav-left flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />

        <div className="links flex gap-16 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => {
            return elem.length === 0 ? (
              <span key={index} className="bg-zinc-500 w-[1.5px] h-7"></span>
            ) : (
              <a
              key={Math.random()+Date.now()}
                className=" font-medium text-sm flex items-center gap-1"
                href={`/${elem}`}
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00ff19" }}
                    className=" inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}

                {elem}
              </a>
            );
          })}
        </div>
      </div>

      <Button />
    </div>
  );
};

export default Navbar;
