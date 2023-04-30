import { RecoveryDataPayload } from "@/lib/axios/passwordRecovery";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import AlertFeedback from "../alerts/Success";
import { AlertPopup } from "@/pages/passwordRecovery";
import { BeatLoader } from "react-spinners";

export type StepperProp = {
  handleClick: (payload: RecoveryDataPayload) => void;
  alertFeedback: AlertPopup;
  setAlert: () => void;
  updateEmail?: (email: string) => void;
  userEmail?: string;
  loading: boolean;
};

const StepperOne: React.FunctionComponent<StepperProp> = ({
  handleClick,
  alertFeedback,
  setAlert,
  updateEmail,
  loading,
}) => {
  const [emailInput, setEmailInput] = useState("");

  // Destructure alert object
  const { open, message, condition } = alertFeedback;

  function dataSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = { email: emailInput };
    updateEmail(emailInput);
    handleClick(payload);
  }
  return (
    <>
      <div className="my-[3rem]">
        <AlertFeedback
          open={open}
          setOpen={setAlert}
          message={message}
          status={condition}
        />
        <h2 className="text-lg font-bold mb-4">Forgot Your Password?</h2>
        <p className="text-gray-600 mb-6 w-full lg:w-1/3">
          Dont worry, it happens. Luckily, we have got you covered. Let us get
          you setup with a brand new password.
        </p>
        <p className="text-gray-600 mb-6 w-full lg:w-1/3">
          First, enter the email address associated with your account and we
          willll send you a link to reset your password.
        </p>
        <form className="w-full max-w-sm" onSubmit={dataSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              required
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 placeholder:text-xs"
              placeholder="name@neutrixapp.com"
              value={emailInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmailInput(e.target.value)
              }
            />
          </div>
          <div className="my-5">
            <button
              type="submit"
              disabled={loading}
              className={`text-[#050708] ${
                loading && "bg-black cursor-not-allowed"
              } border border-[#050708] rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2`}
            >
              {loading ? (
                <BeatLoader size={10} color="#fff" />
              ) : (
                <span className="flex items-center gap-2">
                  <span>Submit</span>
                  <Image
                    src="/icons/arrow-right-1.svg"
                    height={20}
                    width={20}
                    alt="arrow-right"
                  />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepperOne;
