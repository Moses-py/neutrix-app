import { useState, useContext } from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardMain from "./DashboardMain";
import DrawerInterface from "./DrawerInterface";
import useWindowSize from "@/helpers/useWindowSize";
import Subscription from "../components/dashboard_content/dash_plans/Subscription";
import { MainContext } from "@/context/Main";

interface DashboardProps {
  children: React.ReactNode;
}
const Dashboard: React.FunctionComponent<DashboardProps> = ({ children }) => {
  const [tabTitle, setTabTitle] = useState("Courses");

  const { openTab } = useContext(MainContext);

  const { width } = useWindowSize();
  return (
    <>
      <section className="bg-gray-50 px-2 py-6 h-full relative overflow-auto">
        {/* Div container holds all sections of the dashboard */}
        <div className="flex flex-row gap-3">
          {width > 1024 ? (
            <DashboardLeft setTabTitle={setTabTitle} />
          ) : (
            <DrawerInterface updateDrawer={openTab}>
              <DashboardLeft setTabTitle={setTabTitle} />
            </DrawerInterface>
          )}

          {/* Main Dashboard content */}
          {children}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
