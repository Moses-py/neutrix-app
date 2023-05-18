import AlertFeedback from "@/components/alerts/Success";
import { Dialog, Transition } from "@headlessui/react";
import { AlertColor } from "@mui/material";
import axios from "axios";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { BeatLoader } from "react-spinners";

type AlertType = {
  open: boolean;
  condition: AlertColor | undefined;
  message: string;
};
export default function DeleteUserModal({ open, close, user }) {
  const [feedback, setFeedBack] = useState<AlertType>({
    open: false,
    condition: undefined,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleDeleteUser() {
    setLoading(true);
    try {
      await axios({
        method: "POST",
        data: { email: user },
        url: "/api/mutations/deleteAccount",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.data.statusCode === 20) {
          setFeedBack({
            open: true,
            condition: "success",
            message: response.data.message,
          });
          setLoading(false);
          setTimeout(() => {
            signOut();
          }, 2500);
        }
      });
    } catch (err) {
      return {
        redirect: {
          destination: "/500",
          permanent: false,
        },
      };
    }
  }

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="backdrop-blur-lg bg-gray-300/30 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden flex justify-center items-center overflow-y-auto md:inset-0 h-[calc(100%)]"
          onClose={close}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <AlertFeedback
                    open={feedback.open}
                    setOpen={() => {
                      setFeedBack({
                        open: false,
                        condition: undefined,
                        message: "",
                      });
                    }}
                    message={feedback.message}
                    status={feedback.condition}
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-md font-bold leading-6 text-red"
                  >
                    We are sorry to see you go
                  </Dialog.Title>
                  <div className="my-5">
                    <p className="text-xs text-gray-500">
                      This action will completely remove all details associated
                      with your <strong>Neutrix</strong> account.{" "}
                      <strong className="text-red">
                        This action is irreversible. Are you sure?
                      </strong>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red px-4 py-2 text-xs text-white hover:bg-red/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleDeleteUser}
                    >
                      {loading ? (
                        <BeatLoader size={10} color="#fff" />
                      ) : (
                        "Yes, Delete my account"
                      )}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
