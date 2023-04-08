import Link from "next/link";
import Image from "next/image";
import Bookmark from "../components/dashboard_content/useful_links/Bookmarks";
import DashCourses from "../components/dashboard_content/dash_courses/DashCourses";
import MyCourse from "../components/dashboard_content/dash_my_courses/MyCourse";
import MenuIcon from "@mui/icons-material/Menu";
import Notebook from "../components/dashboard_content/dash_notebook/Notebook";
import Subscription from "../components/dashboard_content/dash_plans/Subscription";
import Footer from "@/features/homepage/footer/Footer";
import Profile from "../components/dashboard_content/dash_profile/Profile";
import BankCard from "../components/dashboard_content/dash_card/BankCard";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="h-[95vh] w-full min-h-0 flex flex-col"
      >
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
                <li className="lg:hidden block" onClick={setOpenTab}>
                  <MenuIcon />
                </li>
              </ul>
            </div>
          </div>
          <h2 className="font-bold uppercase leading-36">{title}</h2>
        </div>
        {/* Dashboard contents */}
        <div className="pb-[3rem] pt-[1rem] lg:px-0 sm:px-[2rem] px-[1rem] flex-1 overflow-y-scroll relative">
          {title === "Courses" && <DashCourses />}
          {title === "My Courses" && <MyCourse />}
          {title === "Bookmarks" && <Bookmark />}
          {title === "Notebook" && <Notebook />}
          {title === "My Plan" && <Subscription />}
          {title === "Profile" && <Profile />}
          {title === "Cards" && <BankCard />}
        </div>
      </motion.div>
    </>
  );
};

export default DashboardMain;
