import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cadastro from "../Telas/Cadastro/Cadastro";
import Feed from "../Telas/Feed/Feed";
import Login from "../Telas/Login/Login";
import Post from "../Telas/Post/Post";
import ErrorPage from "../Telas/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route exact path={"/cadastro"}>
          <Cadastro />
        </Route>
        <Route exact path={"/feed"}>
          <Feed />
        </Route>
        <Route exact path={"/post"}>
          <Post />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
