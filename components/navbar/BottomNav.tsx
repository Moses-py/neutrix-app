import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ExploreIcon from "@mui/icons-material/Explore";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import Link from "next/link";

const BottomNav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      {/* nav toggle */}
      <span
        className={`lg:hidden fixed bottom-5 ${
          openNav ? "left-[90%]" : "left-[50%]"
        } translate-x-[-50%] h-[60px] w-[60px] rounded-full bg-[#121228] z-[1000] flex justify-center items-center transition-all duration-[850ms] ease-in-out`}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <CloseIcon sx={{ color: "#fff" }} />
        ) : (
          <MenuIcon sx={{ color: "#fff" }} />
        )}
      </span>
      <div
        className={`box w-full ${
          openNav ? "left-0" : "left-[-100%]"
        } bg-textLight fixed bottom-0 z-[999] h-auto lg:hidden transition-all duration-[850ms] ease-in-out flex justify-center items-center py-[3rem]`}
      >
        <div className="container p-[2rem]">
          <ul className="flex flex-col justify-evenly items-center w-full gap-4 text-textLight text-[18px]">
            <li className="w-full">
              <Link
                className="bg-[#121228] rounded-md flex items-center gap-2 w-full px-5 py-2 hover:bg-primary hover:text-textDark uppercase"
                href="/"
                onClick={() => setOpenNav(!openNav)}
              >
                <HomeIcon />
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="bg-[#121228] rounded-md flex items-center gap-2 w-full px-5 py-2 hover:bg-primary hover:text-textDark uppercase"
                href="#about"
                onClick={() => setOpenNav(!openNav)}
              >
                <InfoIcon />
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="bg-[#121228] rounded-md flex items-center gap-2 w-full px-5 py-2 hover:bg-primary hover:text-textDark uppercase"
                href="#courses"
                onClick={() => setOpenNav(!openNav)}
              >
                <ExploreIcon />
                Explore
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="bg-[#121228] rounded-md flex items-center gap-2 w-full px-5 py-2 hover:bg-primary hover:text-textDark uppercase"
                href="/neuclass"
                onClick={() => setOpenNav(!openNav)}
              >
                <SchoolIcon />
                Neuclass
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="bg-[#121228] rounded-md flex items-center gap-2 w-full px-5 py-2 hover:bg-primary hover:text-textDark uppercase"
                href="/blog"
                onClick={() => setOpenNav(!openNav)}
              >
                <RssFeedIcon />
                Blog
              </Link>
            </li>
          </ul>
          <div className=" mb-4 grid grid-cols-2 gap-4 w-full my-3">
            <Link
              href="/login"
              className="w-full flex items-center justify-center gap-2 p-2 bg-[#121228] text-textLight text-center"
            >
              <LoginIcon />
              Log in
            </Link>

            <Link
              href="/register"
              className="w-full flex items-center gap-2 justify-center p-2 border border-[#121228] bg-transparent text-textDark text-center"
            >
              <VpnKeyIcon />
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default BottomNav;
