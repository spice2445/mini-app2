import { useState } from "react";
import { data } from "./data";

export const TagList = () => {
  const [id, setId] = useState(0);

  return (
    <div className=" flex justify-center mx-auto mt-2.5">
      <div className="flex h-[22px] gap-2.5 mx-5 hyphens-none whitespace-nowrap overflow-x-scroll no-scrollbar">
        {data.map((tag, i) => (
          <button
            className={` border rounded-[50px] flex flex-nowrap  align-middle border-[#2F343D] px-6 ${
              id == i ? "bg-[#3F88F7]" : "bg-transparent"
            }`}
            key={i}
            onClick={() => {
              setId(i);
            }}
          >
            <span className="my-auto leading-3 uppercase text-[10px]">
              {tag}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
