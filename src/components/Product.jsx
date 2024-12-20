import React from "react";
import Button from "./Button";
import { motion } from "motion/react";

const Product = ({ product, index, mouseMove }) => {
  return (
    <div
      onMouseEnter={() => mouseMove(index)}
      className="w-full py-16 h-[18rem] text-white"
    >
      <div className="max-w-screen-lg mx-auto  flex items-center justify-between ">
        <h1 className="text-5xl font-medium capitalize">{product.title}</h1>
        <div className="detail w-1/3">
          <p className="mb-8">{product.description}</p>
          <div className="flex items-center gap-6">
            {product.live && <Button title="Live Website" />}
            {product.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
