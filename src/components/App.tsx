import Display from "./Display";
import Controller from "./Controller";
import { FlexContainer } from "../styled";
import { CounterProvider } from "../context/counter";

const App = () => {
  return (
    <CounterProvider>
      <FlexContainer>
        <Display />
        <Controller />
      </FlexContainer>
    </CounterProvider>
  );
};

export default App;
