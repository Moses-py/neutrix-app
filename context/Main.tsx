import { createContext, useState } from "react";

interface MainContextProps {
  openTab: boolean;
  updateTab: () => void;
  tabSelected: number;
  selectTab: (id: number) => void;
}

interface MainContextProviderProps {
  children: React.ReactNode;
}

export const MainContext = createContext<MainContextProps>({
  openTab: false,
  updateTab: () => {},
  tabSelected: 0,
  selectTab: () => {},
});

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  const [openTab, setOpenTab] = useState(false);
  const [tabSelected, setTabSelected] = useState(0);

  const updateTab = () => {
    setOpenTab(!openTab);
  };

  const selectTab = (id: number) => {
    setTabSelected(id);
  };

  return (
    <MainContext.Provider
      value={{ openTab, updateTab, tabSelected, selectTab }}
    >
      {children}
    </MainContext.Provider>
  );
}
