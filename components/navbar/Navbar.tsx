import Link from "next/link";
import Button from "../button/Button";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-100 container flex flex-row justify-between items-center pt-[30px] pb-[50px] md:py-[50px] relative z-10">
        <h1 className="text-textLight leading-64 text-[36px] font-primary">
          Neutrix
        </h1>

        <nav className="hidden lg:flex flex-row justify-center items-center">
          <ul className="flex flex-row items-center justify-between font-semibold">
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="/">Home</Link>
              <hr className="w-full transition-all duration-700 ease-in-out bg-orange-400 border border-orange-400" />
            </li>
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="#about">About</Link>
            </li>
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="/">Neuclass</Link>
            </li>
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="#courses">Explore</Link>
            </li>
          </ul>
          <div className="container flex flex-row gap-4">
            <Link href="/login">
              <Button type="filled">
                <LoginIcon />
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button type="outlined">
                <VpnKeyIcon />
                Sign up
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
