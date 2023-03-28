import Link from "next/link";
import Button from "../button/Button";
import MobileNav from "./MobileNav";
const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-100 container flex flex-row justify-between items-center pt-[30px] pb-[50px] md:py-[50px] relative z-10">
        <h1 className="text-textLight leading-64 text-[36px] font-primary">
          Neutrix
        </h1>
        <div className="lg:hidden block">
          <MobileNav />
        </div>

        <nav className="hidden lg:flex flex-row justify-center items-center">
          <ul className="flex flex-row items-center justify-between">
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="/">Neuclass</Link>
            </li>
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-4 text-sm text-textLight hover:cursor-default hover:text-orange-400">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div className="container flex flex-row gap-4">
            <Button type="filled">Log in</Button>
            <Button type="outlined">Sign up</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
