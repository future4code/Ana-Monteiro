import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/Router";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./constantes/theme";

import Login from "./Telas/Login/Login";

const Container = styled.div`
  padding-top: 64px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <Login />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
