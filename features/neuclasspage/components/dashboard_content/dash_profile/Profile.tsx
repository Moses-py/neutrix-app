import Image from "next/image";
import optimizeBg from "@/helpers/optimizeBackground";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CodeIcon from "@mui/icons-material/Code";
import EmailPref from "./EmailPref";
import LanguagePref from "./LanguagePref";
import { Tooltip } from "flowbite-react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Profile = () => {
  return (
    <>
      <div className="wrapper font-secondary">
        <div
          className={`bgImage container h-[300px] w-full bg-no-repeat bg-center bg-cover rounded-xl relative`}
          style={{ backgroundImage: `url(${optimizeBg("bg_profile")})` }}
        >
          {/* Profile bar */}
          <div className="profilebar mx-auto backdrop-blur-md bg-white/80 rounded-2xl p-[1rem] w-full relative top-[80%] left-0 border border-gray-300 shadow-lg">
            <div className="profile_pic flex items-center gap-4">
              <Image
                src="/bruce-mars.jpg"
                alt=""
                height={80}
                width={80}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-misc text-[20px] font-bold font-secondary">
                  Alec Benjamin
                </h3>
                <p className="text-gray-600 font-secondary text-xs">Student</p>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-[5rem] gap-6">
          <div className="profile_info p-6 rounded-xl bg-white/30 border border-gray-200">
            <div className="flex justify-between items-center my-2">
              <h4 className="text-sm font-bold font-misc">
                Profile information
              </h4>
              <Tooltip
                content="Edit Settings"
                className="text-xs font-secondary text-gray-900"
              >
                <button className="hover:scale-110">
                  <ManageAccountsIcon />
                </button>
              </Tooltip>
            </div>

            {/* Profile intro */}
            <p className="text-gray-500 font-secondary text-xs my-6">
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            {/* Profile details */}

            <div className="flex flex-col gap-4 text-gray-900 my-5">
              <p className="font-bold text-xs">
                Fullname:{" "}
                <span className="font-normal ml-3">Alec Benjamin</span>
              </p>
              <p className="font-bold text-xs">
                UserID: <span className="font-normal ml-3">3492842</span>
              </p>
              <p className="font-bold text-xs">
                Email:{" "}
                <span className="font-normal ml-3">AlBenjamin@laos.eu</span>
              </p>
              <p className="font-bold text-xs">
                Phone: <span className="font-normal ml-3">(907) 345 678 9</span>
              </p>
              <p className="font-bold text-xs">
                Location:{" "}
                <span className="font-normal ml-3">Paris, France</span>
              </p>
            </div>
          </div>

          {/* Platform Settings */}
          <div className="p-6 rounded-xl bg-white/30 border border-gray-200">
            <div className="flex justify-between items-center my-2">
              <h4 className="text-sm font-bold font-misc">Platform Settings</h4>
              <button className="hover:scale-110">
                <CodeIcon />
              </button>
            </div>
            {/* Email Pref */}
            <EmailPref />
            {/* Language Pref */}
            <div className="language_pref">
              <h4 className="text-xs font-bold font-misc mb-4">
                Language Preferences
              </h4>
              <span className="text-gray-400 text-xs mt-10 mb-5">
                Select your language. This language will be used for e-mails you
                receive from us and browsing our site.
              </span>

              <LanguagePref />
            </div>
          </div>

          {/* Misc */}
          <div className="profile_info p-6 rounded-xl bg-white/30 border border-gray-200">
            <div className="flex justify-between items-center my-2">
              <h4 className="text-sm font-bold font-misc">Saying Goodbye?</h4>
              <Tooltip
                content="Don't go"
                className="text-xs font-secondary text-gray-900"
              >
                <button className="hover:scale-110">
                  <SentimentVeryDissatisfiedIcon />
                </button>
              </Tooltip>
            </div>
            {/* Delete container */}
            <div className="delete-acc">
              <h4 className="text-xs font-bold font-misc my-4">
                Delete Account
              </h4>
              <span className="text-gray-400 text-xs mt-10 mb-5">
                This will remove all of your personal data forever.
              </span>
              <div>
                <button
                  type="button"
                  className="text-white bg-red hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-xs px-4 py-1.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 my-6"
                >
                  Delete my account
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Delete account */}
        <div className="delete_account"></div>
      </div>
    </>
  );
};

export default Profile;
