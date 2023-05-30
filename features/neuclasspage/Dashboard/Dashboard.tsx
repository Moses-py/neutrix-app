import { useContext } from "react";
import useWindowSize from "@/utils/misc/useWindowSize";
import { MainContext } from "@/context/Main";
import dynamic from "next/dynamic";
import DashboardMain from "./DashboardMain";
import ActivatePremium from "./ActivatePremiumModal";

const DashboardLeft = dynamic(() => import("./DashboardLeft"));
const DrawerInterface = dynamic(() => import("./DrawerInterface"));

interface DashboardProps {
  data: {
    first_name: string;
    last_name: string;
    email: string;
    id: string;
    phonenumber: string;
    courses: [];
    username: string;
  };
}

const Dashboard: React.FunctionComponent<DashboardProps> = ({ data }) => {
  const { openTab, activatePrem, updateActivatePremModal } =
    useContext(MainContext);

  const { width } = useWindowSize();
  return (
    <>
      <section className="bg-gray-50 px-2 py-6 h-full relative overflow-auto">
        {/* Div container holds all sections of the dashboard */}
        <div className="flex flex-row sm:gap-3">
          {width > 1024 ? (
            <DashboardLeft />
          ) : (
            <DrawerInterface updateDrawer={openTab}>
              <DashboardLeft />
            </DrawerInterface>
          )}

          {/* Main Dashboard content */}
          <DashboardMain data={data} />
          <ActivatePremium
            open={activatePrem}
            close={updateActivatePremModal}
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
