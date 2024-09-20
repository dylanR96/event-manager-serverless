import { createContext, useState, ReactNode, FC } from "react";

interface TicketContextType {
  value: string;
  setValue: (newValue: string) => void;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("Hello there");

  return (
    <TicketContext.Provider value={{ value, setValue }}>
      {children}
    </TicketContext.Provider>
  );
};

export { TicketContext, MyProvider };
