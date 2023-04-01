import Image from "next/image";
import { useState, useEffect } from "react";
import Subheader from "../components/typography/Subheader";
import DashboardLink from "../components/link/DashboardLink";
import switchArray from "@/helpers/switchArray";
interface D_left {
  setTabs: (id: number) => void;
  tabs: number;
  setTabTitle: (text: string) => void;
}

const DashboardLeft: React.FunctionComponent<D_left> = ({
  setTabs,
  tabs,
  setTabTitle,
}) => {
  return (
    <>
      <div className="container h-full min-w-[300px] w-1/6 py-[2rem]">
        <div className="logo flex flex-row gap-2 items-center mb-5">
          <Image src="/triangle.png" alt="" width={30} height={30} />
          <p className="text-xs font-semibold text-center">
            Neuclass Dashboard
          </p>
        </div>

        {/* Divider rule */}
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-5" />

        {/* DashboardLinks */}
        <div className="learning">
          {/* Leanrning Links */}
          <Subheader>Learning</Subheader>
          <div className="learning_links">
            <ul className="flex flex-col">
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/courses.png"
                      alt="courses_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(0, tabs)}
                  updateTab={setTabs}
                  title="Courses"
                  updateTitle={setTabTitle}
                  id={0}
                >
                  Courses
                </DashboardLink>
              </li>
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/my_courses.png"
                      alt="my_courses_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(1, tabs)}
                  updateTab={setTabs}
                  title="My Courses"
                  updateTitle={setTabTitle}
                  id={1}
                >
                  My Courses
                </DashboardLink>
              </li>
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/useful_link.png"
                      alt="useful_link_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(2, tabs)}
                  updateTab={setTabs}
                  title="Bookmarks"
                  updateTitle={setTabTitle}
                  id={2}
                >
                  Bookmarks
                </DashboardLink>
              </li>
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/notes.png"
                      alt="useful_link_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(3, tabs)}
                  updateTab={setTabs}
                  title="Notepad"
                  updateTitle={setTabTitle}
                  id={3}
                >
                  Notepad
                </DashboardLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="billing">
          <Subheader>Billing</Subheader>
          <div className="billing_links">
            <ul className="flex flex-col">
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/bank_card.png"
                      alt="bank_card__icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(4, tabs)}
                  updateTab={setTabs}
                  title="Cards"
                  updateTitle={setTabTitle}
                  id={4}
                >
                  Cards
                </DashboardLink>
              </li>
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/subscription.png"
                      alt="subscription_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(5, tabs)}
                  updateTab={setTabs}
                  title="My Plan"
                  updateTitle={setTabTitle}
                  id={5}
                >
                  My Plan
                </DashboardLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="account">
          <Subheader>Account</Subheader>
          <div className="account_links">
            <ul className="flex flex-col">
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/profile.png"
                      alt="profile_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(6, tabs)}
                  updateTab={setTabs}
                  title="Profile"
                  updateTitle={setTabTitle}
                  id={6}
                >
                  Profile
                </DashboardLink>
              </li>
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/settings.png"
                      alt="settings_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(7, tabs)}
                  updateTab={setTabs}
                  title="Settings"
                  updateTitle={setTabTitle}
                  id={7}
                >
                  Settings
                </DashboardLink>
              </li>
              <li>
                <DashboardLink
                  icon={
                    <Image
                      src="/icons/sign_in.png"
                      alt="login_icon"
                      width={25}
                      height={25}
                    />
                  }
                  selected={switchArray(8, tabs)}
                  updateTab={setTabs}
                  title="Sign in"
                  updateTitle={setTabTitle}
                  id={8}
                >
                  Sign in
                </DashboardLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLeft;
