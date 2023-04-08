import { motion } from "framer-motion";
import Image from "next/image";
interface TestimonialCardProps {
  bg: boolean;
  image: string;
  name: string;
  position: string;
}
const TestimonialCard: React.FunctionComponent<TestimonialCardProps> = ({
  bg,
  image,
  name,
  position,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`lg:container w-100 px-4 py-8 sm:rounded-full ${
          bg ? "bg-primary" : "border border-primary"
        }`}
      >
        <div className="content flex flex-col sm:flex-row gap-4 items-start md:items-center justify-center">
          <Image
            src={`/${image}`}
            alt=""
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="details">
            <p className="text-xs leading-24 my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              numquam inventore tempore asperiores quos repudiandae harum modi
              non amet error.
            </p>
            <span className="author text-xs font-bold my-2">{name}</span>
            <p className="author text-xs font-normal ">{position}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TestimonialCard;
