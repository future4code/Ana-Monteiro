import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/Main/HomePage.js";

import { LoginAdmPage } from "./pages/LoginAdm/LoginAdmPage.js";

import ListTripsPage from "./pages/ListTrips/ListTripsPage.js";

import DetailsTrips from "./pages/DetailsTrips/TripDetailsPage.js";

import CreateTripPage from "./pages/CreateTrips/CreateTripPage.js";

import ApplicationForm from "./pages/ApplicationForm/ApplicationForm.js";

import Error from "./pages/Error/Error.js";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/loginadmpage">
          <LoginAdmPage />
        </Route>
        <Route exact path="/listtripspage">
          <ListTripsPage />
        </Route>
        <Route exact path="/detailstrips">
          <DetailsTrips />
        </Route>
        <Route exact path="/createtrippage">
          <CreateTripPage />
        </Route>
        <Route exact path="/applicationform">
          <ApplicationForm />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
