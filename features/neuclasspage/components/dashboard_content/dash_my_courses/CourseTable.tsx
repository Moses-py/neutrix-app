import { MainContext } from "@/context/Main";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useRouter } from "next/router";
import { useContext } from "react";

const CourseTable = ({ user }) => {
  const { courses } = user;
  const router = useRouter();

  const { updateStoredCourseId, updateActivatePremModal } =
    useContext(MainContext);

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
                <div className=" relative min-w-[300px] w-[100%] h-[250px] px-6 py-8 border border-gray-300 rounded-lg shadow text-black">
                  <a href="#" className="mb-[5rem] ">
                    <h5 className=" my-2 text-md font-bold tracking-tight  dark:">
                      {course.courseTitle}
                    </h5>
                    <span className="text-xs  font-semibold ">
                      {course.status.toUpperCase() + " trial session"}
                    </span>
                  </a>
                  <div className="flex justify-between items-center absolute bottom-8 left-4 w-[100%] pr-[2rem]">
                    <button
                      role="button"
                      type="button"
                      disabled={course.booked}
                      className={` font-semibold border rounded-md px-4 py-2 hover:bg-gray-400${
                        course.booked
                          ? "cursor-not-allowed hover:bg-transparent text-gray-400 border-gray-300"
                          : "border-white bg-black text-white hover:bg-gray-800"
                      }`}
                      onClick={() => handleBooking(course.course_id)}
                    >
                      {course.booked ? "Booked session" : "Book a session"}
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        className="text-xs font-semibold border-white bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md"
                        onClick={updateActivatePremModal}
                      >
                        Upgrade
                        <UpgradeIcon />
                      </button>
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
