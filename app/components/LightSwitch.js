"use client";
import { useState } from "react";

export const LighSwitch = ({}) => {
  let color = "";
  let text = "";
  let logo = "";

  const [isOn, steIon] = useState(false);
  if (isOn === true) {
    color = "bg-[#302F2F]";
    text = "text-[#F3F3F4]";
    logo = "🌑";
  } else {
    color = "bg-[#F2E672]";
    text = "text-black";
    logo = "💡";
  }
  return (
    <div
      className={`flex flex-col gap-[12px]  justify-center items-center ${color}   rounded-[15px]  `}
    >
      <h1 className={`font-bold text-[20px] ${text}`}>💡 Гэрэл </h1>
      <h1 className={`font-bold text-[60px] ${text}`}> {logo} </h1>
      <div className="font-bold text-[50px]"></div>

      <button
        className="w-[100px] h-[50px]  text-[#F3F3F4] rounded-[10px] bg-[#E69509]"
        onClick={() => {
          steIon(!isOn);
        }}
      >
        {isOn === true ? "ASAAH" : "UNTRAAH"}
      </button>
      <button></button>
    </div>
  );
};
