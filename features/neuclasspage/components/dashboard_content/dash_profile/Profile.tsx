import Image from "next/image";
import optimizeBg from "@/utils/misc/optimizeBackground";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Tooltip } from "flowbite-react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useState } from "react";
import UpdateUserDataModal from "./UpdateUserDataModal";
import DeleteUserModal from "./DeleteUserModal";

interface ProfileInterface {
  data: {
    email: string;
    first_name: string;
    last_name: string;
    id: string;
    phonenumber: string;
    username: string;
  };
}

const Profile: React.FunctionComponent<ProfileInterface> = ({ data }) => {
  const { email, last_name, first_name, id, phonenumber } = data;
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <>
      <div className="wrapper font-secondary relative">
        {modalOpen && (
          <UpdateUserDataModal
            onClose={() => setModalOpen(false)}
            user={data}
            open={modalOpen}
          />
        )}
        <DeleteUserModal
          open={deleteModalOpen}
          close={() => setDeleteModalOpen(false)}
          user={data.email}
        />
        <div
          className={`bgImage container h-[300px] w-full bg-no-repeat bg-center bg-cover rounded-xl relative`}
          style={{ backgroundImage: `url(${optimizeBg("bg_profile")})` }}
        >
          {/* Profile bar */}
          <div className="profilebar mx-auto backdrop-blur-md bg-white/80 rounded-2xl p-[1rem] w-full relative top-[80%] left-0 border border-gray-300 shadow-lg">
            <div className="profile_pic flex items-center gap-4">
              <div className="h-[80px] w-[80px] rounded-lg border border-gray-300 flex justify-center items-center">
                <h1 className="font-primary tracking-tighter font-bold text-lg text-gray-500">{`${first_name[0]} ${last_name[0]}`}</h1>
              </div>
              <div>
                <h3 className="text-misc text-[20px] font-semibold font-secondary">
                  {`${first_name} ${last_name}`}
                </h3>
                <p className="text-gray-600 font-secondary text-xs">Student</p>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="lg:container grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mt-[5rem] gap-6 ">
          <div className="profile_info p-6 rounded-xl bg-white/30 border border-gray-200 w-full">
            <div className="flex justify-between items-center my-2">
              <h4 className="text-sm font-semibold font-misc">
                Profile information
              </h4>
              <Tooltip
                content="Edit Settings"
                className="text-xs font-secondary text-gray-900"
              >
                <button
                  className="hover:scale-110"
                  onClick={() => setModalOpen(true)}
                >
                  <ManageAccountsIcon />
                </button>
              </Tooltip>
            </div>

            {/* Profile intro */}
            <p className="text-gray-500 font-secondary text-xs my-6">
              {`Hi ${first_name} ${last_name}, welcome to your profile. If you wish to update any of your information, please click the icon on the top-right corner of this pane and make your necessary adjustments. Happy Learning!!!`}
            </p>
            {/* Profile details */}

            <div className="flex flex-col gap-4 text-gray-900 my-5">
              <p className="font-semibold text-xs">
                Username:{" "}
                {data.username ? (
                  <span className="font-normal ml-3">{data.username}</span>
                ) : (
                  <>
                    {" "}
                    <span
                      className=" ml-3 underline font-bold cursor-pointer"
                      onClick={() => setModalOpen(true)}
                    >
                      create a username
                    </span>
                  </>
                )}
              </p>
              <p className="font-semibold text-xs">
                Fullname:{" "}
                <span className="font-normal ml-3">{`${first_name} ${last_name}`}</span>
              </p>
              <p className="font-semibold text-xs">
                UserID: <span className="font-normal ml-3">{id}</span>
              </p>
              <p className="font-semibold text-xs">
                Email: <span className="font-normal ml-3">{email}</span>
              </p>
              <p className="font-semibold text-xs">
                Phone: <span className="font-normal ml-3">{phonenumber}</span>
              </p>
            </div>
          </div>

          {/* Platform Settings */}

          {/* Misc */}
          <div className="profile_info p-6 rounded-xl bg-white/30 border border-gray-200 w-full">
            <div className="flex justify-between items-center my-2">
              <h4 className="text-sm font-semibold font-misc">
                Saying Goodbye?
              </h4>
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
              <h4 className="text-xs font-semibold font-misc my-4">
                Delete Account
              </h4>
              <span className="text-gray-400 text-xs mt-10 mb-5">
                This will remove all of your personal data forever.
              </span>
              <div>
                <button
                  type="button"
                  className="text-white bg-red hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-xs px-4 py-1.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 my-6"
                  onClick={() => setDeleteModalOpen(true)}
                >
                  Delete my account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
