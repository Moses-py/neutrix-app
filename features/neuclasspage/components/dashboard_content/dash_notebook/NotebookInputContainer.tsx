import { useState, useEffect } from "react";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import BackgroundImageSelector from "./BackgroundImageSelector";
import HideImageRoundedIcon from "@mui/icons-material/HideImageRounded";
import optimizeBg from "@/utils/misc/optimizeBackground";

interface NotebookInputContainerProps {
  noteList: (note) => void;
  user: string;
}

const NotebookInputContainer: React.FunctionComponent<
  NotebookInputContainerProps
> = ({ noteList, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [background, setBackground] = useState("transparent");

  const [noteInput, setNoteInput] = useState({
    email: user,
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    setNoteInput((prev) => {
      return {
        ...prev,
        image: background,
      };
    });
  }, [background]);

  function updateNoteTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setNoteInput((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  }

  function updateNoteContent(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNoteInput((prev) => {
      return {
        ...prev,
        content: e.target.value,
      };
    });
  }

  function handleSave() {
    noteList([noteInput]);
    setNoteInput({
      email: user,
      title: "",
      content: "",
      image: "",
    });
    setBackground("transparent");
    setDropdown(false);
    setIsOpen(false);
  }

  function cancel() {
    setNoteInput({
      email: user,
      title: "",
      content: "",
      image: "",
    });
    setBackground("transparent");
    setDropdown(false);
    setIsOpen(false);
  }

  return (
    <>
      <div
        className={`border border-gray-300 xl:max-w-[75%] xl:w-[75%] 2xl:max-w-[50%] 2xl:w-[50%] w-full mx-auto rounded-lg bg-no-repeat bg-cover bg-center transition ease-in-out delay-150`}
        style={{
          backgroundImage: `url(${optimizeBg(background)})`,
        }}
      >
        <div
          className={`flex flex-col gap-5 text-misc ${isOpen && "p-5"}`}
          onClick={() => setIsOpen(true)}
        >
          <input
            type="text"
            placeholder={isOpen ? "Note title" : "Type a Note..."}
            className="border-none px-3 py-2 outline-none break-all bg-transparent placeholder:text-misc"
            onClick={() => setIsOpen(false)}
            onChange={updateNoteTitle}
            value={noteInput.title}
          />
          {isOpen && (
            <textarea
              placeholder="Type a note..."
              className="border-none px-3 py-2 outline-none bg-transparent placeholder:text-misc"
              rows={5}
              onChange={updateNoteContent}
              value={noteInput.content}
            />
          )}
        </div>
        {isOpen && (
          <div className="px-[2rem]">
            <div className="relative close flex justify-between items-center py-3">
              <div className="user_pref">
                <button
                  type="button"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setDropdown(!dropdown)}
                >
                  <PaletteOutlinedIcon className="cursor-pointer" />
                </button>
              </div>
              <div className="cta">
                <button
                  className="text-misc px-4 py-2 mx-2 hover:bg-gray-300 font-secondary font-bold rounded-md"
                  onClick={cancel}
                >
                  cancel
                </button>
                <button
                  className="text-misc px-4 py-2 hover:bg-gray-300 font-secondary font-bold rounded-md"
                  onClick={handleSave}
                >
                  save
                </button>
              </div>
            </div>
            {dropdown && (
              <div
                className=" bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
                id="dropdown"
              >
                {/* Image selector */}
                <div className="flex gap-3 items-center py-3 px-3 divide-y">
                  <button onClick={() => setBackground("")}>
                    <HideImageRoundedIcon />
                  </button>

                  <button
                    onClick={() => setBackground("dash_1")}
                    className="border-none"
                  >
                    <BackgroundImageSelector background="dash_1_small" />
                  </button>
                  <button
                    onClick={() => setBackground("dash_2")}
                    className="border-none"
                  >
                    <BackgroundImageSelector background="dash_2_small" />
                  </button>

                  <button
                    onClick={() => setBackground("dash_3")}
                    className="border-none"
                  >
                    <BackgroundImageSelector background="dash_3_small" />
                  </button>
                  <button
                    onClick={() => setBackground("dash_4")}
                    className="border-none"
                  >
                    <BackgroundImageSelector background="dash_4_small" />
                  </button>

                  <button
                    onClick={() => setBackground("dash_5")}
                    className="border-none"
                  >
                    <BackgroundImageSelector background="dash_5_small" />
                  </button>
                  <button
                    onClick={() => setBackground("dash_6")}
                    className="border-none"
                  >
                    <BackgroundImageSelector background="dash_6_small" />
                  </button>
                  <button
                    onClick={() => setBackground("dash_7")}
                    className="border-none"
                  >
                    <BackgroundImageSelector background="dash_7_small" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NotebookInputContainer;
