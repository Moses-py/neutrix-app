import { useState } from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardMain from "./DashboardMain";

const Dashboard = () => {
  const [tabs, setTabs] = useState(0);
  const [tabTitle, setTabTitle] = useState("Courses");
  return (
    <>
      <section className="bg-gray-50 px-2 py-6 h-[100vh]">
        {/* Div container holds all sections of the dashboard */}
        <div className="flex flex-row gap-3">
          {/* Side Nav section */}
          <div className="hidden xl:block">
            <DashboardLeft
              setTabs={setTabs}
              tabs={tabs}
              setTabTitle={setTabTitle}
            />
          </div>

          {/* Main Dashboard content */}
          <DashboardMain title={tabTitle} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
