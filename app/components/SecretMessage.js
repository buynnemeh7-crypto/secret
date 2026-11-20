"use client";
import { isClientHookDynamicError } from "next/dist/server/dynamic-rendering-utils";
import { useState } from "react";

export const SecretMessage = ({}) => {
  const [inputValue, setInput] = useState("");
  const [toDoList, setTodolist] = useState([]);
  const [point, stePoint] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const changeColor = (NewCategor) => {
    setSelectedCategory(NewCategor);
  };
  const toggleTask = (id) => {
    const result = toDoList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task,
    );

    setTodolist(result);
  };
  const deleteJob = (index) => {
    const updatedList = toDoList.filter((job, i) => {
      stePoint(point - 1);
      return index !== i;
    });
    setTodolist(updatedList);
  };

  const addJob = () => {
    if (inputValue.trim()) {
      stePoint(point + 1);
      const newJob = {
        id: Date.now(),
        title: inputValue.trim(),
        isDone: false,
      };
      setTodolist([...toDoList, newJob, inputValue]);
      setInput("");
    }
  };
  const filteredList = toDoList.filter((job) => {
    if (selectedCategory === "DONE") return job.isDone === true;
    if (selectedCategory === "END") return job.isDone === false;
    if (selectedCategory === "ALL") return true;
  });

  return (
    <div className="flex flex-col gap-[20px] justify-center items-center ">
      <div
        className={`flex flex-col gap-[12px] justify-center items-start rounded-[15px] pr-[200px]  `}
      >
        <h1 className={`font-bold text-[40px] `}>✅ Хийх ажил </h1>
        <h1 className={` text-[20px] text-[#6E7E96] `}>{point} ажил</h1>
        <div className="font-bold text-[50px]"></div>
      </div>
      <div className="flex  justify-around gap-[10px]">
        <input
          className="bg-[#f7faf8] rounded-[10px] border-none w-[400px]  pl-[10px]"
          value={inputValue}
          placeholder=" Шинэ ажил бичих... "
          onChange={(event) => {
            setInput(event.target.value);
          }}
          type="text"
        />
        <button
          className="w-[100px] h-[50px] font-bold  text-[#F6F8FA] rounded-[10px] bg-[#CAD5E2]"
          onClick={addJob}
        >
          Нэмэх
        </button>{" "}
      </div>
      <div className=" w-[505px] h-[40px] flex justify-between">
        <button
          onClick={() => {
            changeColor("ALL");
          }}
          className={` w-[150px] h-[45px] ${selectedCategory === "ALL" ? "bg-[#0E172B] text-[#F3F4F5]" : "bg-[#F1F5F9] text-[#6E7482]"} rounded-[10px] text-[20px]`}
        >
          Бүгд
        </button>
        <button
          onClick={() => {
            changeColor("DONE");
          }}
          className={` w-[150px] h-[45px] ${selectedCategory === "DONE" ? "bg-[#0E172B] text-[#F3F4F5]" : "bg-[#F1F5F9] text-[#6E7482]"} rounded-[10px] text-[20px]`}
        >
          Хийх
        </button>
        <button
          onClick={() => {
            changeColor("END");
          }}
          className={` w-[150px] h-[45px] ${selectedCategory === "END" ? "bg-[#0E172B] text-[#F3F4F5]" : "bg-[#F1F5F9] text-[#6E7482]"} rounded-[10px] text-[20px]`}
        >
          Дууссан
        </button>
      </div>

      {filteredList.map((todo, index) => {
        return (
          <div
            key={todo}
            className="bg-[#f7faf8] rounded-[10px] border-none w-[500px] h-[40px] flex items-center pl-[10px] justify-between"
          >
            <input
              type="checkbox"
              onChange={(event) => {
                toggleTask(event.target.checked);
              }}
            />
            <p>{todo.title}</p>
            <button
              onClick={() => {
                deleteJob(index);
              }}
            >
              🗑️
            </button>
          </div>
        );
      })}
      {filteredList.length === 0 && <div>Ажил байхгүй байна ☺️</div>}
    </div>
  );
};
