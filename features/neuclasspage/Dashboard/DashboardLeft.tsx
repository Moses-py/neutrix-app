import Image from "next/image";
import switchArray from "@/utils/misc/switchArray";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { MainContext } from "@/context/Main";
import { useContext } from "react";
import dynamic from "next/dynamic";

const DashboardLink = dynamic(() => import("../components/link/DashboardLink"));
const Subheader = dynamic(() => import("../components/typography/Subheader"));

const DashboardLeft: React.FunctionComponent = () => {
  const { updateTab, tabSelected, updateTitle } = useContext(MainContext);

  function handleClick(tab_title: string) {
    updateTitle(tab_title);
    updateTab();
  }
  return (
    <>
      <div className=" px-[1rem] min-w-[300px] w-[1/6] pt-[1rem] h-[calc(100vh - 1rem)] md:h-[95vh] bg-white lg:bg-transparent">
        <div className="flex sm:flex-col sm:justify-start justify-between sm:items-start items-center sm:my-0 my-3">
          <Link href="/">
            <h1 className="lg:text-misc leading-36 text-sm font-primary font-bold uppercase">
              Neutrix
            </h1>
          </Link>
          <div className="logo flex flex-row gap-2 items-center mb-2">
            {/* <Image src="/triangle.webp" alt="" width={30} height={30} /> */}
            <p className="text-xs font-semibold text-center flex justify-between items-center">
              <span className="hidden lg:inline">Neuclass Dashboard</span>
            </p>
          </div>
          <span className="lg:hidden block mb-2" onClick={updateTab}>
            <CloseIcon />
          </span>
        </div>

        {/* Divider rule */}
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-3" />

        {/* DashboardLinks */}
        <div className="learning">
          {/* Leanrning Links */}
          <Subheader>Learning</Subheader>
          <div className="learning_links">
            <ul className="flex flex-col">
              <button onClick={() => handleClick("Courses")}>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/courses.webp"
                      alt="courses_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(0, tabSelected)}
                  id={0}
                >
                  Courses
                </DashboardLink>
              </button>
              <button onClick={() => handleClick("My Courses")}>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/my_courses.webp"
                      alt="my_courses_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(1, tabSelected)}
                  id={1}
                >
                  My Courses
                </DashboardLink>
              </button>
              <button onClick={() => handleClick("Bookmarks")}>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/useful_link.webp"
                      alt="useful_link_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(2, tabSelected)}
                  id={2}
                >
                  Bookmarks
                </DashboardLink>
              </button>
              <button onClick={() => handleClick("Notebook")}>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/notes.webp"
                      alt="useful_link_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(3, tabSelected)}
                  id={3}
                >
                  Notebook
                </DashboardLink>
              </button>
            </ul>
          </div>
        </div>
        <div className="billing">
          <Subheader>Billing</Subheader>
          <div className="billing_links">
            <ul className="flex flex-col">
              {/* <button onClick={() => handleClick("Cards")}>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/bank_card.webp"
                      alt="bank_card__icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(4, tabSelected)}
                  id={4}
                >
                  Cards
                </DashboardLink>
              </button> */}
              <button onClick={() => handleClick("My Plan")}>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/subscription.webp"
                      alt="subscription_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(5, tabSelected)}
                  id={5}
                >
                  My Plan
                </DashboardLink>
              </button>
            </ul>
          </div>
        </div>
        <div className="account">
          <Subheader>Account</Subheader>
          <div className="account_links">
            <ul className="flex flex-col">
              <button onClick={() => handleClick("Profile")}>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/profile.webp"
                      alt="profile_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(6, tabSelected)}
                  id={6}
                >
                  Profile
                </DashboardLink>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLeft;
