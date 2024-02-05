import React, { createContext, useContext, ReactNode, useState } from "react";

interface LoggingContextProps {
  loggingMessage: string;
  setLoggingMessage: React.Dispatch<React.SetStateAction<string>>;
}

const LoggingContext = createContext<LoggingContextProps | undefined>(
  undefined
);

export const LoggingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggingMessage, setLoggingMessage] = useState<string>("");

  return (
    <LoggingContext.Provider value={{ loggingMessage, setLoggingMessage }}>
      {children}
    </LoggingContext.Provider>
  );
};

export const useLogging = () => {
  const context = useContext(LoggingContext);

  if (!context) {
    throw new Error("useLogging must be used within a LoggingProvider");
  }

  return context;
};
