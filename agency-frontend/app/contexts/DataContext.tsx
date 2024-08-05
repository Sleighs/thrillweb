// DataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextProps {
  data: string;  
  setData: React.Dispatch<React.SetStateAction<string>>;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataContextProviderProps {
  children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<string>('initial data');
  const [currentPage, setCurrentPage] = useState<string>('Home');

  return (
    <DataContext.Provider value={{ 
      data, 
      setData,
      currentPage, 
      setCurrentPage
    
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
  return context;
};
