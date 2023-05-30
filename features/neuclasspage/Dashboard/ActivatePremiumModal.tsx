import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import Link from "next/link";
import { MainContext } from "@/context/Main";

export default function ActivatePremium({ open, close }) {
  const { updateActivatePremModal } = useContext(MainContext);
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
                  <Dialog.Title
                    as="h1"
                    className="text-md font-bold leading-6 text-black"
                  >
                    Activate Premium Account
                  </Dialog.Title>
                  <div className="my-5">
                    <p>
                      <strong className="font-bold">Note:</strong> You will be
                      redirected to chat with a customer care representative via
                      Whatsapp
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link
                      href="https://api.whatsapp.com/send?phone=+2348138995939&text=Hi, I'd like to discuss about a premium account on Neuclass"
                      target="_blank"
                      onClick={updateActivatePremModal}
                    >
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green px-4 py-2 text-xs text-white hover:bg-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Chat with a representative
                      </button>
                    </Link>
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
