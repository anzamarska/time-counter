import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import Counter from "./components/Counter";

const MyButton = styled.button`
  border: 2px solid purple;
  padding: 3vw;
`;

ReactDOM.render(
  <React.StrictMode>
    <MyButton />
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
