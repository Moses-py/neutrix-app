import { MainContext } from "@/context/Main";
import BookmarkBar from "./BookmarkBar";
import BookmarkInput from "./BookmarkInout";
import { useState, useContext } from "react";

const Bookmark = () => {
  const { bookmarks } = useContext(MainContext);
  let bookmarkData = [];
  for (let index = bookmarks.length - 1; index >= 0; index--) {
    bookmarkData.push(bookmarks[index]);
  }

  return (
    <>
      <div className="header pb-[2rem]">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          My Bookmarks
        </h1>
      </div>
      <div className="bookmark mb-[1rem]">
        <BookmarkInput />
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
      {bookmarkData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[2rem]">
          {bookmarkData.map((bookmark, index) => {
            return <BookmarkBar url={bookmark} key={index} identity={index} />;
          })}
        </div>
      ) : (
        <div className="container flex items-center justify-center">
          <p className="text-xs text-gray-400 italic font-secondary leading-[400px] 2xl:leading-[600px]">
            Add a new bookmark to store here...
          </p>
        </div>
      )}
    </>
  );
};

export default Bookmark;
