import Subheading from "@/components/typography/Subheading";
import CourseCard from "./CourseCard";
import styles from "./courses.module.css";
import Image from "next/image";
const Courses: React.FunctionComponent = () => {
  return (
    <>
      <section className={`${styles.bg_courses} p-[5%] relative `}>
        <div className="container rounded-lg p-4 md:p-[5%] flex lg:flex-row flex-col bg-[#121228] relative">
          <Image
            className="absolute bottom-0 left-0"
            src="/Holographic 3D shape 67 1.png"
            height={500}
            width={500}
            alt=""
          />
          <div className="p-4 w-full lg:w-1/3">
            <Subheading>What we offer</Subheading>
            <div className="">
              <p className="text-md leading-28 md:text-lg md:leading-36 lg:text-xl lg:leading-56 text-slate my-6 font-light">
                Explore our array of highly advanced and neatly refined courses
              </p>
            </div>
          </div>
          <div className="course_list grid lg:grid-cols-2 gap-8 w-full lg:w-2/3">
            <CourseCard
              title="Data Analysis"
              content="Learn exploratory and predictive data analysis snd big data using Python."
              image="data_analysis.png"
            />
            <CourseCard
              title="Data Science and Machine Learning"
              content="Understand different machine learning algorithms for supervised and unsupervised learning."
              image="machine_learning.png"
            />
            <CourseCard
              title="Mathematics"
              content="Learn different mathematical topics and concepts in data science and machine learning."
              image="mathematics.png"
            />
            <CourseCard
              title="Build your curiculum"
              content="Customise your learning journey by defining your modules tailored towards your personal needs."
              image="build.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
