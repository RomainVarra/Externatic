import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type CompanyContextType = {
  userId: number | null;
  setUserId: (id: number) => void;
};

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

function CompanyProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <CompanyContext.Provider value={{ userId, setUserId }}>
      {children}
    </CompanyContext.Provider>
  );
}

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("Vous devez être connecté pour accèder à cette page.");
  }
  return context;
};

export default CompanyProvider;
