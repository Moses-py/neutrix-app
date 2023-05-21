import { MainContext } from "@/context/Main";
import Image from "next/image";
import { useContext, useState } from "react";

const BookmarkInput: React.FunctionComponent = () => {
  const [typedBookmark, setTypedBookmark] = useState("");
  const { updateBookmark } = useContext(MainContext);

  function submitBookmark(e: React.FormEvent) {
    e.preventDefault();
    if (typedBookmark !== "") {
      updateBookmark([typedBookmark]);
    }
    setTypedBookmark("");
  }
  return (
    <>
      <form onSubmit={(e) => submitBookmark(e)}>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Image
              src="/icons/useful_link.png"
              alt="useful_link_icon"
              width={20}
              height={20}
            />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
            placeholder="Add a bookmark link"
            required
            onChange={(event) => setTypedBookmark(event.target.value)}
            value={typedBookmark}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-misc hover:text-orange-400 font-semibold rounded-lg text-sm px-4 py-2 outline-none"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};
export default BookmarkInput;
