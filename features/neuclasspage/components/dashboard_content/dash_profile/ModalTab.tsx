import { ChangeEvent, FormEvent, useState } from "react";
import { Tab } from "@headlessui/react";
import axios from "axios";
import AlertFeedback from "@/components/alerts/Success";
import { AlertColor } from "@mui/material";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/router";
import Image from "next/image";
function classNames(...classNames: string[]) {
  return classNames.filter(Boolean).join(" ");
}

type AlertType = {
  open: boolean;
  condition: AlertColor | undefined;
  message: string;
};
export default function ModalTab({ user, close }) {
  const [loading, setLoading] = useState(false);
  const [updateDetails, setUpdateDetails] = useState({
    username: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password_match, setPassword_match] = useState("clear");

  const [pass, setPass] = useState({
    password: "",
    confirmPassword: "",
    old_password: "",
  });

  const [feedback, setFeedBack] = useState<AlertType>({
    open: false,
    condition: undefined,
    message: "",
  });

  const router = useRouter();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const field_name = e.target.name;
    field_name === "username" && setUpdateDetails({ username: e.target.value });
    field_name === "password" &&
      setPass((prev) => {
        return { ...prev, password: e.target.value };
      });
    field_name === "confirmPassword" &&
      setPass((prev) => {
        return { ...prev, confirmPassword: e.target.value };
      });
    field_name === "old_password" &&
      setPass((prev) => {
        return { ...prev, old_password: e.target.value };
      });
  }

  // utility function to compare passwords
  function passwordChecker() {
    if (pass.password.length < 1 && pass.confirmPassword.length < 1) {
      setPassword_match("clear");
    } else {
      if (pass.confirmPassword != pass.password) {
        setPassword_match("no_match");
      } else {
        setPassword_match("match");
      }
    }
  }

  async function handleGeneralDataSubmit(e: FormEvent) {
    setLoading(true);

    e.preventDefault();

    const updateData = { email: user.email, ...updateDetails };
    try {
      await axios({
        method: "POST",
        data: updateData,
        headers: {
          "Content-Type": "application.json",
        },
        url: "/api/mutations/updateUserData",
      }).then((response) => {
        setLoading(false);
        setFeedBack({
          open: true,
          condition: "success",
          message: response.data.message,
        });
        setTimeout(() => {
          close();
          router.push("/neuclass");
        }, 2500);
      });
    } catch (err) {
      alert(err);
      return {
        redirect: {
          destination: "/500",
          permanent: false,
        },
      };
    }
  }

  async function handlePasswordDataSubmit(e: FormEvent) {
    setPass({
      old_password: "",
      password: "",
      confirmPassword: "",
    });
    setLoading(true);
    setPassword_match("clear");
    e.preventDefault();
    if (pass.password === pass.old_password) {
      setFeedBack({
        open: true,
        condition: "warning",
        message:
          "Please choose a password different from your previous password",
      });
      setLoading(false);
    } else {
      const password_update_data = {
        email: user.email,
        old_password: pass.old_password,
        password: pass.password,
      };

      try {
        await axios({
          method: "POST",
          data: password_update_data,
          headers: {
            "Content-Type": "application.json",
          },
          url: "/api/mutations/updatePasswordData",
        }).then((response) => {
          setLoading(false);
          if (response.data.statusCode === 40) {
            setFeedBack({
              open: true,
              condition: "error",
              message: response.data.message,
            });
          } else {
            setFeedBack({
              open: true,
              condition: "success",
              message: response.data.message,
            });

            setTimeout(() => {
              close();
              router.push("/neuclass");
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
  }

  // Functionalities
  return (
    <div className="w-full px-5 py-16 sm:px-[1rem] font-secondary">
      <Tab.Group>
        <AlertFeedback
          open={feedback.open}
          setOpen={() => {
            setFeedBack({ open: false, condition: undefined, message: "" });
          }}
          message={feedback.message}
          status={feedback.condition}
        />
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 border border-black">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-xs font-normal leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "shadow bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              )
            }
          >
            <p>General info</p>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-xs font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "shadow bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              )
            }
          >
            <p>Password</p>
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 w-full xxxs:w-[300px] xxs:w-[400px] xs:w-[450px] sm:w-[600px]">
          <Tab.Panel className="bg-white p-4 rounded-lg">
            <form onSubmit={handleGeneralDataSubmit}>
              <div>
                <input
                  type="text"
                  id="Username"
                  className="bg-gray-50 border border-gray-300 text-black placeholder:text-black text-xs rounded-lg block w-full p-2.5"
                  placeholder="Set a unique username"
                  name="username"
                  onChange={handleInputChange}
                  value={updateDetails.username}
                />
              </div>
              <div className="grid gap-6 my-2 md:grid-cols-2">
                <div>
                  <input
                    disabled
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-400 placeholder:text-black text-xs rounded-lg block w-full p-2.5 cursor-not-allowed"
                    placeholder={user.first_name}
                    name="first_name"
                    value={user.first_name}
                  />
                </div>
                <div>
                  <input
                    disabled
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-400 placeholder:text-black text-xs rounded-lg block w-full p-2.5 cursor-not-allowed"
                    placeholder={user.last_name}
                    name="last_name"
                    value={user.last_name}
                  />
                </div>
              </div>
              <div className="w-full my-2">
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-500 placeholder:text-gray-400 text-xs rounded-lg block w-full p-2.5 cursor-not-allowed"
                  placeholder={user.phonenumber}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  disabled
                />
              </div>
              <div className="my-2">
                {/* Email */}
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-500 placeholder:text-gray-400 text-xs rounded-lg block w-full p-2.5 cursor-not-allowed"
                  placeholder={user.email}
                  disabled
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading && "cursor-not-allowed"
                } text-white bg-black hover:bg-gray-800 font-normal rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 my-4 text-center`}
              >
                {loading ? <BeatLoader size={10} color="#fff" /> : "Update"}
              </button>
            </form>
          </Tab.Panel>
          {/* Update Password tab panel */}
          <Tab.Panel className="bg-white p-4 rounded-lg w-full">
            <form onSubmit={handlePasswordDataSubmit}>
              <div className="w-full my-2">
                <input
                  type="password"
                  id="old_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5"
                  placeholder="Previous password"
                  name="old_password"
                  required
                  value={pass.old_password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2 w-full relative">
                <div className="absolute inset-y-0 right-4 flex items-center pl-3">
                  {showPassword ? (
                    <Image
                      src="/icons/hide_eye.png"
                      height={20}
                      width={20}
                      alt="lock"
                      onClick={() => setShowPassword(!showPassword)}
                      className=" cursor-pointer"
                    />
                  ) : (
                    <Image
                      src="/icons/eye.png"
                      height={20}
                      width={20}
                      alt="lock"
                      onClick={() => setShowPassword(!showPassword)}
                      className=" cursor-pointer"
                    />
                  )}
                </div>
                <input
                  type={!showPassword ? "password" : "text"}
                  id="new_password"
                  className={`bg-gray-50 border ${
                    password_match === "no_match" && "border-red"
                  } ${
                    password_match === "match" && "border-green"
                  } border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5`}
                  placeholder="New password"
                  value={pass.password}
                  name="password"
                  onChange={handleInputChange}
                  onKeyUp={passwordChecker}
                  required
                />
              </div>
              {/* Password feedback */}
              {pass.password && pass.password.length < 10 && (
                <p className="text-red text-[11px]">
                  More than 10 characters required
                </p>
              )}
              {pass.password && pass.password.length >= 10 && (
                <p className="text-green text-[11px]">
                  Password length satisfied
                </p>
              )}
              <div className="my-2 w-full relative">
                <div className="absolute inset-y-0 right-4 flex items-center pl-3">
                  {showConfirmPassword ? (
                    <Image
                      src="/icons/hide_eye.png"
                      height={20}
                      width={20}
                      alt="lock"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className=" cursor-pointer"
                    />
                  ) : (
                    <Image
                      src="/icons/eye.png"
                      height={20}
                      width={20}
                      alt="lock"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className=" cursor-pointer"
                    />
                  )}
                </div>
                <input
                  type={!showConfirmPassword ? "password" : "text"}
                  id="confirm_new_password"
                  className={`bg-gray-50 border ${
                    password_match === "no_match" && "border-red"
                  } ${password_match === "match" && "border-green"} ${
                    pass.password === "" && "cursor-not-allowed"
                  } border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5`}
                  placeholder="Confirm new password"
                  required
                  name="confirmPassword"
                  value={pass.confirmPassword}
                  onChange={handleInputChange}
                  onKeyUp={passwordChecker}
                />
              </div>
              {password_match === "no_match" && (
                <p className="text-red text-[11px]">
                  Please confirm your password
                </p>
              )}
              {password_match === "match" && (
                <p className="text-green text-[11px]">
                  Password confirmation successful
                </p>
              )}
              <button
                type="submit"
                disabled={loading || password_match === "no_match"}
                className={`selection:text-white bg-black ${
                  loading ||
                  (password_match === "no_match" && "cursor-not-allowed")
                } ${
                  password_match === "match" && "cursor-pointer"
                } hover:bg-gray-800 hover:text-white text-white font-normal rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 my-4 text-center`}
              >
                {loading ? <BeatLoader size={10} color="#fff" /> : "Update"}
              </button>
            </form>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
