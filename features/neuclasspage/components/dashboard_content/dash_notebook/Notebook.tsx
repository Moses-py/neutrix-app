import { useContext, useState } from "react";
import NotebookInputContainer from "./NotebookInputContainer";
import NotebookList from "./NotebookList";
import { MainContext } from "@/context/Main";

const Notebook = ({ user }) => {
  const { noteList, updateNote } = useContext(MainContext);
  return (
    <>
      <div className="header pb-[2rem]">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          My Notes
        </h1>
      </div>
      <NotebookInputContainer
        noteList={(notes) => updateNote(notes)}
        user={user}
      />
      <div className="list relative">
        {noteList.length > 0 ? (
          <>
            <NotebookList notes={noteList} />
          </>
        ) : (
          <>
            <div className="container flex items-center justify-center">
              <p className="text-xs text-gray-400 italic font-secondary leading-[400px] 2xl:leading-[600px]">
                No new notes...
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Notebook;
