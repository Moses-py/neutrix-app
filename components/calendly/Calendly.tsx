import { MainContext } from "@/context/Main";
import { Alert, AlertTitle } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Calendly = ({ user, courseID }) => {
  const [openAlert, setAlert] = useState({
    open: false,
    title: "",
    variant: "",
  });
  const router = useRouter();
  const { updateStoredCourseId } = useContext(MainContext);

  const payload = {
    email: user,
    courseID,
  };

  useCalendlyEventListener({
    onEventScheduled: async () => {
      setAlert({
        open: true,
        title: "Please wait...",
        variant: "filled",
      });
      await axios({
        method: "POST",
        data: payload,
        url: "/api/mutations/updateCourseBookingStatus",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async () => {
          setAlert({
            open: true,
            title: "Booking successful!",
            variant: "filled",
          });
          updateStoredCourseId(null);
          router.push("/neuclass");
        })
        .catch(() => {
          router.push("/500");
        });
    },
  });

  return (
    <>
      <>
        <div className=" bg-gray-100 fixed top-0 left-0 right-0 z-30 w-full p-4 overflow-hidden overflow-y-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full">
          {openAlert.open && (
            <div className="container my-2">
              <Alert severity="success" variant="filled">
                <AlertTitle>{openAlert.title}</AlertTitle>
                {openAlert.title === "Booking successful!" && (
                  <>
                    Redirecting... <strong>Please wait!</strong>
                  </>
                )}
              </Alert>
            </div>
          )}

          <InlineWidget
            url="https://calendly.com/neutrixclass/45min"
            prefill={{
              email: user,
            }}
            pageSettings={{
              backgroundColor: "1a1a1a",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "ffffff",
              textColor: "ffffff",
            }}
            styles={{ height: "100%", minWidth: "320px" }}
          />
        </div>
      </>
    </>
  );
};

export default Calendly;
