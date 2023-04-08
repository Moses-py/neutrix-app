interface PlanProps {
  title: string;
  premium: boolean;
}

const Plan: React.FunctionComponent<PlanProps> = ({ title, premium }) => {
  return (
    <>
      <div className="border p-6 border-gray-300 rounded-md text-misc mb-4">
        {/* Plan Name */}
        <p className="text-xs font-secondary leading-24">
          {premium ? "Lifetime Premium plan" : "45-minute Free trial session"}
        </p>
        {/* Course Title */}
        <h1 className="font-bold text-md font-secondary leading-32">{title}</h1>
        {/* expiry */}
        <div className="expiry my-5">
          <p className="font-secondary text-xs font-normal">Plan expires:</p>
          <p className="font-secondary text-sm font-semibold ">
            {premium ? "Lifetime" : "Thursday, 24 Feb, 2023"}
          </p>
        </div>

        {/* Minutes */}
        {!premium && (
          <div>
            <p className="font-normal font-secondary">Minutes left</p>

            <p className="font-semibold text-sm">00: 34: 26</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Plan;
