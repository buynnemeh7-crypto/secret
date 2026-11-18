"use client";
import { useState } from "react";

export const Countents = ({}) => {
  const [point, stePoint] = useState(0);
  return (
    <div className="flex flex-col gap-[25px]  justify-center items-center">
      <h1 className="font-bold text-[20px]"> 🔢 Тоолуур</h1>
      <div className="font-bold text-[50px]">{point}</div>
      <div className="flex gap-[15px]">
        <button
          className="w-[50px] h-[50px] bg-black text-[#F3F3F4] rounded-full"
          onClick={() => {
            stePoint(point - 1);
          }}
        >
          -
        </button>
        <button
          className="w-[50px] h-[50px] bg-black text-[#F3F3F4] rounded-full"
          onClick={() => {
            stePoint(point + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
