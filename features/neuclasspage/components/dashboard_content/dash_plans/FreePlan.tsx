import Plan from "./Plan";

const FreePlan = () => {
  return (
    <>
      <p className="py-3 font-secondary text-md font-semibold">Free</p>

      <Plan title={"Data Analysis"} premium={false} />
      <Plan title={"Mathematics"} premium={false} />
    </>
  );
};

export default FreePlan;
