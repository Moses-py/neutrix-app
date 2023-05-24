import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Headertext from "@/components/typography/Headertext";
const Navbar = dynamic(() => import("@/components/navbar/Navbar"));

const Hero = () => {
  return (
    <>
      <section
        className={`${styles.hero} relative h-auto pt-[10%] md:pt-[5%] lg:pt-[3%]`}
      >
        <div className="relative">
          <Image
            className="hidden 2xl:block absolute bottom-0 left-0 "
            src="/robot-hand-finger-pointing-ai-technology-backgrou-2022-09-16-09-23-42-utc 1.webp"
            fill
            alt=""
          />
        </div>
        <div className="relative">
          <Image
            className="hidden 2xl:block absolute top-0 right-0 "
            src="/robot-hand-finger-pointing-ai-technology-backgrou-2022-09-16-09-23-42-utc 1 _1_.webp"
            fill
            alt=""
          />
        </div>

        <div className={`${styles.overlay}`} />

        {/* <div className="lg:px-[2rem] mb-[12%] md:mb-0">
          <Navbar />
        </div> */}

        <div className="px-8 lg:px-0 md:container flex flex-row items-center relative md:h-[100%] z-[5] md:mt-[2rem] lg:mt-[8%]">
          <div className="flex flex-col justify-center gap-8 my-auto w-full md:w-[75%] lg:w-[45%] 2xl:w-[35%]">
            <div className="relative">
              <div className={`${styles.box_1}`} />
              <div className={`${styles.box_2}`} />
              <div>
                <Headertext>
                  Transforming <span className="text-primary">Talents</span>{" "}
                  into <span className="text-primary">Global Excellence</span>
                </Headertext>
              </div>
            </div>
            <div>
              <p className=" text-textLight leading-24 text-sm p-0 m-0 font-secondary font-light">
                We are building job-ready digital skills that catalyze
                technological growth and achievements. We offer a targeted skill
                empowerment journey through our 1:1 live mentorship programme
                and lessons. Our lessons are continually refined and updated to
                meet the dynamic needs of our users.
              </p>
            </div>
            <div className="button">
              <Link
                className="bg-primary border-none text-sm px-12 py-3 my-3 rounded-full text-textDark font-secondary"
                href="#courses"
              >
                Explore courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
