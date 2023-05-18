import ModalTab from "./ModalTab";
import { Dialog } from "@headlessui/react";

const UpdateUserDataModal = ({ onClose, user, open }) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      <Dialog
        open={open}
        onClose={onClose}
        className="backdrop-blur-lg bg-gray-300/30 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden flex justify-center items-center overflow-y-auto md:inset-0 h-[calc(100%)]"
      >
        <Dialog.Panel className="">
          <ModalTab user={user} close={onClose} />
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
export default UpdateUserDataModal;
