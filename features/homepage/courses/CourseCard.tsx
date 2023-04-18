import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const Subheading = dynamic(() => import("@/components/typography/Subheading"));
const ParagraphText = dynamic(
  () => import("@/components/typography/ParagraphText")
);

interface CourseCardProps {
  title: string;
  content: string;
  image: string;
  modal: () => void;
  updateId: (id: number) => void;
  id: number;
}
const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  title,
  content,
  image,
  id,
  modal,
  updateId,
}) => {
  function handleClick() {
    updateId(id);
    modal();
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="card p-6 flex flex-col h-auto gap-6 bg-[#121228] border border-primary rounded-sm relative"
      >
        <span className="relative h-[50px] w-[50px] object-cover object-center">
          <Image src={`/${image}`} alt="logo" fill />
        </span>
        <Subheading>{title}</Subheading>
        <div className="mb-16">
          <ParagraphText>{content}</ParagraphText>
        </div>

        <div className="md:absolute lg:relative xl:absolute bottom-0 mb-8 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 text-center gap-2">
          <button onClick={handleClick} className="w-full p-2 bg-primary ">
            View Syllabus
          </button>

          <button className="w-full p-2 border border-primary bg-transparent text-textLight ">
            Download Syllabus
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default CourseCard;
