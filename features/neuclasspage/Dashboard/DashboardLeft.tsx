import Image from "next/image";
import Subheader from "../components/typography/Subheader";
import DashboardLink from "../components/link/DashboardLink";
import switchArray from "@/helpers/switchArray";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Link from "next/link";
import { MainContext } from "@/context/Main";
import { useContext } from "react";

interface D_left {
  setTabTitle: (text: string) => void;
}

const DashboardLeft: React.FunctionComponent<D_left> = ({ setTabTitle }) => {
  const { updateTab, tabSelected, selectTab } = useContext(MainContext);
  return (
    <>
      <div className=" px-[1rem] min-w-[300px] w-[1/6] pt-[1rem] h-[100vh] md:h-[95vh] bg-white lg:bg-transparent">
        <div className="flex justify-between items-center">
          <div className="logo flex flex-row gap-2 items-center mb-2">
            <Image src="/triangle.png" alt="" width={30} height={30} />
            <p className="text-xs font-semibold text-center flex justify-between items-center">
              Neuclass <span className="hidden lg:inline">Dashboard</span>
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
              <Link href="/neuclass/courses">
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/courses.png"
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
              </Link>
              <Link href="/neuclass/my_courses">
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/my_courses.png"
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
              </Link>
              <Link href="/neuclass/bookmarks">
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/useful_link.png"
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
              </Link>
              <Link href="/neuclass/notepad">
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/notes.png"
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
              </Link>
            </ul>
          </div>
        </div>
        <div className="billing">
          <Subheader>Billing</Subheader>
          <div className="billing_links">
            <ul className="flex flex-col">
              <Link href="/neuclass/cards">
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/bank_card.png"
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
              </Link>
              <Link href="/neuclass/billing">
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/subscription.png"
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
              </Link>
            </ul>
          </div>
        </div>
        <div className="account">
          <Subheader>Account</Subheader>
          <div className="account_links">
            <ul className="flex flex-col">
              <Link href="/neuclass/profile">
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/profile.png"
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
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLeft;
