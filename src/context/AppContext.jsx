import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [showNav, setShowNav] = useState(false);

  const toggleNavBar = () => {
    setShowNav((cur) => !cur);
  };

  useEffect(() => {
    console.log(showNav);
  }, [showNav]);

  return (
    <AppContext.Provider value={{ showNav, toggleNavBar }}>
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("AppContext was used outside of AppProvider");
  }
  return context;
}

export { AppProvider, useApp };
