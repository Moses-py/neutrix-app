import Plan from "./Plan";

const PremiumPlan = () => {
  return (
    <>
      <p className="py-3 mt-4 font-secondary text-md font-semibold">Premium</p>
      <Plan title={"Data Science and Machine Learning"} premium={true} />
    </>
  );
};

export default PremiumPlan;
