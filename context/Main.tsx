import axios from "axios";
import { createContext, useState } from "react";
import { useUpdateEffect } from "usehooks-ts";

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
  noteList: {}[];
  updateNote: (note: {}) => void;
  deleteNote: (noteTitle: string) => void;
  deleteBookmark: (link: string) => void;
  updateUser: (email: string) => void;
  updateBookmark: (bookmark: string[]) => void;
  bookmarks: string[];
  updateActivatePremModal: () => void;
  activatePrem: boolean;
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
  noteList: [],
  updateNote: () => {},
  deleteNote: () => {},
  deleteBookmark: () => {},
  updateUser: () => {},
  updateBookmark: () => {},
  bookmarks: [],
  updateActivatePremModal: () => {},
  activatePrem: false,
});

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  // Store current user email
  const [user, setUser] = useState(null);
  // Store current tab
  const [openTab, setOpenTab] = useState(false);
  // State to manage selected tab on the left side navigation
  const [tabSelected, setTabSelected] = useState(0);
  // State to manage the title of the current tab in dashboard main
  const [title, setTitle] = useState("Courses");
  // Modal open state
  const [isOpen, setIsOpen] = useState(true);
  // Store course id of booked course
  const [storedCourseId, setStoredCourseId] = useState(null);
  // Temporary storage for user notes
  const [noteList, setNoteList] = useState([]);
  // Temporary storage for bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  //Open activate premium modal
  const [activatePrem, setActivePrem] = useState(false);

  const updateActivatePremModal = () => {
    setActivePrem(!activatePrem);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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

  const updateUser = (email: string) => {
    setUser(email);
  };

  const updateBookmark = (bookmark: []) => {
    setBookmarks((prev) => {
      return [...prev, ...bookmark];
    });
  };

  const updateNote = (note: []) => {
    setNoteList((prev) => {
      return [...prev, ...note];
    });
  };

  const deleteNote = (noteTitle: string) => {
    const filteredNote = noteList.filter((note) => {
      return note.title != noteTitle;
    });
    setNoteList(filteredNote);
    const deleteData = { email: user, noteTitle };

    const deleteUserNote = async () => {
      await axios({
        method: "POST",
        data: deleteData,
        headers: {
          "Content-Type": "application/json",
        },
        url: "/api/mutations/deleteNote",
      }).then((data) => {
        if (data) return;
      });
    };

    deleteUserNote();
    return;
  };

  const deleteBookmark = (link: string) => {
    const filteredBookmarks = bookmarks.filter((bookmark) => {
      return bookmark != link;
    });
    setBookmarks(filteredBookmarks);
    const deleteData = { email: user, bookmark: link };
    const deleteUserBookmark = async () => {
      await axios({
        method: "POST",
        data: deleteData,
        headers: {
          "Content-Type": "application/json",
        },
        url: "/api/mutations/deleteBookmark",
      }).then((data) => {
        if (data) return;
      });
    };

    deleteUserBookmark();
    return;
  };

  useUpdateEffect(() => {
    const updateUserNote = async () => {
      await axios({
        method: "POST",
        data: noteList[noteList.length - 1],
        headers: {
          "Content-Type": "application/json",
        },
        url: "/api/mutations/updateNotes",
      }).then((data) => {
        if (data) return;
      });
    };
    updateUserNote();

    return;
  }, [noteList]);

  useUpdateEffect(() => {
    const updateUserBookmark = async () => {
      if (bookmarks.length > 0) {
        const updateData = {
          email: user,
          bookmark: bookmarks[bookmarks.length - 1],
        };
        await axios({
          method: "POST",
          data: updateData,
          headers: {
            "Content-Type": "application/json",
          },
          url: "/api/mutations/updateBookmarks",
        }).then((data) => {
          if (data) return;
        });
      }
    };

    updateUserBookmark();

    return;
  }, [bookmarks]);

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
        noteList,
        updateNote,
        deleteNote,
        deleteBookmark,
        updateUser,
        updateBookmark,
        bookmarks,
        updateActivatePremModal,
        activatePrem,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
