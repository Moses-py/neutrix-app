import BookmarkBar from "./BookmarkBar";
import BookmarkInput from "./BookmarkInout";
import { useState } from "react";

const Bookmark = () => {
  const [links, setLinks] = useState<string[]>([]);

  function addLink(text: string) {
    setLinks((prev) => {
      return [...prev, text];
    });
  }

  function deleteLink(id: number) {
    const filteredList = links.filter((link) => link != links[id]);
    setLinks(filteredList);
  }
  return (
    <>
      <div className="header pb-[2rem]">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          My Bookmarks
        </h1>
      </div>
      <div className="bookmark mb-[1rem]">
        <BookmarkInput submitHandler={addLink} />
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
      {links.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[2rem]">
          {links.map((link, index) => {
            return (
              <BookmarkBar
                url={link}
                key={index}
                identity={index}
                deleteItem={deleteLink}
              />
            );
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
