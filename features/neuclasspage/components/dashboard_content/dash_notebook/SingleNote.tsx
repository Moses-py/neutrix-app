import optimizeBg from "@/utils/misc/optimizeBackground";

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
  return (
    <>
      {content && (
        <div
          onClick={() => updateModal(id)}
          className={`w-full rounded-lg inline-block h-auto cursor-pointer p-[1rem] border border-gray-300 hover:scale-105 transition-all ease-in-out duration-300 bg-center bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `${image && `url(${optimizeBg(image)})`}`,
          }}
        >
          {title && (
            <h3 className="font-bold text-sm font-secondary my-4 break-all text-textDark">
              {title}
            </h3>
          )}

          {content ? (
            <p className="font-xs font-primary my-2 break-all">
              {content.substring(0, 350)}...
            </p>
          ) : (
            <p className="text-md font-secondary">Empty Note</p>
          )}
        </div>
      )}
    </>
  );
};

export default SingleNote;
