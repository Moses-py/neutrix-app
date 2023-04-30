import Image from "next/image";
import { StepperProp } from "./StepperOne";
import { ChangeEvent, FormEvent, useState } from "react";
import AlertFeedback from "../alerts/Success";
import { BeatLoader } from "react-spinners";
const StepperTwo: React.FunctionComponent<StepperProp> = ({
  handleClick,
  alertFeedback,
  setAlert,
  userEmail,
  loading,
}) => {
  const [codeInput, setCodeInput] = useState("");
  // Destructure alert feedback
  const { open, message, condition } = alertFeedback;

  // Function to submit form input
  function dataSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = { code: codeInput, email: userEmail };
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
        <h2 className="text-lg font-bold mb-4">Got the Code?</h2>
        <p className="text-gray-600 mb-6 w-full lg:w-1/3">
          We just sent a 6-digit verification code to your registered e-mail
          address. Check you inbox
        </p>
        <p className="text-gray-600 mb-6 w-full lg:w-1/3">
          Please note, it may take a few seconds to a few minutes to get the
          code. Do exercise some patience. Once you have the code, input it into
          the box below
        </p>
        <form className="w-full max-w-sm" onSubmit={dataSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src="/icons/keypad.png"
                height={20}
                width={20}
                alt="lock"
              />
            </div>
            <input
              type="text"
              required
              id="number-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 placeholder:text-xs"
              placeholder="123456"
              value={codeInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCodeInput(e.target.value)
              }
            />
          </div>
          <div className="my-5">
            <button
              disabled={loading}
              type="submit"
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

export default StepperTwo;
