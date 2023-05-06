import React from "react";

export interface GlobalState {
  darkMode: boolean;
}

interface AppContextProps {
  globalState: GlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>>;
}

export const AppContext = React.createContext<AppContextProps>({
  globalState: { darkMode: true },
  setGlobalState: () => {},
});
