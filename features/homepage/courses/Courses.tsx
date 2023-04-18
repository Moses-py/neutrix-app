import styles from "./courses.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const CourseCard = dynamic(() => import("./CourseCard"));
const Subheading = dynamic(() => import("@/components/typography/Subheading"));
const ParagraphText = dynamic(
  () => import("@/components/typography/ParagraphText")
);

interface CoursesProps {
  updateModal: () => void;
  updateId: (id: number) => void;
}

const Courses: React.FunctionComponent<CoursesProps> = ({
  updateModal,
  updateId,
}) => {
  return (
    <>
      <section id="courses" className={`${styles.bg_courses} p-[5%] relative `}>
        <div className="container rounded-lg p-4 md:p-[5%] flex lg:flex-row flex-col bg-[#121228] relative">
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
              image="data_analysis.webp"
              modal={updateModal}
              updateId={updateId}
              id={0}
            />
            <CourseCard
              title="Data Science and Machine Learning"
              content="Understand different machine learning algorithms for supervised and unsupervised learning."
              image="machine_learning.webp"
              modal={updateModal}
              updateId={updateId}
              id={1}
            />
            <CourseCard
              title="Mathematics"
              content="Learn different mathematical topics and concepts in data science and machine learning."
              image="mathematics.webp"
              modal={updateModal}
              updateId={updateId}
              id={2}
            />

            <div className="card p-6 flex flex-col gap-6 bg-[#121228] border border-primary rounded-sm relative">
              <span>
                <Image src={`/build.webp`} alt="" height={50} width={50} />
              </span>
              <Subheading>Build your curiculum</Subheading>
              <div className="mb-16">
                <ParagraphText>
                  Customise your learning journey by defining your modules
                  tailored towards your personal needs.
                </ParagraphText>
              </div>

              <div className="absolute bottom-0 mb-8 grid grid-cols-2 gap-4">
                <button className="w-full p-2 bg-primary px-4">
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
