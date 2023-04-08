import { useState } from "react";
import NotebookInputContainer from "./NotebookInputContainer";
import NotebookList from "./NotebookList";

const Notebook: React.FunctionComponent = () => {
  const [notelist, setNoteList] = useState([{}]);
  return (
    <>
      <div className="header pb-[2rem]">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          My Notes
        </h1>
      </div>
      <NotebookInputContainer
        noteList={(notes) =>
          setNoteList((prev) => {
            return [...prev, notes];
          })
        }
      />
      <div className="list relative">
        <NotebookList notes={notelist} />
      </div>
    </>
  );
};

export default Notebook;
