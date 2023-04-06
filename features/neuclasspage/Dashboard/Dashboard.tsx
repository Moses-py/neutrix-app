import { useState } from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardMain from "./DashboardMain";

const Dashboard = () => {
  const [tabs, setTabs] = useState(0);
  const [tabTitle, setTabTitle] = useState("Courses");
  const [openTab, setOpenTab] = useState(false);
  return (
    <>
      <section className="bg-gray-50 px-2 py-6 h-full relative overflow-auto">
        {/* Div container holds all sections of the dashboard */}
        <div className="flex flex-row gap-3">
          {/* Side Nav section */}
          <div
            className={`fixed ${
              openTab ? "left-0" : "left-[-100%]"
            }  top-0 lg:relative lg:left-0 z-50 transition-all ease-in-out duration-[900]`}
          >
            <DashboardLeft
              setTabs={setTabs}
              tabs={tabs}
              setTabTitle={setTabTitle}
              setOpenTab={() => setOpenTab(false)}
            />
          </div>

          {/* Main Dashboard content */}
          <DashboardMain
            title={tabTitle}
            setOpenTab={() => setOpenTab(!openTab)}
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
