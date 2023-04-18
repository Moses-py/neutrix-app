import { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { MainContext } from "@/context/Main";

interface DrawerInterfaceProps {
  children: React.ReactNode;
  updateDrawer: boolean;
}

const DrawerInterface: React.FunctionComponent<DrawerInterfaceProps> = ({
  children,
  updateDrawer,
}) => {
  const [state, setState] = useState(false);
  const { openTab } = useContext(MainContext);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <div>
      <Drawer open={updateDrawer} onClose={toggleDrawer(false)}>
        {children}
      </Drawer>
    </div>
  );
};

export default DrawerInterface;
