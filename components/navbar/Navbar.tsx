import Link from "next/link";
import Image from "next/image";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import styles from "./navbar.module.css";

const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <div
        className={`md:${styles.navbar} w-100 lg:bg-textLight container flex flex-row relative justify-between items-center z-10 rounded-full lg:border-[0.5px] lg:border-[#61616154]`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-textLight w-[50px] h-[50px] rounded-full p-1">
            <Image src="/triangle.webp" alt="" width={50} height={50} />
          </div>
          <h1 className="text-textLight lg:text-textDark leading-64 text-md font-primary">
            Neutrix
          </h1>
        </div>

        <nav className="hidden lg:flex flex-row justify-center items-center">
          <ul className="flex flex-row items-center justify-between font-semibold">
            <li className="mx-4 text-sm text-textDark hover:cursor-default hover:text-orange">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 text-sm text-textDark hover:cursor-default hover:text-orange">
              <Link href="#about">About</Link>
            </li>
            <li className="mx-4 text-sm text-textDark hover:cursor-default hover:text-orange">
              <Link href="/neuclass/courses">Neuclass</Link>
            </li>
            <li className="mx-4 text-sm text-textDark hover:cursor-default hover:text-orange">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-4 text-sm text-textDark hover:cursor-default hover:text-orange">
              <Link href="#courses">Explore</Link>
            </li>
            <li className="mx-4 text-sm text-textDark hover:cursor-default hover:text-orange">
              <Link href="/login" className="flex items-center gap-2">
                <LoginIcon />
                Log in
              </Link>
            </li>
            <li className="mx-4 text-sm text-textDark hover:cursor-default hover:text-orange">
              <Link href="/register" className="flex items-center gap-2">
                <VpnKeyIcon />
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
