import { MainContext } from "@/context/Main";
import { useContext } from "react";
import Icon from "../dashIcon/Icon";

interface DashBoardLinkProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  selected: boolean;
  id: number;
}

const DashboardLink: React.FunctionComponent<DashBoardLinkProps> = ({
  icon,
  children,
  selected,
  id,
}) => {
  const { selectTab } = useContext(MainContext);

  return (
    <>
      <div
        onClick={() => selectTab(id)}
        className={`flex flex-row items-center gap-2 text-[15px] cursor-pointer ${
          selected ? "text-white" : "text-[#344767]"
        } font-secondary p-3 shadow-gray-400 ${
          selected && "bg-misc rounded-lg"
        }`}
      >
        <Icon icon={icon} />
        {children}
      </div>
    </>
  );
};

export default DashboardLink;
