import React from "react";

interface CourseCardProps {
  image?: string;
  content?: string;
  title?: string;
}

const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  image,
  content,
  title,
}) => {
  return (
    <>
      <div
        className={`p-[1rem] rounded-xl relative bg-cover bg-center h-full w-full font-secondary`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="absolute rounded-xl top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-misc opacity-60" />
        <div className="content text-white py-5 relative z-20">
          <h1 className="leading-24 font-secondary font-bold text-md my-6">
            {title}
          </h1>
          <p className="my-6 w-full xl:w-1/2">{content}</p>
          <div className="cta flex flex-row gap-4">
            <button className="px-5 py-3 my-3 bg-misc rounded-xl ">
              Add Course
            </button>
            <button className="px-5 py-3 my-3 bg-textLight border border-misc text-textDark rounded-md ">
              View syllabus
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
