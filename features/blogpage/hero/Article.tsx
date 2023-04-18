import BottomNav from "@/components/navbar/BottomNav";
import Image from "next/image";
import ArticleItem from "./ArticleItem";

const HeroArticle = () => {
  return (
    <>
      <section id="blogHero">
        <div
          className={`container h-[522px] flex flex-col lg:flex-row mt-[4rem]`}
        >
          <div className="featuredItem h-[522px] w-full lg:w-[66.66666%] relative bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')] bg-no-repeat bg-cover bg-center">
            <div className="overlay absolute top-0 left-0 right-0 bg-[#111] opacity-[0.6] z-10 h-full w-full" />

            <div className="container absolute bottom-[1rem] text-textLight text[14px] px-[1.5rem] z-20">
              <div className="category bg-green-700 my-4 w-1/5 rounded-full text-center py-2">
                <p className="text-textLight text-[14px] font-bold">Music</p>
              </div>
              <div className="title text-sm font-secondary font-semibold">
                What Your Music Preference Says About You and Your Personality.
              </div>
              <div className="author flex flex-row gap-4 items-center">
                <div className="author_image">
                  <Image
                    src="/peace.JPG"
                    alt=""
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </div>
                <div className="author_details my-4 text-[14px]">
                  <span className="author_name text-textLight font-secondary">
                    John Doe
                  </span>
                  <span className="date mx-2">December 30 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="latestItem flex flex-col md:flex-row lg:flex-col w-full lg:w-[33.333%]">
            <ArticleItem
              image={
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              }
              category={"Technology"}
              title={
                "Python Programming: The very fundamentals of IOT and Machine Learning"
              }
              author={"Mark Wahlberg"}
              date={"January 12, 2022"}
              authorImage={"peace.JPG"}
            />
            <div className="hidden lg:block">
              <ArticleItem
                image={
                  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                category={"Art"}
                title={"Art: The secrets of the brush"}
                author={"Henry Cavil"}
                date={"July 15, 2022"}
                authorImage={"Sambaz.jpg"}
              />
            </div>
          </div>
        </div>
        <BottomNav />
      </section>
    </>
  );
};

export default HeroArticle;
