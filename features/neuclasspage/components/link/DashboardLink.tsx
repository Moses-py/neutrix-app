import Icon from "../dashIcon/Icon";

interface DashBoardLinkProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  selected: boolean;
  updateTab: (id: number) => void;
  updateTitle: (text: string) => void;
  id: number;
  title: string;
}

const DashboardLink: React.FunctionComponent<DashBoardLinkProps> = ({
  icon,
  children,
  selected,
  updateTab,
  updateTitle,
  id,
  title,
}) => {
  function handleClick() {
    updateTab(id);
    updateTitle(title);
  }
  return (
    <>
      <div
        onClick={handleClick}
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
