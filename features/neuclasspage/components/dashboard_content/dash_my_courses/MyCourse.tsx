import Script from "next/script";
import CourseTable from "./CourseTable";
import { useState } from "react";
import Calendly from "@/components/calendly/Calendly";

const MyCourse = ({ user }) => {
  const [openCalendly, setOpenCalendly] = useState(false);
  const [bookState, setBookState] = useState("Book");
  return (
    <>
      <div className="header pb-[2rem]">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          My Courses
        </h1>
      </div>

      {/* Table data */}

      <div className="h-[calc(100%-1rem)] max-h-full relative">
        <CourseTable
          user={user}
          openCalendlyAction={() => setOpenCalendly(true)}
          bookingStatus={bookState}
        />
        {openCalendly && (
          <Calendly
            openCalendlyAction={() => setOpenCalendly(false)}
            user={user}
            updateBookState={() => setBookState("Booked")}
          />
        )}
      </div>
    </>
  );
};

export default MyCourse;
