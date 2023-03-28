/* eslint-disable @next/next/no-img-element */

interface ArticleItemProps {
  image?: string;
  category: string;
  title: string;
  author: string;
  date: string;
  authorImage: string;
}
import Image from "next/image";
const ArticleItem: React.FunctionComponent<ArticleItemProps> = ({
  image,
  category,
  author,
  authorImage,
  date,
  title,
}) => {
  return (
    <>
      <div className="w-full h-[261px] relative bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1548003066-57718389e5c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvbW9kb3JvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')]">
        <div className="overlay absolute top-0 left-0 right-0 bg-[#111] opacity-[0.6] h-full w-full" />
        <div className="container absolute bottom-[1rem] text-textLight text[14px] px-[1.5rem]">
          <div className="category bg-green-700 my-4 w-1/3 rounded-full text-center py-2">
            <p className="text-textLight text-[14px] font-bold">{category}</p>
          </div>
          <div className="title text-sm font-secondary font-semibold">
            {title}
          </div>
          <div className="author flex flex-row gap-4 items-center">
            <div className="author_image">
              <Image
                src={`/${authorImage}`}
                alt=""
                height={30}
                width={30}
                className="rounded-full"
              />
            </div>
            <div className="author_details my-4 text-[14px]">
              <span className="author_name text-textLight font-secondary">
                {author}
              </span>
              <span className="date mx-2">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleItem;
