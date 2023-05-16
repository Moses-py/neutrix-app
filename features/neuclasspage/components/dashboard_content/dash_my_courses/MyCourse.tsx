import CourseTable from "./CourseTable";

const MyCourse = ({ user }) => {
  return (
    <>
      <div className="header pb-[2rem]">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          My Courses
        </h1>
      </div>

      {/* Table data */}

      <div className="h-[calc(100%-1rem)] max-h-full relative">
        <CourseTable user={user} />
      </div>
    </>
  );
};

export default MyCourse;
