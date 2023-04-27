import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { MainContext } from "@/context/Main";
import { useContext } from "react";
import dynamic from "next/dynamic";

const Bookmark = dynamic(
  () => import("../components/dashboard_content/useful_links/Bookmarks")
);
const DashCourses = dynamic(
  () => import("../components/dashboard_content/dash_courses/DashCourses")
);
const MyCourse = dynamic(
  () => import("../components/dashboard_content/dash_my_courses/MyCourse")
);
const Notebook = dynamic(
  () => import("../components/dashboard_content/dash_notebook/Notebook")
);
const Subscription = dynamic(
  () => import("../components/dashboard_content/dash_plans/Subscription")
);
const Profile = dynamic(
  () => import("../components/dashboard_content/dash_profile/Profile")
);
const BankCard = dynamic(
  () => import("../components/dashboard_content/dash_card/BankCard")
);

interface D_main {
  data: {
    first_name: string;
    last_name: string;
    email: string;
    _id: string;
  };
}

const DashboardMain: React.FunctionComponent<D_main> = ({ data }) => {
  const { updateTab, title } = useContext(MainContext);
  return (
    <>
      <div className="h-[95vh] w-full min-h-0 flex flex-col">
        <div className="lg:px-0 sm:px-[2rem] px-[1rem] flex-0">
          <div className="flex flex-row justify-between items-center lg:pr-[2rem]">
            <div className="dash_route">
              <span className="text-gray-400 font-light font-secondary">
                Neuclass
              </span>
              <span className="mx-1">/</span>
              <span className="font-semibold">{title}</span>
            </div>
            <div className="dash_links">
              <ul className="text-d_main font-semibold flex flex-row justify-evenly gap-[1rem]">
                <li className="block">
                  <Link href="/" className="">
                    Home
                  </Link>
                </li>
                <li>
                  <p className="flex flex-row items-center justify-evenly gap-1">
                    <span className="text-gray-400">
                      {`${data.first_name} ${data.last_name}`}
                    </span>
                    <Image
                      src="/icons/signed_in.webp"
                      alt="signed_in_icon"
                      width={25}
                      height={25}
                    />
                  </p>
                </li>
                <li className="lg:hidden block" onClick={updateTab}>
                  <MenuIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Dashboard contents */}
        <div className="pb-[3rem] pt-[1rem] lg:px-0 sm:px-[2rem] px-[1rem] flex-1 overflow-y-scroll relative">
          {title === "Courses" && <DashCourses />}
          {title === "My Courses" && <MyCourse />}
          {title === "Bookmarks" && <Bookmark />}
          {title === "Notebook" && <Notebook />}
          {title === "My Plan" && <Subscription />}
          {title === "Profile" && <Profile data={data} />}
          {title === "Cards" && <BankCard />}
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
