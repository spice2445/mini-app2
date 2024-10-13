import { Button, Text } from "@telegram-apps/telegram-ui";

import { Logo } from "@/components/Logo";
import { Link } from "@/components/Link/Link.tsx";

import tonSvg from "./ton.svg";
import brandSvg from "./brand.svg";

export const Header = () => {
  return (
    <div className="uppercase justify-between flex  p-5">
      <div className="flex flex-row p-[5px] gap-[0.6rem] align-middle">
        <Logo />
        <img src={brandSvg} alt="brand" className="h-2 my-auto" />
      </div>

      <Link to="/ton-connect">
        <Button
          className=" bg-[#007aff] py-4 px-[1.2rem]"
          before={
            <img
              width={18}
              height={16}
              src={tonSvg}
              className=" bg-transparent border-none "
              alt="ton"
            />
          }
        >
          <Text caps={true} weight="1" className=" text-[0.7rem]">
            Connect wallet
          </Text>
        </Button>
      </Link>
    </div>
  );
};
