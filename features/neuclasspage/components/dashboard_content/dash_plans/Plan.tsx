interface PlanProps {
  title: string;
  premium: boolean;
}

const Plan: React.FunctionComponent<PlanProps> = ({ title, premium }) => {
  return (
    <>
      <div className="border p-6 w-full border-gray-300 rounded-md text-misc mb-4 flex justify-between items-center">
        <div className="">
          {/* Plan Name */}
          <p className="text-xs font-secondary leading-24">
            {premium ? "Lifetime Premium plan" : "45-minute Free trial session"}
          </p>
          {/* Course Title */}
          <h1 className="font-semibold text-sm font-secondary leading-32">
            {title}
          </h1>
        </div>
        <div className="">
          <span className="bg-green/80 text-white text-xs px-5 py-1.5 rounded-full">
            Active
          </span>
        </div>
      </div>
    </>
  );
};

export default Plan;
