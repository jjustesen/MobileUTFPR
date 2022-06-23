import { createContext, useContext, useState } from "react";
const AulaContext = createContext();

const AulaProvider = ({ children }) => {
  const [selectedAula, setSelectedAula] = useState(false);

  return (
    <AulaContext.Provider
      value={{
        selectedAula,
        setSelectedAula,
      }}
    >
      {children}
    </AulaContext.Provider>
  );
};

export const useAula = () => {
  const context = useContext(AulaContext);
  const { selectedAula, setSelectedAula } = context;

  return { selectedAula, setSelectedAula };
};

export default AulaProvider;
