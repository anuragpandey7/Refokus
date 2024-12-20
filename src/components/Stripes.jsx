import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const data = [
    {
      imageUrl:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
      number: 42,
    },
    {
      imageUrl:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
      number: 11,
    },
    {
      imageUrl:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",
      number: 2,
    },
    {
      imageUrl:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",
      number: 42,
    },
    {
      imageUrl:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
      number: 11,
    },
    {
      imageUrl:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
      number: 2,
    },
  ];
  return (
    <div className="flex items-center mt-10">
    {
      data.map((item,i) => (
        <Stripe key={i} value = {item}/>
      ))
    }
    
    </div>
  );
};

export default Stripes;
