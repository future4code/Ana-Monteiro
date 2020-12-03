import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/Router";
import styled from "styled-components";

import Login from "./Telas/Login/Login";

const Container = styled.div`
  padding-top: 64px;
`;

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
