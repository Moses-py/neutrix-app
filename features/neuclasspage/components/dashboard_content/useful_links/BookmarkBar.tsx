import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import { MainContext } from "@/context/Main";
import { useContext } from "react";

interface BookmarkBarProps {
  url: string;
  identity: number;
}

const BookmarkBar: React.FunctionComponent<BookmarkBarProps> = ({ url }) => {
  const { deleteBookmark } = useContext(MainContext);

  return (
    <>
      {url && (
        <>
          <div className="flex justify-between items-center bg-misc text-white w-full  p-3 text-xs shadow-gray-400 font-secondary font-semibold rounded lg">
            <Link
              href={url}
              target="__blank"
              className="w-full break-all hover:text-orange-300"
            >
              {url}
            </Link>
            <DeleteIcon
              className="hover:text-orange text-red cursor-pointer"
              onClick={() => deleteBookmark(url)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default BookmarkBar;
