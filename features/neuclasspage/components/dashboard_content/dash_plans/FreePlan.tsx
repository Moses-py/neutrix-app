import Plan from "./Plan";

const FreePlan = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-3">
        <Plan title={"Data Analysis"} premium={false} />
        <Plan title={"Mathematics"} premium={false} />
      </div>
    </>
  );
};

export default FreePlan;
