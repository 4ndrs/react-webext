import { createContext, useContext, useEffect, useState } from "react";
import storageService from "../services/storage";

const CounterContext = createContext<
  { counter: number; increase: () => void } | undefined
>(undefined);

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getStorageCounter();
  }, []);

  const getStorageCounter = async () => {
    console.info("Getting storage counter");
    try {
      const counter = await storageService.getCounter();
      console.info(`Found ${counter}, setting as initial value`);
      setCounter(counter);
    } catch (error) {
      console.info("No counter found, assuming first time running");
    }
  };

  const increase = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    storageService.setCounter(newCounter);
  };

  const value = { counter, increase };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return context;
};

export { CounterProvider, useCounter };
