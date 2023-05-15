import Plan from "./Plan";

const FreePlan = ({ plans }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-3">
        {plans.length > 0 &&
          plans.map((plan) => {
            return (
              <>
                <Plan title={plan.courseTitle} premium={false} />
              </>
            );
          })}
        {plans.length < 1 && <p>No Plans subscribed</p>}
      </div>
    </>
  );
};

export default FreePlan;
