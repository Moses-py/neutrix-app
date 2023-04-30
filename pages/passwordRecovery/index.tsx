import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Image from "next/image";
import { steps, handleComplete } from "@/utils/recovery/passwordRecoveryUtils";
import StepperFour from "@/components/stepper/StepperFour";
import StepperOne from "@/components/stepper/StepperOne";
import StepperThree from "@/components/stepper/StepperThree";
import StepperTwo from "@/components/stepper/StepperTwo";

import {
  RecoveryDataPayload,
  checkRecoveryData,
} from "@/lib/axios/passwordRecovery";
import { AlertColor } from "@mui/material";

export type AlertPopup = {
  open: boolean;
  message: string;
  condition: AlertColor | undefined;
};
export default function PasswordRecoveryStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const [userEmail, setUserEmail] = useState("");

  const [alert, setAlert] = useState<AlertPopup>({
    open: false,
    message: "",
    condition: undefined,
  });

  // Set button loader state
  const [loading, setLoading] = useState(false);

  // Function to check if email exists
  async function recoveryDataResponse(payload: RecoveryDataPayload) {
    setLoading(true);
    await checkRecoveryData(payload)
      .then((res: { status: number; data: { message: string } }) => {
        if (res.status === 200) {
          if (res.data.message) {
            setLoading(false);
            setAlert({
              open: true,
              message: res.data.message,
              condition: "success",
            });
          }
          setTimeout(() => {
            setAlert({
              open: false,
              message: "",
              condition: undefined,
            });
            handleComplete(completed, setCompleted, setActiveStep, activeStep);
          }, 2000);
        } else {
          setLoading(false);
          setAlert({
            open: true,
            message: res.data.message,
            condition: "error",
          });
        }
      })
      .catch(() => {
        return {
          redirect: {
            destination: "/error-500",
            permanent: false,
          },
        };
      });
  }

  return (
    <>
      <div className="container py-5">
        <div className="flex items-center gap-1">
          <div className=" w-[50px] h-[50px] rounded-full p-1">
            <Image src="/triangle.webp" alt="" width={50} height={50} />
          </div>
          <h1 className="text-textDark leading-64 text-md font-bold font-secondary">
            Neutrix
          </h1>
        </div>
      </div>
      <div className="container translate-y-[10%] font-secondary">
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton />
              </Step>
            ))}
          </Stepper>
          <div>
            <>
              {activeStep === 0 && (
                <StepperOne
                  updateEmail={(email) => setUserEmail(email)}
                  setAlert={() =>
                    setAlert({
                      open: false,
                      condition: undefined,
                      message: "",
                    })
                  }
                  alertFeedback={alert}
                  handleClick={(data: RecoveryDataPayload) =>
                    recoveryDataResponse(data)
                  }
                  loading={loading}
                />
              )}
              {activeStep === 1 && (
                <StepperTwo
                  setAlert={() =>
                    setAlert({
                      open: false,
                      condition: undefined,
                      message: "",
                    })
                  }
                  alertFeedback={alert}
                  handleClick={(payload) => recoveryDataResponse(payload)}
                  userEmail={userEmail}
                  loading={loading}
                />
              )}
              {activeStep === 2 && (
                <StepperThree
                  setAlert={() =>
                    setAlert({
                      open: false,
                      condition: undefined,
                      message: "",
                    })
                  }
                  alertFeedback={alert}
                  handleClick={(payload) => recoveryDataResponse(payload)}
                  userEmail={userEmail}
                  loading={loading}
                />
              )}
              {activeStep === 3 && <StepperFour />}
            </>
          </div>
        </Box>
      </div>
    </>
  );
}
