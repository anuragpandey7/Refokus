import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto  py-20 flex items-center gap-2">
        <Card width={"basis-1/3"} start={false} buttonVal={false} para={true} />
        <Card
          width={"basis-2/3"}
          start={true}
          buttonVal={true}
          para={false}
          hover={true}
        />
      </div>
    </div>
  );
};

export default Cards;
