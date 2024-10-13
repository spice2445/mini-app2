import { Achievement } from "@/components/Achievement";
import { data } from "./data";

export const AchievementList = () => {
  return (
    <div className=" mx-2.5 flex justify-center align-middle flex-col gap-4 pb-20">
      {data.map((a, i) => (
        <Achievement key={i} title={a.title} reward={a.reward} />
      ))}
    </div>
  );
};
