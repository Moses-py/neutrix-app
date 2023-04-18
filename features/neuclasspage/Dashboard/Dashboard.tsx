import { useContext } from "react";
import useWindowSize from "@/helpers/useWindowSize";
import { MainContext } from "@/context/Main";
import dynamic from "next/dynamic";

const DashboardLeft = dynamic(() => import("./DashboardLeft"));
const DrawerInterface = dynamic(() => import("./DrawerInterface"));

interface DashboardProps {
  children: React.ReactNode;
}
const Dashboard: React.FunctionComponent<DashboardProps> = ({ children }) => {
  const { openTab } = useContext(MainContext);

  const { width } = useWindowSize();
  return (
    <>
      <section className="bg-gray-50 px-2 py-6 h-full relative overflow-auto">
        {/* Div container holds all sections of the dashboard */}
        <div className="flex flex-row gap-3">
          {width > 1024 ? (
            <DashboardLeft />
          ) : (
            <DrawerInterface updateDrawer={openTab}>
              <DashboardLeft />
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
