import { SetStateAction } from "react";

export const steps = [
  "Verify email address",
  "Enter vrification code",
  "Create new password",
  "All done",
];

export const totalSteps = () => {
  return steps.length;
};

export const completedSteps = (completed: {}) => {
  return Object.keys(completed).length;
};

export const isLastStep = (activeStep: number) => {
  return activeStep === totalSteps() - 1;
};

export const allStepsCompleted = (completed: {}) => {
  return completedSteps(completed) === totalSteps();
};

export const handleNext = (
  activeStep: number,
  setActiveStep: (arg0: any) => void,
  completed: {}
) => {
  const newActiveStep =
    isLastStep(activeStep) && !allStepsCompleted(completed)
      ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
  setActiveStep(newActiveStep);
};

export const handleBack = (
  setActiveStep: (arg0: (prevActiveStep: number) => number) => void
) => {
  setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
};

export const handleStep =
  (step: number, setActiveStep: (arg0: number) => void) => () => {
    setActiveStep(step);
  };

export const handleComplete = (
  completed: any,
  setCompleted: (arg0: any) => void,
  setActiveStep: { (value: SetStateAction<number>): void; (arg0: any): void },
  activeStep: number
) => {
  const newCompleted = completed;
  newCompleted[activeStep] = true;
  setCompleted(newCompleted);
  handleNext(activeStep, setActiveStep, completed);
};

export const handleReset = (
  setActiveStep: (arg0: number) => void,
  setCompleted: (arg0: {}) => void
) => {
  setActiveStep(0);
  setCompleted({});
};
