import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Calendly = ({ openCalendlyAction, user, updateBookState }) => {
  useCalendlyEventListener({
    onEventScheduled: () => {
      setTimeout(() => {
        updateBookState();
        openCalendlyAction();
      }, 2000);
    },
  });

  return (
    <>
      <>
        <div className=" bg-gray-100 absolute top-0 left-0 right-0 z-30 w-full p-4 overflow-hidden overflow-y-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <InlineWidget
            url="https://calendly.com/neutrixclass/45min"
            prefill={{
              email: user.email,
              firstName: user.first_name,
              lastName: user.last_name,
              name: `${user.first_name} ${user.last_name}`,
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
