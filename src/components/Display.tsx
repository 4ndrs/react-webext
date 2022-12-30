import { useCounter } from "../context/counter";
import { Heading1 } from "../styled";

const Display = () => {
  const { counter } = useCounter();

  return (
    <>
      {counter ? (
        <Heading1>{counter}</Heading1>
      ) : (
        <img src="images/1487017704284.png" />
      )}
    </>
  );
};

export default Display;
