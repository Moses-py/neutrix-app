import { MainContext } from "@/context/Main";
import Link from "next/link";
import { useContext } from "react";

const CourseTable = ({ user }) => {
  const { courses } = user;
  return (
    <>
      {courses.length > 0 && (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Course name
              </th>
              <th scope="col" className="px-6 py-3">
                Free
              </th>
              <th scope="col" className="px-6 py-3">
                Premium
              </th>
              <th scope="col" className="px-6 py-3">
                Book a session
              </th>
              <th scope="col" className="px-6 py-3">
                Upgrade to premium
              </th>
            </tr>
          </thead>
          {courses.map((course) => {
            return (
              <>
                <tbody>
                  <tr className="bg-white text-xs border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {course.courseTitle}
                    </th>
                    <td className="px-6 py-4">
                      <span className="bg-green/80 text-white text-xs px-5 py-1.5 rounded-full">
                        {course.free && "Active"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold cursor-not-allowed text-xs mpx-5 py-1.5 rounded-full">
                        {!course.premium && "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link href="#" className="font-semibold hover:underline">
                        Book
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link href="#" className="font-semibold hover:underline">
                        Upgrade
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      )}

      {courses.length < 1 && <p className="font-bold">No courses added</p>}
    </>
  );
};

export default CourseTable;
