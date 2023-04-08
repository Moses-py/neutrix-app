import { useState } from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardMain from "./DashboardMain";
import DrawerInterface from "./DrawerInterface";
import useWindowSize from "@/helpers/useWindowSize";

interface DashboardProps {
  toggleDrawer: () => void;
}
const Dashboard = () => {
  const [tabs, setTabs] = useState(0);
  const [tabTitle, setTabTitle] = useState("Courses");
  const [openTab, setOpenTab] = useState(false);

  const { width } = useWindowSize();
  return (
    <>
      <section className="bg-gray-50 px-2 py-6 h-full relative overflow-auto">
        {/* Div container holds all sections of the dashboard */}
        <div className="flex flex-row gap-3">
          {width > 1024 ? (
            <DashboardLeft
              setTabs={setTabs}
              tabs={tabs}
              setTabTitle={setTabTitle}
              setOpenTab={() => setOpenTab(false)}
            />
          ) : (
            <DrawerInterface updateDrawer={openTab}>
              <DashboardLeft
                setTabs={setTabs}
                tabs={tabs}
                setTabTitle={setTabTitle}
                setOpenTab={() => setOpenTab(false)}
              />
            </DrawerInterface>
          )}

          {/* Main Dashboard content */}
          <DashboardMain title={tabTitle} setOpenTab={() => setOpenTab(true)} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
