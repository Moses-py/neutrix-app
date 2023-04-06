import { useState } from "react";
import SingleNote from "./SingleNote";
import optimizeBg from "@/helpers/optimizeBackground";
import { Modal } from "@mui/material";

interface NotebookListProps {
  notes: {
    title?: string;
    content?: string;
    image?: string;
  }[];
}

interface ModalProps {
  note: {
    title?: string;
    content?: string;
    image?: string;
  };
  open: boolean;
}
const NotebookList: React.FunctionComponent<NotebookListProps> = ({
  notes,
}) => {
  const [modalData, setModalData] = useState<ModalProps>({
    note: { title: "", content: "", image: "" },
    open: false,
  });

  let noteData: [{ title?: string; content?: string; image?: string }] = [{}];

  for (let index = notes.length - 1; index >= 0; index--) {
    noteData.push(notes[index]);
  }

  function updateModal(id: number) {
    let modalNote: {
      title?: string;
      content?: string;
      image?: string;
    } = { ...noteData[id] };
    setModalData({ note: modalNote, open: true });
  }

  return (
    <>
      <div className="lg:container grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-[3rem] ">
        {noteData &&
          noteData.map((note) => {
            return (
              <SingleNote
                key={noteData.indexOf(note)}
                id={noteData.indexOf(note)}
                title={note.title}
                content={note.content}
                image={note.image}
                updateModal={updateModal}
              />
            );
          })}
      </div>
      <Modal
        open={modalData.open}
        onClose={() => setModalData({ note: {}, open: false })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="mx-5">
          <div
            style={{
              backgroundImage: `url(${optimizeBg(modalData.note.image)})`,
            }}
            className={`container border border-primary md:w-auto w-[90vw] h-[60vh] lg:h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-textLight overflow-y-scroll py-[2rem]`}
          >
            <p className="my-4 font-secondary font-bold text-md">
              {modalData.note.title}
            </p>
            <p className="my-4 font-secondary font-normal text-xs">
              {modalData.note.content}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NotebookList;
