import React, { useState } from "react";
import syllabusList from "@/features/homepage/courses/courseSyllabus";
import CloseIcon from "@mui/icons-material/Close";
interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  updateSelected: number;
}

const CurriculumModal: React.FunctionComponent<CurriculumModalProps> = ({
  isOpen,
  onClose,
  updateSelected,
}) => {
  return (
    <div
      className={`backdrop-blur-lg bg-gray-300/30 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden flex justify-center items-center overflow-y-auto md:inset-0 h-[calc(100%)]`}
    >
      <div className="h-[550px]">
        <div className="overflow-y-auto h-full relative">
          <div
            className=" bg-gray-100  border border-black"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="relative px-6 py-4">
              <h2
                className="text-black font-bold text-sm w-5/6 px-4 my-3"
                id="modal-headline"
              >
                Data Science & Machine Learning Curriculum
              </h2>
              <button className="absolute top-4 right-4" onClick={onClose}>
                <CloseIcon />
              </button>

              <ul className="space-y-2">
                {syllabusList[updateSelected].map((syllabus) => {
                  return (
                    <>
                      <li
                        key={syllabusList[1].indexOf(syllabus)}
                        className="bg-gray-100 py-1 px-4 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-300"
                      >
                        {syllabus}
                      </li>
                      <hr />
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumModal;
