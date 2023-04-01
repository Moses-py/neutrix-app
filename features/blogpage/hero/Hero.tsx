import Link from "next/link";
import styles from "./hero.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Headertext from "@/components/typography/Headertext";
import HeroArticle from "./Article";

const Hero = () => {
  return (
    <>
      <section id="blog" className={`${styles.hero} pt-[1.5rem] lg:pt-[3rem]`}>
        <div className={styles.overlay} />
        <div className="container block md:hidden relative z-30">
          <h1 className="text-xl font-secondary text-textLight">Our Blog</h1>
        </div>
        <div className="hidden md:block ">
          <div className="container relative z-10">
            <div className="nav flex flex-row justify-between items-center border-b-textGrey border-b-[1px]">
              <div className="socials">
                <ul className="flex flex-row items-center justify-center gap-3 text-textLight">
                  <li>
                    <TwitterIcon />
                  </li>
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                </ul>
              </div>

              <div className="logo">
                <h1 className="text-textLight text-2xl leading-64 font-secondary">
                  Our Blog
                </h1>
              </div>

              <div className="search_input">
                <input
                  type="search"
                  className="border-none px-5 py-3 bg-transparent outline-none text-textLight placeholder:text-textLight"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="links my-8 relative z-20">
            <ul className="flex flex-row justify-center gap-[3rem] text-textLight text-sm ">
              <li className="hover:cursor-default hover:text-orange-400">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:cursor-default hover:text-orange-400">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:cursor-default hover:text-orange-400">
                <Link href="/neuclass">Neuclass</Link>
              </li>
              <li className="hover:cursor-default hover:text-orange-400">
                <Link href="/login">Login</Link>
              </li>
              <li className="hover:cursor-default hover:text-orange-400">
                <Link href="/register">Signup</Link>
              </li>
            </ul>
          </div>
        </div>

        <HeroArticle />
      </section>
    </>
  );
};

export default Hero;
