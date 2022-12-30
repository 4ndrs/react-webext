import { createContext, useContext, useState } from "react";

const CounterContext = createContext<
  { counter: number; increase: () => void } | undefined
>(undefined);

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);

  const value = { counter, increase: () => setCounter(counter + 1) };
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
