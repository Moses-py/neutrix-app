import Plan from "./Plan";

const PremiumPlan = () => {
  return (
    <>
      <div className="flex">
        <Plan title={"Data Science and Machine Learning"} premium={true} />
      </div>
    </>
  );
};

export default PremiumPlan;
