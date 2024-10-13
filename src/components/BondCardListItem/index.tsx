import { Progress } from "@telegram-apps/telegram-ui";
import { FC } from "react";

import star from "./star.svg";
import point from "./point.svg";

type status = "active" | "finished";

export interface BondCardProps {
  name: string;
  rating: number;
  status: status;
  progress: number;
  collected: number;
}

export const BondCardListItem: FC<BondCardProps> = ({
  name,
  rating,
  status,
  progress,
  collected,
}) => {
  return (
    <div className="border border-[#387AFF] w-[335px] h-[84px] mt-5 px-[15px] py-[10px] uppercase font-bold text-[8px]  rounded-[15px] bg-[#282F43]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <div className="flex align-super">
            <div>{name}</div>
            <div className="  border-l border-r flex gap-1 px-2 mx-2">
              {rating}
              <img
                src={star}
                width={11}
                className=" -translate-y-[1px]"
                height={11}
              />
            </div>
            <div>{progress}% collected</div>
          </div>
          <div className="flex gap-[6px]">
            <img src={point} />
            {status}
          </div>
        </div>
        <div>
          <Progress className=" rounded-full h-2.5" value={progress} />
        </div>
        <div className="flex justify-between">
          <div className=" flex">
            <div className=" border-r pr-2 mr-2">% APR</div> Time
          </div>
          <div>{collected} tston</div>
        </div>
      </div>
    </div>
  );
};
