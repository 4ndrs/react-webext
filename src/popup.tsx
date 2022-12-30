import ReactDOM from "react-dom/client";
import styled from "styled-components";

const Button = styled.button`
  background: white;
  color: palevioletred;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    color: red;
    border-color: red;
    cursor: pointer;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Button>PANZER VOR!</Button>
);
