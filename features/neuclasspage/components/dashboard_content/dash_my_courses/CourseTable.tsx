import { MainContext } from "@/context/Main";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useRouter } from "next/router";
import { useContext } from "react";

const CourseTable = ({ user }) => {
  const { courses } = user;
  const router = useRouter();

  const { updateStoredCourseId } = useContext(MainContext);

  function handleBooking(id: string) {
    updateStoredCourseId(id);
    router.push("/booking");
  }
  return (
    <>
      {courses.length > 0 && (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => {
            return (
              <>
                {/* CARD */}
                <div className="bg-gradient-to-b from-gray-900 to-gray-600 relative min-w-[300px] w-[100%] h-[250px] px-6 py-8 border border-gray-200 rounded-lg shadow ">
                  <a href="#" className="mb-[5rem] ">
                    <h5 className=" my-2 text-md font-bold tracking-tight text-white dark:text-white">
                      {course.courseTitle}
                    </h5>
                    <span className="text-xs text-white font-semibold ">
                      {course.status.toUpperCase() + " trial session"}
                    </span>
                  </a>
                  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p> */}
                  <div className="flex justify-between items-center absolute bottom-8 left-4 w-[100%] pr-[2rem]">
                    <button
                      role="button"
                      type="button"
                      disabled={course.booked}
                      className={` font-semibold border rounded-md px-4 py-2 hover:bg-gray-400 hover:text-white ${
                        course.booked
                          ? "cursor-not-allowed hover:bg-transparent hover:text-gray-300 text-gray-300 border-gray-300"
                          : "border-white text-white"
                      }`}
                      onClick={() => handleBooking(course.course_id)}
                    >
                      {course.booked ? "Booked session" : "Book a session"}
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white font-semibold">
                        Upgrade
                        <UpgradeIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}

      {courses.length < 1 && <p className="font-bold">No courses added</p>}
    </>
  );
};

export default CourseTable;
