import { useCounter } from "../context/counter";
import { H1 } from "../styled";

const Display = () => {
  const { counter } = useCounter();

  return (
    <>{counter ? <H1>{counter}</H1> : <img src="images/1487017704284.png" />}</>
  );
};

export default Display;
