import React, { useContext, useState } from 'react';
import sublinks from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [submenuOpen, setSubMenuOpen] = useState(false);
  const [location, setlocation] = useState({});

  const [page, setpage] = useState({ page: '', links: [] });

  const OpenSideBar = () => {
    setSideBarOpen(true);
  };

  const CloseSideBar = () => {
    setSideBarOpen(false);
  };

  const OpenSubMenu = (text, coordinates) => {
    const page = sublinks.find((item) => item.page === text);

    setpage(page);
    setlocation(coordinates);
    setSubMenuOpen(true);
  };

  const CloseSubMenu = () => {
    setSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        submenuOpen,
        OpenSideBar,
        OpenSubMenu,
        CloseSideBar,
        CloseSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
