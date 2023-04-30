import Image from "next/image";
import { StepperProp } from "./StepperOne";
import { ChangeEvent, FormEvent, useState } from "react";
import AlertFeedback from "../alerts/Success";
import { BeatLoader } from "react-spinners";

const StepperThree: React.FunctionComponent<StepperProp> = ({
  handleClick,
  alertFeedback,
  setAlert,
  userEmail,
  loading,
}) => {
  const [passwordInput, setPasswordInput] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [password_match, setPassword_match] = useState("clear");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // utility function to compare passwords
  function passwordChecker() {
    if (passwordInput.length < 1 && confirm_password.length < 1) {
      setPassword_match("clear");
    } else {
      if (confirm_password != passwordInput) {
        setPassword_match("no_match");
      } else {
        setPassword_match("match");
      }
    }
  }
  // Destructure alert feedback
  const { open, message, condition } = alertFeedback;

  function dataSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = { password: passwordInput, email: userEmail };
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
        <h2 className="text-lg font-bold mb-4">Create a secure password</h2>
        <p className="text-gray-600 mb-6 w-full lg:w-1/3">
          Everything checked out, please go ahead and create a new secure
          password.
        </p>
        <p className="text-gray-600 mb-6 w-full lg:w-1/3">
          Remember to choose a password that is unique to you and can be easily
          remembered
        </p>
        <form className="w-full max-w-sm" onSubmit={dataSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image src="/icons/lock.png" height={20} width={20} alt="lock" />
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center pl-3 z-50">
              {showPassword ? (
                <Image
                  src="/icons/hide_eye.png"
                  height={25}
                  width={25}
                  alt="lock"
                  onClick={() => setShowPassword(!showPassword)}
                  className=" cursor-pointer"
                />
              ) : (
                <Image
                  src="/icons/eye.png"
                  height={25}
                  width={25}
                  alt="lock"
                  onClick={() => setShowPassword(!showPassword)}
                  className=" cursor-pointer"
                />
              )}
            </div>
            <input
              type={!showPassword ? "password" : "text"}
              required
              id="password-address-icon"
              className={`bg-gray-50 border border-gray-300 ${
                password_match === "no_match" && "border-red"
              } ${
                password_match === "match" && "border-green"
              } text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block my-2 w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 placeholder:text-xs`}
              placeholder="Enter a new password"
              value={passwordInput}
              onKeyUp={passwordChecker}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPasswordInput(e.target.value)
              }
            />
          </div>
          {/* Password feedback */}
          {passwordInput && passwordInput.length < 10 && (
            <p className="text-red text-[11px]">
              More than 10 characters required
            </p>
          )}
          {passwordInput && passwordInput.length >= 10 && (
            <p className="text-green text-[11px]">Password length satisfied</p>
          )}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image src="/icons/lock.png" height={20} width={20} alt="lock" />
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center pl-3">
              {showConfirmPassword ? (
                <Image
                  src="/icons/hide_eye.png"
                  height={25}
                  width={25}
                  alt="lock"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className=" cursor-pointer"
                />
              ) : (
                <Image
                  src="/icons/eye.png"
                  height={25}
                  width={25}
                  alt="lock"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className=" cursor-pointer"
                />
              )}
            </div>
            <input
              disabled={!passwordInput}
              type={!showConfirmPassword ? "password" : "text"}
              required
              id="confirm-password-icon"
              className={`bg-gray-50 border border-gray-300 ${
                !passwordInput && "cursor-not-allowed"
              } ${password_match === "no_match" && "border-red"} ${
                password_match === "match" && "border-green"
              } text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 my-2 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 placeholder:text-xs`}
              placeholder="Confirm password"
              value={confirm_password}
              onKeyUp={passwordChecker}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setConfirm_password(e.target.value)
              }
            />
          </div>
          {password_match === "no_match" && (
            <p className="text-red text-[11px] my-1">
              Please confirm your password
            </p>
          )}
          {password_match === "match" && (
            <p className="text-green text-[11px] my-1">
              Password confirmation successful
            </p>
          )}
          <div className="my-5">
            <button
              disabled={loading || password_match === "no_match"}
              type="submit"
              className={`text-[#050708] ${
                (loading || password_match === "no_match") &&
                "cursor-not-allowed"
              } border border-[#050708] ${
                loading && "bg-black "
              } rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2`}
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

export default StepperThree;
