import React from "react";

import { ButtonsContainer } from "./styles";

import AppBar from "@material-ui/core/App-bar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

const MainAppBar = () => {
  const history = useHistory();
  return (
    <AppBar className={"appbar"}>
      <Toolbar>
        <ButtonsContainer>
          <Button color="inherit" onClick={() => goToRecipesFeed(history)}>
            Cookenu
          </Button>
          <Button color="inherit" onClick={() => goToLogin(history)}>
            Logout
          </Button>
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
