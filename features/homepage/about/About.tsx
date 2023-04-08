import ParagraphText from "@/components/typography/ParagraphText";
import Subheading from "@/components/typography/Subheading";
import Image from "next/image";
import styles from "./about.module.css";
import ValueCard from "./Value";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        id="about"
      >
        <div className="section my-[5rem] p-6 relative">
          <div
            className={`${styles.bg_about} container md:p-[4.5rem] sm:p-[2rem] p-[1rem] relative`}
          >
            <Image
              className="absolute bottom-0 left-0"
              src="/Holographic 3D shape 67 1.png"
              height={700}
              width={700}
              alt=""
            />
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="md:w-1/4 w-full my-[2rem] lg:my-0">
                <Subheading>Who we are</Subheading>
              </div>
              <div className="w-full md:w-3/4">
                <ParagraphText>
                  We are building job-ready digital skills that catalyze
                  technological growth and achievements.{" "}
                  <span className="font-bold text-textLight">Our mission</span>{" "}
                  is to empower talents through tech education.{" "}
                  <span className="font-bold text-textLight">Our vision</span>{" "}
                  is to build the most convenient education center to connect
                  talents and professionals.
                </ParagraphText>
              </div>
            </div>
            {/* Mini Heading */}
            <div className="mt-[7%] mb-[5%] lg:w-1/3 w-full">
              <h2 className="text-lg text-primary font-semibold leading-36">
                We stay true to our values and commitments.
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex lg:flex-row flex-col justify-evenly items-center lg:gap-16 gap-8"
            >
              <ValueCard title="Inspiration">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aspernatur quas consectetur facere quo exercitationem
                temporibus explicabo ut laboriosam rem.
              </ValueCard>
              <ValueCard title="Excellence">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aspernatur quas consectetur facere quo exercitationem
                temporibus explicabo ut laboriosam rem.
              </ValueCard>
              <ValueCard title="Growth and Innovation">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aspernatur quas consectetur facere quo exercitationem
                temporibus explicabo ut laboriosam rem.
              </ValueCard>
              <ValueCard title="Trust">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aspernatur quas consectetur facere quo exercitationem
                temporibus explicabo ut laboriosam rem.
              </ValueCard>
            </motion.div>
            {/* Flex core values with titles */}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
