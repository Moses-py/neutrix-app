import Link from "next/link";
import Image from "next/image";
import Bookmark from "../components/dashboard_content/useful_links/Bookmarks";
import DashCourses from "../components/dashboard_content/dash_courses/DashCourses";
import MyCourse from "../components/dashboard_content/dash_my_courses/MyCourse";
import MenuIcon from "@mui/icons-material/Menu";
import Notebook from "../components/dashboard_content/dash_notebook/Notebook";

interface D_main {
  title: string;
  setOpenTab: () => void;
}

const DashboardMain: React.FunctionComponent<D_main> = ({
  title,
  setOpenTab,
}) => {
  return (
    <>
      <div className="h-[100vh] w-full min-h-0 flex flex-col">
        <div className="lg:px-0 sm:px-[2rem] px-[1rem] flex-0">
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
                {/* <li className="hidden sm:block">
                  <Link href="/" className="">
                    Home
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link href="/blog" className="">
                    Blog
                  </Link>
                </li> */}
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
                <li onClick={setOpenTab}>
                  <MenuIcon />
                </li>
              </ul>
            </div>
          </div>
          <h2 className="font-bold uppercase leading-36">{title}</h2>
        </div>
        {/* Dashboard contents */}
        <div className="dash_contents py-3 lg:px-0 sm:px-[2rem] px-[1rem] flex-1 overflow-y-scroll">
          {title === "Courses" && <DashCourses />}
          {title === "My Courses" && <MyCourse />}
          {title === "Bookmarks" && <Bookmark />}
          {title === "Notebook" && <Notebook />}
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
