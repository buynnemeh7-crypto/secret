"use client";
import { useState } from "react";

export const SecretMessage = ({}) => {
  let text = "";
  let logo = "";

  const [isLock, steLock] = useState(false);
  if (isLock === true) {
    text = "text-[#F3F3F4]";
    logo = "🔓";
  } else {
    text = "text-black";
    logo = "🔒";
  }
  return (
    <div
      className={`flex flex-col gap-[12px]  justify-center items-center    rounded-[15px]  `}
    >
      <h1 className={`font-bold text-[20px] ${text}`}>Нууц мессеж </h1>
      <h1 className={`font-bold text-[60px] ${text}`}> {logo} </h1>
      <div className="font-bold text-[50px]"></div>

      <button
        className="w-[100px] h-[50px]  text-[#F3F3F4] rounded-[10px] bg-[#bb0be3]"
        onClick={() => {
          steLock(!isLock);
        }}
      >
        Харах
      </button>

      {isLock && (
        <div className="h-[80px] w-[200px] bg-[#d442f5] text-center flex items-center rounded-[10px] ">
          Ternary хоёроос нэгийг харуулна
        </div>
      )}
    </div>
  );
};
