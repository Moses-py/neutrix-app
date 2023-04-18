import ParagraphText from "@/components/typography/ParagraphText";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Headertext from "@/components/typography/Headertext";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section id="footer" className="relative mt-[4.5rem] bg-[#111] py-[2rem]">
        <div className="container flex flex-col md:flex-row relative z-10 items-center text-textLight py-[2rem]">
          <div className="newsletter w-full md:w-1/3">
            <div className="footer_subheading my-3">
              <Headertext>Join our newsletter</Headertext>
            </div>
            <div className="footer_para my-5">
              <ParagraphText>
                Stay updated with news, promotional offers and everything you
                need to know
              </ParagraphText>
            </div>

            <input
              type="email"
              className="w-full border-none px-5 py-2 rounded-md outline-none placeholder:text-textDark text-textDark"
              placeholder="Email"
            />
          </div>

          <div className="footer_content w-full md:w-2/3 mt-5 md:mt-0">
            <div className="links">
              <ul className="flex sm:flex-row flex-col items-center justify-center gap-4 my-4">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Neuclass
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="social_links">
              <ul className="flex sm:flex-row flex-col items-center justify-center gap-4 my-4">
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
            <div className="copyright text-center">
              All rights reserved | Neutrix 2023
            </div>
          </div>

          {/* Newsletter */}
          {/* Footer links */}
        </div>
      </section>
    </>
  );
};

export default Footer;
