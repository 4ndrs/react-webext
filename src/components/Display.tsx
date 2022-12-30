import { useCounter } from "../context/counter";
import { H1 } from "../styled";

const Display = () => {
  const { counter } = useCounter();

  return <H1>{counter}</H1>;
};

export default Display;
