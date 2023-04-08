import FreePlan from "./FreePlan";
import PremiumPlan from "./PremiumPlan";

const Subscription = () => {
  return (
    <>
      <p className="font-secondary text-xl leading-32 my-3">My Plans</p>
      <FreePlan />
      <PremiumPlan />
    </>
  );
};

export default Subscription;
