import { Text } from "@telegram-apps/telegram-ui";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface FooterItemProps {
  pathname: string;
  icon: ReactNode;
  title: string;
}

export const FooterItem: FC<FooterItemProps> = ({ icon, title, pathname }) => {
  let isActive = false;

  const location = useLocation();

  if (pathname == location.pathname) isActive = true;

  return (
    <div
      className={`flex mt-2.5 flex-col ${
        isActive ? " text-[#3F88F7]" : " text-white text-"
      }`}
    >
      {icon}

      <div>
        <Text weight="1" className=" text-[10px]" caps={true}>
          {title}
        </Text>
      </div>
    </div>
  );
};
