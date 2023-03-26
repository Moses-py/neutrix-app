import Button from "@/components/button/Button";
import Navbar from "@/components/navbar/Navbar";
import Headertext from "@/components/typography/Headertext";
import ParagraphText from "@/components/typography/ParagraphText";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero: React.FunctionComponent = () => {
  return (
    <>
      <section className={`${styles.hero} relative`}>
        <Image
          className="hidden 2xl:block absolute bottom-0 left-0 "
          src="/robot-hand-finger-pointing-ai-technology-backgrou-2022-09-16-09-23-42-utc 1.png"
          height={300}
          width={300}
          alt=""
        />
        <Image
          className="hidden 2xl:block absolute top-0 right-0 "
          src="/robot-hand-finger-pointing-ai-technology-backgrou-2022-09-16-09-23-42-utc 1 (1).png"
          height={300}
          width={300}
          alt=""
        />
        <Navbar />
        <div className={`${styles.overlay}`} />

        <div className="container flex flex-row items-center relative z-10 lg:pt-[4rem] pb-[4rem] sm:mb-0">
          <div className="flex flex-col justify-center gap-8 my-auto w-full md:w-[75%] lg:w-[45%] 2xl:w-[35%]">
            <div className="relative">
              <div className={`${styles.box_1}`} />
              <div className={`${styles.box_2}`} />
              <Headertext>
                Transforming <span className="text-primary">Talents</span> into{" "}
                <span className="text-primary">Global Excellence</span>
              </Headertext>
            </div>
            <div>
              <ParagraphText>
                We are building job-ready digital skills that catalyze
                technological growth and achievements. We offer a targeted skill
                empowerment journey through our 1:1 live mentorship programme
                and lessons. Our lessons are continually refined and updated to
                meet the dynamic needs of our users.
              </ParagraphText>
            </div>
            <div className="button">
              <Button type="filled">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;