import { useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { createContext, useContext } from "react";

interface IResContextProps {
  isMobile: boolean;
}

const ResContext = createContext({} as IResContextProps);

interface IResContextProvider {
  children: React.ReactNode;
}

export const ResContextProvider: React.FC<IResContextProvider> = ({
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ResContext.Provider value={{ isMobile }}>{children}</ResContext.Provider>
  );
};

export const useResContext = () => {
  return useContext(ResContext);
};
