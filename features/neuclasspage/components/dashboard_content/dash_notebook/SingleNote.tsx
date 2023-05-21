import { MainContext } from "@/context/Main";
import optimizeBg from "@/utils/misc/optimizeBackground";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useContext } from "react";

export interface SingleNoteProps {
  title?: string;
  content?: string;
  image?: string;
  id: number;
  updateModal: (id: number) => void;
}

const SingleNote: React.FunctionComponent<SingleNoteProps> = ({
  title,
  content,
  image,
  id,
  updateModal,
}) => {
  const { deleteNote } = useContext(MainContext);
  return (
    <>
      {content && (
        <div
          className={`relative w-full rounded-lg inline-block sm:h-[220px] h-auto cursor-pointer p-[1rem] border border-gray-300 hover:scale-105 transition-all ease-in-out duration-300 bg-center bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `${image && `url(${optimizeBg(image)})`}`,
          }}
        >
          <div onClick={() => updateModal(id)} className="mb-8 sm:mb-0">
            {title && (
              <h3 className="font-bold text-sm font-secondary my-4 break-all text-textDark">
                {title}
              </h3>
            )}

            {content ? (
              <p className="font-xs font-primary my-2 break-word">
                {content.substring(0, 100)}...
              </p>
            ) : (
              <p className="text-md font-secondary">Empty Note</p>
            )}
          </div>

          <div className="absolute z-50 bottom-2 right-2 flex justify-end items-center">
            <DeleteForeverIcon
              className="text-red text-lg"
              onClick={() => deleteNote(title)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleNote;
