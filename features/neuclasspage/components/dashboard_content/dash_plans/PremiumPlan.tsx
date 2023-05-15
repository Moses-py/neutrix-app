import Plan from "./Plan";

const PremiumPlan = ({ plans }) => {
  return (
    <>
      <div className="flex">
        {plans.length > 0 &&
          plans.map((plan) => {
            return (
              <>
                <Plan title={plan.courseTitle} premium={true} />
              </>
            );
          })}
        {plans.length < 1 && <p>No Plans subscribed</p>}
      </div>
    </>
  );
};

export default PremiumPlan;
