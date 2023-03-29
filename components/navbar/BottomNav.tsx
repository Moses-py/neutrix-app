import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./navbar.module.css";
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
        } translate-x-[-50%] h-[60px] w-[60px] rounded-full bg-primary z-[1000] flex justify-center items-center transition-all duration-[850ms] ease-in-out`}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? <CloseIcon /> : <MenuIcon />}
      </span>
      <div
        className={`box w-full ${
          openNav ? "left-0" : "left-[-100%]"
        } bg-textLight fixed bottom-0 z-[999] h-auto lg:hidden transition-all duration-[850ms] ease-in-out flex justify-center items-center py-[3rem]`}
      >
        <div className="container p-[2rem]">
          <ul className="flex flex-col justify-evenly items-center gap-4 text-textLight text-[18px]">
            <Link
              className="bg-blue-800 w-full text-center py-3 hover:bg-primary hover:text-textDark uppercase"
              href="/"
              onClick={() => setOpenNav(!openNav)}
            >
              Home
            </Link>
            <Link
              className="bg-blue-800 w-full text-center py-3 hover:bg-primary hover:text-textDark uppercase"
              href="#about"
              onClick={() => setOpenNav(!openNav)}
            >
              About
            </Link>
            <Link
              className="bg-blue-800 w-full text-center py-3 hover:bg-primary hover:text-textDark uppercase"
              href="#courses"
              onClick={() => setOpenNav(!openNav)}
            >
              Explore
            </Link>
            <Link
              className="bg-blue-800 w-full text-center py-3 hover:bg-primary hover:text-textDark uppercase"
              href="/"
              onClick={() => setOpenNav(!openNav)}
            >
              Neuclass
            </Link>
            <Link
              className="bg-blue-800 w-full text-center py-3 hover:bg-primary hover:text-textDark uppercase"
              href="/blog"
              onClick={() => setOpenNav(!openNav)}
            >
              Blog
            </Link>
            <div className=" mb-4 grid grid-cols-2 gap-4 w-full">
              <button className="w-full p-2 bg-primary text-textDark">
                Log in
              </button>

              <button className="w-full p-2 border border-primary bg-transparent text-textDark ">
                Sign up
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default BottomNav;
