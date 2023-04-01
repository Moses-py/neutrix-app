import Link from "next/link";
import Image from "next/image";
import Bookmark from "../components/dashboard_content/useful_links/Bookmarks";
import DashCourses from "../components/dashboard_content/dash_courses/DashCourses";
import MyCourse from "../components/dashboard_content/dash_my_courses/MyCourse";

interface D_main {
  title: string;
}
const DashboardMain: React.FunctionComponent<D_main> = ({ title }) => {
  return (
    <>
      <div className="h-full w-full">
        <div className="lg:px-0 sm:px-[2rem] px-[1rem] mb-5">
          <div className="dashnav flex flex-row justify-between items-center lg:pr-[2rem]">
            <div className="dash_route">
              <span className="text-gray-400 font-light font-secondary">
                Neuclass
              </span>
              <span className="mx-1">/</span>
              <span className="font-semibold">{title}</span>
            </div>
            <div className="dash_links">
              <ul className="text-d_main font-semibold flex flex-row justify-evenly gap-[1rem]">
                <li className="hidden sm:block">
                  <Link href="/" className="">
                    Home
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link href="/blog" className="">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="flex flex-row items-center justify-evenly gap-1"
                  >
                    <span className="text-gray-400">John Doe</span>
                    <Image
                      src="/icons/signed_in.png"
                      alt="signed_in_icon"
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <Image
                      src="/icons/settings.png"
                      alt="settings_icon"
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="font-bold uppercase leading-36">{title}</h2>
        </div>
        {/* <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent my-6" /> */}
        {/* Dashboard contents */}
        <div className="dash_contents py-6 lg:px-0 sm:px-[2rem] px-[1rem]">
          {title === "Courses" && <DashCourses />}
          {title === "My Courses" && <MyCourse />}
          {title === "Bookmarks" && <Bookmark />}
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
