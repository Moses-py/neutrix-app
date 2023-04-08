import { useState } from "react";
import NotebookInputContainer from "./NotebookInputContainer";
import NotebookList from "./NotebookList";

const Notebook: React.FunctionComponent = () => {
  const [notelist, setNoteList] = useState([{}]);
  return (
    <>
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
