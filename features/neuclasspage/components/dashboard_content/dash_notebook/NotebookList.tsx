import { useState } from "react";
import SingleNote from "./SingleNote";
import optimizeBg from "@/helpers/optimizeBackground";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
        className="grid place-items-center p-5 h-[100vh]"
      >
        <div
          style={{
            backgroundImage: `url(${optimizeBg(modalData.note.image)})`,
          }}
          className={`container rounded-lg relative bg-no-repeat bg-center bg-cover w-full md:w-[80vw] lg:w-[50vw] xl:w-[30vw] h-[100%] bg-textLight overflow-y-scroll pt-[2rem] pb-[5rem]`}
        >
          <p className="my-4 font-secondary font-bold text-md break-all">
            {modalData.note.title}
          </p>
          <p className="my-4 font-secondary font-normal text-xs break-all">
            {modalData.note.content}
          </p>

          {/* Footer */}

          <div className="fixed z-50 h-auto max-w-lg -translate-x-1/2 bg-white border rounded-full border-gray-200 bottom-8 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div
              className="grid place-items-center p-2"
              onClick={() => setModalData({ note: {}, open: false })}
            >
              <span className="font-bold font-secondary">
                <CloseIcon />
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NotebookList;
