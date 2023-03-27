/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./navbar.module.css";

const MobileNav = () => {
  return (
    <>
      <input
        className={`${styles.menu_icon} z-20`}
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>
      <nav className={`${styles.nav} z-20`}>
        <ul className="pt-5">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Neuclass</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <button className="bg-textDark border-none text-md px-12 py-2 my-3 rounded-full text-textLight hover:bg-textLight hover:text-textDark uppercase font-secondary">
              Log in
            </button>
          </li>
          <li>
            <button className="bg-textDark text-md border-none px-12 py-2 my-3 rounded-full text-textLight hover:bg-textLight hover:text-textDark uppercase font-secondary">
              Sign up
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
