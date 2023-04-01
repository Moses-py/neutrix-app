import React from "react";

interface IconProps {
  icon?: React.ReactNode;
}

const Icon: React.FunctionComponent<IconProps> = ({ icon }) => {
  return (
    <>
      <div
        className={`bg-white drop-shadow-lg shadow-black flex h-10 w-10 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5`}
      >
        {icon}
      </div>
    </>
  );
};

export default Icon;
