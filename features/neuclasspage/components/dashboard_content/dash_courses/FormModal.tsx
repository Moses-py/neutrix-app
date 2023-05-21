import AlertFeedback from "@/components/alerts/Success";
import generateString from "@/utils/misc/generateString";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { BeatLoader } from "react-spinners";

const AddCourseFormModal = ({ selectedCourse, user, onClose }) => {
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Activate free session");
  const [alert, setAlert] = useState({
    open: false,
    condition: undefined,
    message: "",
  });

  const check_course = user.courses.find((course) => {
    return course.courseTitle === selectedCourse;
  });

  const router = useRouter();

  async function handleActivateFreebie(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setDisabled(true);
    setButtonText("Activating");

    if (!check_course) {
      const rand_id = generateString(10);
      const formData = {
        email: user.email,
        courseData: [
          ...user.courses,
          {
            course_id: rand_id,
            courseTitle: selectedCourse,
            status: "free",
            booked: false,
          },
        ],
      };

      try {
        await axios({
          method: "POST",
          data: formData,
          url: "/api/mutations/updateCourseData",
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          setButtonText("Please wait");
          setIsLoading(false);
          setButtonText("Completed");
          setAlert({
            open: true,
            condition: "success",
            message: "Course registered successfully",
          });
          setTimeout(() => {
            router.replace(router.asPath);
            onClose();
          }, 2000);
        });
      } catch (err) {
        setButtonText("Activate free session");
        setIsLoading(false);
        setDisabled(false);

        return {
          redirect: {
            destination: "/500",
            permanent: false,
          },
        };
      }
    } else {
      setButtonText("Activate free session");
      setIsLoading(false);
      setDisabled(false);
      // Give some alert
      setAlert({
        open: true,
        condition: "error",
        message: "Already registered for this course",
      });
    }
  }
  return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className="backdrop-blur-lg bg-gray-300/30 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden flex justify-center items-center overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              disabled={isLoading}
              className={`absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ${
                isLoading && "cursor-not-allowed"
              }`}
              data-modal-hide="authentication-modal"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                Add free course
              </h3>
              {alert.open === true && (
                <AlertFeedback
                  open={true}
                  setOpen={() =>
                    setAlert({ open: false, condition: undefined, message: "" })
                  }
                  message={alert.message}
                  status={alert.condition}
                />
              )}
              <form className="space-y-6" onSubmit={handleActivateFreebie}>
                <div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-400 text-xs rounded-lg block w-full p-2.5 cursor-not-allowed"
                    value={`${user.first_name} ${user.last_name}`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="username"
                    disabled
                    value={user.email}
                    className="bg-gray-50 border border-gray-300 text-gray-400 text-xs rounded-lg block w-full p-2.5 cursor-not-allowed"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="course name"
                    id="username"
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-400 text-xs rounded-lg block w-full p-2.5 cursor-not-allowed"
                    value={selectedCourse}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="version"
                    id="username"
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-400 text-xs rounded-lg block w-full p-2.5 mb-3 cursor-not-allowed"
                    value={"Free Plan (45-minute session)"}
                  />
                  <span className="text-[12px] text-red font-secondary">
                    Please note, this session only lasts for 45-minutes, after
                    which you can choose to upgrade to a paid version{" "}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={disabled}
                  className={`w-full text-white bg-black rounded-lg text-sm px-5 py-2.5 text-center ${
                    disabled && "cursor-not-allowed"
                  }`}
                >
                  {isLoading && <BeatLoader size={10} color="#fff" />}
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourseFormModal;
