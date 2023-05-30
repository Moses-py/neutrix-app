import Link from "next/link";
import PasswordIcon from "@mui/icons-material/Password";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import styles from "./navbar.module.css";

const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <div
        className={`md:${styles.navbar} w-full px-8 lg:px-0 md:container flex flex-row relative justify-between items-center z-10 my-2`}
      >
        <div className="flex items-center gap-3">
          <Link href="/">
            <h1 className="lg:text-misc leading-64 text-lg font-primary font-bold uppercase">
              Neutrix
            </h1>
          </Link>
        </div>

        <nav className="hidden lg:flex flex-row justify-center items-center">
          <ul className="flex flex-row items-center justify-between">
            <li className="mx-4 text-xs font-semibold text-misc hover:cursor-default hover:text-orange">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 text-xs font-semibold text-misc hover:cursor-default hover:text-orange">
              <Link href="#about">About</Link>
            </li>
            <li className="mx-4 text-xs font-semibold text-misc hover:cursor-default hover:text-orange">
              <Link href="/neuclass">Neuclass</Link>
            </li>
            <li className="mx-4 text-xs font-semibold text-misc hover:cursor-default hover:text-orange">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-4 text-xs font-semibold text-misc hover:cursor-default hover:text-orange">
              <Link href="#courses">Explore</Link>
            </li>
            <li className="mx-2 text-xs flex items-center text-misc hover:cursor-default hover:text-orange">
              <Link href="/login" className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none font-semibold focus:ring-[#050708]/50 rounded-lg text-[13px] px-5 py-1.5 text-center inline-flex items-center  mb-2"
                >
                  <PasswordIcon className="mr-3 text-xs" />
                  sign in
                </button>
              </Link>
            </li>
            <li className="mx-4 text-xs text-misc hover:cursor-default hover:text-orange">
              <Link href="/register" className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none font-semibold focus:ring-[#050708]/50 rounded-lg text-[13px] px-5 py-1.5 text-center inline-flex items-center  mr-2 mb-2"
                >
                  <VpnKeyIcon className="mr-3 text-xs" />
                  sign up
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
