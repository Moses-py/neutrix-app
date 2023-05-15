function isCalendlyEvent(e) {
  return (
    e.origin === "https://calendly.com" &&
    e.data.event &&
    e.data.event.indexOf("calendly.") === 0
  );
}

const calendlyEventData = globalThis?.window?.addEventListener(
  "message",
  function (e) {
    if (isCalendlyEvent(e)) {
      /* Example to get the name of the event */
      return e.data.event, e.data.payload;
    }
  }
);

export default calendlyEventData;
