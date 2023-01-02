import { useState, useContext, createContext } from 'react';
import sublinks from './data';

export interface ContextProps {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  isSubmenuOpen: boolean;
  openSubmenu: (text: string, coordinates: any) => void;
  closeSubmenu: () => void;
  page: any;
  location: any;
}
const defaultContextValue = {
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  isSubmenuOpen: false,
  openSubmenu: (text: string, coordinates: any) => {},
  closeSubmenu: () => {},
  page: {},
  location: {},
};
const AppContext = createContext(defaultContextValue);

const AppProvider = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  const [page, setPage] = useState<any>({ page: '', links: [] });
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text: string, coordinates: string) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
