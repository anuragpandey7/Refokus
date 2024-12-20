import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg py-10  flex gap-20 mx-auto">
        <div className="basis-1/2">
          <h1 className="text-[9rem] font-semibold tracking-tight leading-none ">
            Refokus.
          </h1>
        </div>
        <div className=" flex  ">
          <div className="basis-1/3">
            <h4 className="mb-4 text-zinc-500 text-base">Socials</h4>
            {["Instagram", "(X) Twitter", "Linkdin"].map((social, i) => (
              <a className="block text-xs text-zinc-500 mt-2" key={i} href="">
                {social}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-4 text-zinc-500 text-base">Socials</h4>
            {["Instagram", "(X) Twitter", "Linkdin"].map((social, i) => (
              <a className="block  text-xs text-zinc-500 mt-2" key={i} href="">
                {social}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-sm text-zinc-500 text-right">
              Refokus is th pioneering digital agency driven by design and
              empowered by tech.
            </p>
            <img
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              className="w-40 h-7 mt-5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
