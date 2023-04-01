import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";

interface BookmarkBarProps {
  url: string;
  identity: number;
  deleteItem: (id: number) => void;
}

const BookmarkBar: React.FunctionComponent<BookmarkBarProps> = ({
  url,
  identity,
  deleteItem,
}) => {
  return (
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
          className="hover:text-orange-600 text-red-600 cursor-pointer"
          onClick={() => deleteItem(identity)}
        />
      </div>
    </>
  );
};

export default BookmarkBar;
