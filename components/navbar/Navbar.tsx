import Link from "next/link";
import PasswordIcon from "@mui/icons-material/Password";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import styles from "./navbar.module.css";

const Navbar: React.FunctionComponent = () => {
  return (
    <div className="bg-black text-white py-4">
      <div
        className={`md:${styles.navbar} bg-black w-full px-8 lg:px-0 md:container flex flex-row relative justify-between items-center z-10`}
      >
        <div className="flex items-center gap-3">
          <h1 className="leading-64 text-lg font-primary font-bold uppercase">
            Neutrix
          </h1>
        </div>

        <nav className="hidden lg:flex flex-row justify-center items-center">
          <ul className="flex flex-row items-center justify-between">
            <li className="mx-4 text-sm hover:cursor-default hover:text-orange">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 text-sm hover:cursor-default hover:text-orange">
              <Link href="#about">About</Link>
            </li>
            <li className="mx-4 text-sm hover:cursor-default hover:text-orange">
              <Link href="/neuclass">Neuclass</Link>
            </li>
            <li className="mx-4 text-sm hover:cursor-default hover:text-orange">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-4 text-sm hover:cursor-default hover:text-orange">
              <Link href="#courses">Explore</Link>
            </li>
            <li className="mx-2 text-sm hover:cursor-default hover:text-orange">
              <Link href="/login" className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-black bg-white hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 rounded-lg text-xs px-5 py-1.5 text-center inline-flex items-center  mb-2"
                >
                  <PasswordIcon className="mr-3 text-xs" />
                  Sign in
                </button>
              </Link>
            </li>
            <li className="mx-4 text-sm hover:cursor-default hover:text-orange">
              <Link href="/register" className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-black bg-white hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 rounded-lg text-xs px-5 py-1.5 text-center inline-flex items-center  mr-2 mb-2"
                >
                  <VpnKeyIcon className="mr-3 text-xs" />
                  Sign up
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
