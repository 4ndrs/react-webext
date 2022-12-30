import { useCounter } from "../context/counter";
import { Button } from "../styled";

const Controller = () => {
  const { increase } = useCounter();

  return <Button onClick={increase}>PANZER VOR!</Button>;
};

export default Controller;
