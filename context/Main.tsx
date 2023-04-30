import { createContext, useState } from "react";

interface MainContextProps {
  openTab: boolean;
  updateTab: () => void;
  tabSelected: number;
  selectTab: (id: number) => void;
  title: string;
  updateTitle: (tab_title: string) => void;
  isOpen: boolean;
  toggleModal: () => void;
}

interface MainContextProviderProps {
  children: React.ReactNode;
}

export const MainContext = createContext<MainContextProps>({
  openTab: false,
  updateTab: () => {},
  tabSelected: 0,
  selectTab: () => {},
  title: "Courses",
  updateTitle: () => {},
  isOpen: false,
  toggleModal: () => {},
});

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  const [openTab, setOpenTab] = useState(false);
  const [tabSelected, setTabSelected] = useState(0);
  const [title, setTitle] = useState("Courses");
  // Modal
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const updateTab = () => {
    setOpenTab(!openTab);
  };

  const selectTab = (id: number) => {
    setTabSelected(id);
  };

  const updateTitle = (tab_title: string) => {
    setTitle(tab_title);
  };

  return (
    <MainContext.Provider
      value={{
        openTab,
        updateTab,
        tabSelected,
        selectTab,
        title,
        updateTitle,
        toggleModal,
        isOpen,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
