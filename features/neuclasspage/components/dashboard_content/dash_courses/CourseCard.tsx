import { MainContext } from "@/context/Main";
import React, { useContext } from "react";

interface CourseCardProps {
  image?: string;
  content?: string;
  title?: string;
  updateSelect: () => void;
  syllabusView: () => void;
  updateSelectedCourse: () => void;
  updateAddCoursePopup: () => void;
  isAdded: boolean;
}

const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  image,
  content,
  title,
  updateSelect,
  syllabusView,
  updateAddCoursePopup,
  updateSelectedCourse,
  isAdded,
}) => {
  const { updateTitle, selectTab } = useContext(MainContext);
  function handleViewClick() {
    updateSelect();
    syllabusView();
  }
  function handleAddClick() {
    if (!isAdded) {
      updateSelectedCourse();
      updateAddCoursePopup();
    } else {
      updateTitle("My Courses");
      selectTab(1);
    }
  }
  return (
    <>
      <div
        className={`p-[1rem] rounded-xl relative bg-cover bg-center h-full w-full font-primary`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="absolute rounded-xl top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-misc opacity-60" />
        <div className="content text-white py-5 relative z-20">
          <h1 className="leading-24 font-secondary font-semibold text-md my-6">
            {title}
          </h1>
          <p className="my-6 w-full xl:w-1/2 font-secondary">{content}</p>
          <div className="cta flex flex-row gap-2">
            <button
              className="px-3 py-2 my-3 bg-misc rounded-md "
              onClick={handleAddClick}
            >
              {isAdded ? "View Course" : "Add Course"}
            </button>
            <button
              className="px-3 py-2 my-3 bg-textLight text-misc rounded-md text-xs "
              onClick={handleViewClick}
            >
              View syllabus
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
