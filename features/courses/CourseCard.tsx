import Button from "@/components/button/Button";
import ParagraphText from "@/components/typography/ParagraphText";
import Subheading from "@/components/typography/Subheading";
import Image from "next/image";
interface CourseCardProps {
  title: string;
  content: string;
  image: string;
}
const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <>
      <div className="card p-6 flex flex-col gap-6 bg-[#121228] border border-primary rounded-sm relative">
        <span>
          <Image src={`/${image}`} alt="" height={50} width={50} />
        </span>
        <Subheading>{title}</Subheading>
        <div className="mb-16">
          <ParagraphText>{content}</ParagraphText>
        </div>

        <div className="absolute bottom-0 mb-8">
          <button className="w-full p-2 bg-primary ">View Syllabus</button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
