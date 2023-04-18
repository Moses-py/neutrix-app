import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar/Navbar"));
const Headertext = dynamic(() => import("@/components/typography/Headertext"));

const Hero: React.FunctionComponent = () => {
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

        <div className="lg:px-[2rem] mb-[12%] md:mb-0">
          <Navbar />
        </div>

        <motion.div className="container flex flex-row items-center relative md:h-[100%] z-[5] md:mt-[2rem] lg:mt-[8%]">
          <div className="flex flex-col justify-center gap-8 my-auto w-full md:w-[75%] lg:w-[45%] 2xl:w-[35%]">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={`${styles.box_1}`}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={`${styles.box_2}`}
              />
              <motion.div
                initial={{ y: 100, opacity: 0.1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Headertext>
                  Transforming <span className="text-primary">Talents</span>{" "}
                  into <span className="text-primary">Global Excellence</span>
                </Headertext>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="md:text-slate text-textLight leading-24 text-sm p-0 m-0 font-secondary font-light">
                We are building job-ready digital skills that catalyze
                technological growth and achievements. We offer a targeted skill
                empowerment journey through our 1:1 live mentorship programme
                and lessons. Our lessons are continually refined and updated to
                meet the dynamic needs of our users.
              </p>
            </motion.div>
            <motion.div
              className="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                className="bg-primary border-none text-sm px-12 py-2 my-3 rounded-full text-textDark font-secondary"
                href="#courses"
              >
                Explore courses
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
