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
  storedCourseId: string;
  updateStoredCourseId: (id: string) => void;
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
  storedCourseId: "",
  updateStoredCourseId: () => {},
});

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  const [openTab, setOpenTab] = useState(false);
  // State to manage selected tab on the left side navigation
  const [tabSelected, setTabSelected] = useState(0);
  // State to manage the title of the current tab in dashboard main
  const [title, setTitle] = useState("Courses");
  // Modal
  const [isOpen, setIsOpen] = useState(true);
  // Store course id of booked course
  const [storedCourseId, setStoredCourseId] = useState(null);

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

  const updateStoredCourseId = (id: string) => {
    setStoredCourseId(id);
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
        storedCourseId,
        updateStoredCourseId,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
