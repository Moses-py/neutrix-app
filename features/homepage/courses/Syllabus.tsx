import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { syllabusList } from "./courseSyllabus";
import CheckIcon from "@mui/icons-material/Check";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  open: boolean;
  updateModal: () => void;
  syllabus: number;
}

export default function Syllabus({ open, updateModal, syllabus }: ModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={updateModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`container border border-primary w-[400px] h-[80vh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-textLight overflow-y-scroll py-[2rem]`}
        >
          <p className="my-3 text-md font-bold">Course curiculum</p>
          <ul className="">
            {syllabusList[syllabus].map((syllabusItem) => {
              return (
                <>
                  <li
                    key={syllabusList[syllabus].indexOf(syllabusItem)}
                    className="leading-32 text-xs"
                  >
                    <CheckIcon /> {syllabusItem}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        {/* <Box sx={style}>
          <div className="">
            <ul className="">
              {syllabusList[syllabus].map((syllabusItem) => {
                return (
                  <>
                    <li
                      key={syllabusList[syllabus].indexOf(syllabusItem)}
                      className="leading-32 text-xs"
                    >
                      <CheckIcon /> {syllabusItem}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </Box> */}
      </Modal>
    </div>
  );
}
